import {
  VECTOR3_DOWN,
  VECTOR3_UP,
  Vector3Builder,
  Vector3Utils,
} from "@minecraft/math";
import {
  BlockPermutation,
  Entity,
  ScriptEventSource,
  Vector3,
  system,
} from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { TerminatorEntity } from "./terminator";

export enum TerminatorBuildVerticallyDirection {
  Up = "terminator:vertical_up",
  Down = "terminator:vertical_down",
}

const size: Vector3 = { x: 4, y: 4, z: 4 };
const buildingBlock = BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone);

function BlockVolumeIsInside(pos: Vector3, from: Vector3, to: Vector3) {
  const { x, y, z } = pos;
  const { x: x1, y: y1, z: z1 } = from;
  const { x: x2, y: y2, z: z2 } = to;

  return x >= x1 && x <= x2 && y >= y1 && y <= y2 && z >= z1 && z <= z2;
}

/**
 * Determine the nearest target and return displacement between terminator in Vector3 form
 */
function nearestTargetDisplacement(
  targets: Entity[],
  terminator: Entity
): Vector3 {
  // Sort targets list by distance to terminator
  const sortedTargets = targets.sort((a, b) => {
    return (
      Vector3Utils.distance(a.location, terminator.location) -
      Vector3Utils.distance(b.location, terminator.location)
    );
  });
  const dummyEntity = sortedTargets.find(
    (entity) => entity.typeId === "entity:dummy"
  );
  const target = dummyEntity ?? sortedTargets[0];
  return Vector3Utils.subtract(target.location, terminator.location);
}

system.afterEvents.scriptEventReceive.subscribe(
  (event) => {
    if (
      !event.sourceEntity ||
      event.sourceType !== ScriptEventSource.Entity ||
      event.sourceEntity.typeId !== "entity:terminator" ||
      !event.id.startsWith("terminator:vertical")
    )
      return;

    const terminator = new TerminatorEntity(event.sourceEntity);
    const { location, dimension } = terminator;
    // Only bridge up or down if player is within 8 x 384 x 8 blocks from terminator
    const from = new Vector3Builder(location).subtract(size);
    from.y = dimension.heightRange.min;

    const to = new Vector3Builder(location).add(size);
    to.y = dimension.heightRange.max;
    const playersWithinRange = dimension
      .getPlayers({
        location: location,
        minDistance: 0,
      })
      .filter((player) => BlockVolumeIsInside(player.location, from, to));
    const dummiesWithinRange = dimension
      .getEntities({
        type: "entity:dummy",
        location: location,
        minDistance: 0,
      })
      .filter(
        (dummy) =>
          BlockVolumeIsInside(dummy.location, from, to) &&
          dummy.getProperty("dummy:task_type") === 2
      );

    if (playersWithinRange.length <= 0 && dummiesWithinRange.length <= 0)
      return;
    const displacement = nearestTargetDisplacement(
      [...playersWithinRange, ...dummiesWithinRange],
      terminator
    );

    // Build up
    if (
      event.id === TerminatorBuildVerticallyDirection.Up &&
      displacement.y > 1
    ) {
      terminator.breakBlock(
        Vector3Utils.add(location, new Vector3Builder(VECTOR3_UP).scale(2))
      );

      const jumped = terminator.jump();

      if (jumped)
        system.runTimeout(() => {
          terminator.placeBlock(location, buildingBlock);
        }, 5);
    }
    // Dig down
    else if (
      event.id === TerminatorBuildVerticallyDirection.Down &&
      displacement.y < -1
    ) {
      terminator.breakBlock(Vector3Utils.add(location, VECTOR3_DOWN));
    }
  },
  {
    namespaces: ["terminator"],
  }
);
