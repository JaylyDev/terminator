import {
  EntityHealthComponent,
  RawText,
  TicksPerSecond,
  system,
  world,
} from "@minecraft/server";
import { terminatorSpawn } from "../terminator-events/onTerminatorSpawn";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";
import { MinecraftColor } from "../minecraft-color";

// naming tag
terminatorSpawn.subscribe(({ entity }) => {
  const terminatorPopulation = world
    .getDimension("overworld")
    .getEntities({ type: "entity:terminator" }).length;

  if (terminatorPopulation > 1)
    entity.nameTag = `Terminator (${terminatorPopulation - 1})`;
  else entity.nameTag = "Terminator";
});

// broadcast to world
terminatorSpawn.subscribe(({ entity }) => {
  system.runTimeout(() => {
    const rawtext: RawText = {
      rawtext: [
        { text: MinecraftColor.yellow },
        { translate: "multiplayer.player.joined", with: [entity.nameTag] },
      ],
    };
    world.sendMessage(rawtext);
    world.playSound("mob.terminator.spawn", entity.location);
  }, 2);
});

// detect when terminator's health is below 20hp (max 60hp)
terminatorSpawn.subscribe(({ entity }) => {
  const health = entity.getComponent("health") as EntityHealthComponent;
  let triggered = false;

  const id = system.runInterval(() => {
    if (!health.isValid() || triggered) {
      system.clearRun(id);
      return;
    }
    if (
      health.currentValue < 20 &&
      !entity.hasTag("terminatorNoRegeneration")
    ) {
      entity.addEffect(MinecraftEffectTypes.Regeneration, 6 * TicksPerSecond, {
        amplifier: 4,
        showParticles: false,
      });
      entity.addEffect(MinecraftEffectTypes.Absorption, 24 * TicksPerSecond, {
        amplifier: 3,
        showParticles: false,
      });
      entity.addEffect(MinecraftEffectTypes.Resistance, 60 * TicksPerSecond, {
        amplifier: 0,
        showParticles: false,
      });
      entity.addEffect(
        MinecraftEffectTypes.FireResistance,
        60 * TicksPerSecond,
        {
          amplifier: 0,
          showParticles: false,
        }
      );

      const dummyEntity = entity.dimension.spawnEntity(
        "entity:dummy",
        entity.location
      );
      dummyEntity.runCommand("spreadplayers ~ ~ 32 48 @s");
      dummyEntity.triggerEvent("dummy:request_pathfind");

      entity.triggerEvent("terminator:escape");
      triggered = true;
    }
  });
});
