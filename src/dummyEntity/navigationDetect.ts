import { Entity, system, world } from "@minecraft/server";
import { terminatorDie } from "../terminator-events/onTerminatorDie";
import { debugEnabled } from "../config";
import { Vector3Utils } from "@minecraft/math";

const overworld = world.getDimension("overworld");

system.runInterval(() => {
  for (const dummyEntity of overworld.getEntities({ type: "entity:dummy" })) {
    const navigator = dummyEntity.getDynamicProperty("terminator:navigator") as
      | string
      | undefined;
    if (!navigator) continue;

    // Check if the navigator still exists, and whether they are within 5 blocks
    const terminator: Entity | undefined = world.getEntity(navigator);
    if (
      terminator &&
      terminator.matches({
        location: dummyEntity.location,
        minDistance: 0,
        maxDistance: 8,
      })
    ) {
      if (debugEnabled)
        console.warn(
          `Terminator navigated to location (${Vector3Utils.toString(
            dummyEntity.location
          )})`
        );
      dummyEntity.remove();
      terminator.triggerEvent("terminator:remove_escape");
    }
  }
});

// remove dummy when terminator dies
terminatorDie.subscribe(({ deadEntity }) => {
  const dummyEntity = overworld
    .getEntities({ type: "entity:dummy" })
    .find(
      (entity) =>
        entity.getDynamicProperty("terminator:navigator") === deadEntity.id
    );
  dummyEntity?.remove();
  if (debugEnabled)
    console.warn(`Terminator (id: ${deadEntity.id}) died during navigation.`);
});
