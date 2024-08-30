import { Vector3Utils } from "@minecraft/math";
import { GameMode, TicksPerSecond, system } from "@minecraft/server";
import { getAllTerminators } from "./getAll";

// Snowball Ranged Attack
system.runInterval(() => {
  for (const terminator of getAllTerminators()) {
    const isUsingSnowballAttack = terminator.getProperty(
      "terminator:snowball_attack"
    ) as boolean;
    if (!isUsingSnowballAttack) continue;
    const entitiesRaycast = terminator.getEntitiesFromViewDirection({
      excludeGameModes: [GameMode.spectator, GameMode.creative],
      maxDistance: 5.0,
    });
    if (entitiesRaycast.length > 0) {
      for (const hit of entitiesRaycast) {
        terminator.applyImpulse(
          Vector3Utils.scale(hit.entity.getViewDirection(), 1 / TicksPerSecond)
        );
      }
    } else {
      terminator.applyImpulse(
        Vector3Utils.scale(terminator.getViewDirection(), 1 / TicksPerSecond)
      );
    }
  }
});
