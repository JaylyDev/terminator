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
import { TerminatorEntity } from "./terminator";
import { getSpreadLocation } from "../dummyEntity/spreadDummies";
import { debugEnabled } from "../config";

// naming tag
terminatorSpawn.subscribe(({ entity }) => {
  system.runTimeout(() => {
    const nameTag = entity.nameTag || "Terminator";
    entity.nameTag = nameTag;
    const terminators = entity.dimension.getEntities({
      type: "entity:terminator",
    });
    // Check if existing terminator has the same nameTag, if there one set the entity nameTag to "[name] (1)"
    // If there's more than one with the same name, increment the index
    if (terminators.some((entity) => entity.nameTag === nameTag)) {
      const nameTagRegex = new RegExp(`^${nameTag} \\(\\d+\\)$`);
      const terminatorsWithSameName = terminators.filter(
        (terminator) =>
          (terminator.nameTag === nameTag && terminator !== entity) ||
          nameTagRegex.test(terminator.nameTag)
      );
      if (terminatorsWithSameName.length > 0)
        entity.nameTag = `${nameTag} (${terminatorsWithSameName.length})`;
    }

    // broadcast to world
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

      // Trigger terminator to pathfind to a random location within 32-48 block radius
      const terminator = new TerminatorEntity(entity);
      const locationOffsetXZ = {
        x: Math.floor(Math.random() * 32 - 17 + terminator.location.x),
        z: Math.floor(Math.random() * 32 - 17 + terminator.location.z),
      };
      const locationOffset = getSpreadLocation(
        locationOffsetXZ,
        entity.dimension
      );
      if (debugEnabled) terminator.chat(`I'm going to ${locationOffset.x}, ${locationOffset.y}, ${locationOffset.z}!`);
      terminator.navigateToLocation(locationOffset);

      triggered = true;
    }
  });
});
