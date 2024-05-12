import { Vector3Builder } from "@minecraft/math";
import {
  BlockPermutation,
  ScriptEventSource,
  Vector3,
  system,
} from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import {
  PlayerJumpCooldown,
  PlayerJumpImpulse,
  UnbreakableBlocks,
} from "../config";

export enum TerminatorBuildVerticallyDirection {
  Up = "terminator:vertical_up",
  Down = "terminator:vertical_down",
}

function BlockVolumeIsInside(pos: Vector3, from: Vector3, to: Vector3) {
  const { x, y, z } = pos;
  const { x: x1, y: y1, z: z1 } = from;
  const { x: x2, y: y2, z: z2 } = to;

  return x >= x1 && x <= x2 && y >= y1 && y <= y2 && z >= z1 && z <= z2;
}

const size: Vector3 = { x: 4, y: 4, z: 4 };
const buildingBlock = BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone);

system.afterEvents.scriptEventReceive.subscribe(
  (event) => {
    const terminator = event.sourceEntity;
    if (
      event.sourceType !== ScriptEventSource.Entity ||
      terminator.typeId !== "entity:terminator"
    )
      return;

    // Only bridge up or down if player is within 8 x 384 x 8 blocks from terminator
    const from = new Vector3Builder(terminator.location).subtract(size);
    from.y = -64;

    const to = new Vector3Builder(terminator.location).add(size);
    to.y = 320;
    const playersWithinRange = terminator.dimension
      .getPlayers({
        location: terminator.location,
        minDistance: 0,
      })
      .filter((player) => BlockVolumeIsInside(player.location, from, to));
    const dummiesWithinRange = terminator.dimension
      .getEntities({
        type: "entity:dummy",
        location: terminator.location,
        minDistance: 0,
      })
      .some((dummy) => BlockVolumeIsInside(dummy.location, from, to));

    if (playersWithinRange.length <= 0 && !dummiesWithinRange) return;
    if (event.id === TerminatorBuildVerticallyDirection.Up) {
      const blockAbove = terminator.dimension
        .getBlock(terminator.location)
        .above(2);
      if (!UnbreakableBlocks.some((id) => blockAbove.permutation.matches(id)))
        blockAbove.setPermutation(
          BlockPermutation.resolve(MinecraftBlockTypes.Air)
        );
      const cannotJumpUntil = terminator.getDynamicProperty(
        "terminator:cannot_jump_until"
      ) as number | undefined;
      if (cannotJumpUntil <= system.currentTick) {
        terminator.applyImpulse(PlayerJumpImpulse);

        terminator.setDynamicProperty(
          "terminator:cannot_jump_until",
          system.currentTick + PlayerJumpCooldown
        );

        system.runTimeout(() => {
          const block = terminator.dimension
            .getBlock(terminator.location)
            .below();
          block.setPermutation(buildingBlock);
          playersWithinRange.forEach((player) =>
            player.playSound("dig.stone", { location: block.location })
          );
        }, 5);
      }
    } else if (event.id === TerminatorBuildVerticallyDirection.Down) {
      const block = terminator.dimension.getBlock(terminator.location).below();
      if (UnbreakableBlocks.some((id) => block.permutation.matches(id))) return;
      block.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Air));
      playersWithinRange.forEach((player) =>
        player.playSound("dig.stone", { location: block.location })
      );
    }
  },
  {
    namespaces: ["terminator"],
  }
);
