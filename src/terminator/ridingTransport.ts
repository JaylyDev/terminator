import { TicksPerSecond, system, world } from "@minecraft/server";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

// Replacement of controller.animation.terminator.sitting
system.runInterval(() => {
  const overworld = world.getDimension("overworld");
  const terminators = overworld.getEntities({ type: "entity:terminator" });
  const boats = overworld.getEntities({ type: MinecraftEntityTypes.Boat });
  const chestBoats = overworld.getEntities({ type: MinecraftEntityTypes.ChestBoat });
  const minecarts = overworld.getEntities({ type: MinecraftEntityTypes.Minecart });

  for (const terminator of terminators) {
    let rideableCooldown: number = terminator.getDynamicProperty("rideableCooldown") as number | undefined || -1;
    const isSitting = terminator.getProperty("terminator:is_sitting") as boolean;

    // If the rideable cooldown is -1 but terminator is sitting, then ride for 10 - 20 seconds then leave
    if (rideableCooldown === -1 && isSitting) {
      const rideDuration = Math.floor(Math.random() * 10 + 10) * TicksPerSecond;

      rideableCooldown = rideDuration;
      terminator.setDynamicProperty("rideableCooldown", rideDuration);
    }
    // If the rideable cooldown is 0 and terminator is sitting, then leave the transport they're riding in
    // Note: Rideable component is not released to stable, kill the transport entity
    else if (rideableCooldown === 0 && isSitting) {
      const nearbyBoats = boats.filter(
        (boat) =>
          boat.matches({ maxDistance: 1, location: terminator.location }) &&
          boat.dimension === terminator.dimension
      );
      const nearbyChestBoats = chestBoats.filter(
        (chestBoat) =>
          chestBoat.matches({ maxDistance: 1, location: terminator.location }) &&
          chestBoat.dimension === terminator.dimension
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
        transport.kill();
      }
    }
    if (rideableCooldown >= 0) {
      rideableCooldown--;
      terminator.setDynamicProperty("rideableCooldown", rideableCooldown);
    }
  }
});
