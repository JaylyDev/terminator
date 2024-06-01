import { ItemStack, TicksPerSecond, system, world } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

const overworld = world.getDimension("overworld");
const rideableTransports = [
  MinecraftEntityTypes.Minecart,
  MinecraftEntityTypes.ChestBoat,
  MinecraftEntityTypes.Boat,
];

// Replacement of controller.animation.terminator.sitting
system.runInterval(() => {
  const terminators = overworld.getEntities({ type: "entity:terminator" });
  if (terminators.length === 0) return;

  for (const terminator of terminators) {
    let rideableCooldown = terminator.getDynamicProperty(
      "terminator:rideable_cooldown"
    ) as number | undefined;
    const isSitting = terminator.getProperty(
      "terminator:is_sitting"
    ) as boolean;

    if (!isSitting) continue;
    if (typeof rideableCooldown === "undefined") rideableCooldown = -1;

    // If the rideable cooldown is -1 but terminator is sitting, then ride for 10 - 20 seconds then leave
    if (rideableCooldown === -1) {
      const rideDuration = Math.floor(Math.random() * 10 + 10) * TicksPerSecond;

      rideableCooldown = rideDuration;
      terminator.setDynamicProperty(
        "terminator:rideable_cooldown",
        rideDuration
      );
    }
    // If the rideable cooldown is 0 and terminator is sitting, then leave the transport they're riding in
    // Note: Rideable component is not released to stable, kill the transport entity
    else if (rideableCooldown === 0) {
      const nearbyTransport = terminator.dimension.getEntitiesAtBlockLocation(
        terminator.location
      );
      for (const transport of nearbyTransport) {
        if (rideableTransports.some((id) => transport.typeId !== id)) continue;
        transport.dimension.spawnItem(
          new ItemStack(transport.typeId, 1),
          transport.location
        );
        transport.kill();
      }
    }
    if (rideableCooldown >= 0) {
      rideableCooldown--;
      terminator.setDynamicProperty(
        "terminator:rideable_cooldown",
        rideableCooldown
      );
    }
  }
});
