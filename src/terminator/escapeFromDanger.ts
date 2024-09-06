import {
  EntityHealthComponent,
  TicksPerSecond,
  system,
} from "@minecraft/server";
import { MinecraftEffectTypes } from "@minecraft/vanilla-data";
import { debugEnabled } from "../config";
import { getSpreadLocation } from "../dummyEntity/spreadDummies";
import { TerminatorEntity } from "./terminator";
import { getAllTerminators } from "./getAll";

// detect when terminator's health is below 20hp (max 60hp)
system.runInterval(() => {
  for (const entity of getAllTerminators()) {
    const health = entity.getComponent("health") as EntityHealthComponent;
    const dangerEscapeTriggered =
      (entity.getDynamicProperty("terminator:escape_triggered") as
        | boolean
        | undefined) ?? false;

    if (!health.isValid() || dangerEscapeTriggered) continue;
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
      if (debugEnabled)
        terminator.chat(
          `I'm going to ${locationOffset.x}, ${locationOffset.y}, ${locationOffset.z}!`
        );
      terminator.navigateToLocation(locationOffset);
      terminator.setDynamicProperty("terminator:escape_triggered", true);
    }
  }
});
