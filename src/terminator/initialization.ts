import {
  EntityHealthComponent,
  RawText,
  TicksPerSecond,
  system,
  world,
} from "@minecraft/server";
import { terminatorSpawn } from "../terminator-events/onTerminatorSpawn";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";

// naming tag
terminatorSpawn.subscribe(({ entity }) => {
  const numberOfTerminators = world
    .getDimension("overworld")
    .getEntities({ type: "entity:terminator" }).length;

  entity.nameTag = `Terminator (${numberOfTerminators})`;
});

// broadcast to world
terminatorSpawn.subscribe(({ entity }) => {
  const rawtext: RawText = {
    rawtext: [
      { translate: "multiplayer.player.joined", with: [entity.nameTag] },
    ],
  };
  world.sendMessage(rawtext);
});

// detect when terminator's health is below 20hp (max 60hp)
terminatorSpawn.subscribe(({ entity }) => {
  const health = entity.getComponent("health") as EntityHealthComponent;

  const id = system.runInterval(() => {
    if (!health.isValid()) {
      system.clearRun(id);
      return;
    }
    if (
      health.currentValue < 20 &&
      !entity.hasTag("terminatorNoRegeneration")
    ) {
      // "/effect @s[tag=!terminatorNoRegeneration] regeneration 6 4 false",
      // "/effect @s[tag=!terminatorNoRegeneration] absorption 24 3 false",
      // "/effect @s[tag=!terminatorNoRegeneration] resistance 60 0 false",
      // "/effect @s[tag=!terminatorNoRegeneration] fire_resistance 60 0 false",
      // "/event entity @s[tag=!terminatorNoRegeneration] terminator:escape"

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
      entity.triggerEvent("terminator:escape");
    }
  });
});
