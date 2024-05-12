import { Vector3Utils } from "@minecraft/math";
import { TicksPerSecond, system, world } from "@minecraft/server";

// Snowball Ranged Attack
system.runInterval(() => {
  for (const terminator of world
    .getDimension("overworld")
    .getEntities({ type: "entity:terminator" })) {
    const isUsingSnowballAttack = terminator.getProperty(
      "terminator:snowball_attack"
    ) as boolean;
    if (!isUsingSnowballAttack) continue;
    terminator.applyImpulse(
      Vector3Utils.scale(terminator.getViewDirection(), 1 / TicksPerSecond)
    );
  }
});
