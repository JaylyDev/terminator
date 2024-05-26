import { ItemStack, TicksPerSecond, system, world } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

const overworld = world.getDimension("overworld");

// Replacement of controller.animation.terminator.sitting
system.runInterval(() => {
  const terminators = overworld.getEntities({ type: "entity:terminator" });
  if (terminators.length === 0) return;

  const boats = overworld.getEntities({ type: MinecraftEntityTypes.Boat });
  const chestBoats = overworld.getEntities({
    type: MinecraftEntityTypes.ChestBoat,
  });
  const minecarts = overworld.getEntities({
    type: MinecraftEntityTypes.Minecart,
  });

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
      const nearbyBoats = boats.filter(
        (boat) =>
          boat.matches({ maxDistance: 1, location: terminator.location }) &&
          boat.dimension === terminator.dimension
      );
      const nearbyChestBoats = chestBoats.filter(
        (chestBoat) =>
          chestBoat.matches({
            maxDistance: 1,
            location: terminator.location,
          }) && chestBoat.dimension === terminator.dimension
      );
      const nearbyMinecarts = minecarts.filter(
        (minecart) =>
          minecart.matches({ maxDistance: 1, location: terminator.location }) &&
          minecart.dimension === terminator.dimension
      );
      const nearbyTransport = [
        ...nearbyBoats,
        ...nearbyChestBoats,
        ...nearbyMinecarts,
      ];
      for (const transport of nearbyTransport) {
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
