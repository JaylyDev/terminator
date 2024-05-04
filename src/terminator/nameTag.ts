import { EntityInitializationCause, world } from "@minecraft/server";

world.afterEvents.entitySpawn.subscribe(({ cause, entity }) => {
  if (
    cause !== EntityInitializationCause.Loaded ||
    entity.typeId !== "entity:terminator"
  )
    return;
  const numberOfTerminators = world
    .getDimension("overworld")
    .getEntities({ type: "entity:terminator" }).length;

  entity.nameTag = `Terminator (${numberOfTerminators})`;
});
