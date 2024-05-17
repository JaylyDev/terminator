import { BlockPermutation, system } from "@minecraft/server";
import { terminatorSuffocate } from "../terminator-events/onTerminatorSuffocate";
import {
  PlayerJumpCooldown,
  PlayerJumpImpulse,
  UnbreakableBlocks,
} from "../config";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

terminatorSuffocate.subscribe((event) => {
  const { hurtEntity } = event;
  const rotation = hurtEntity.getRotation();
  const block = hurtEntity.dimension.getBlock(hurtEntity.location);
  if (!block) return;
  const blockAbove = block.above();
  if (!blockAbove) return;
  if (UnbreakableBlocks.some((id) => blockAbove.permutation.matches(id)))
    return;

  // vertical.up
  if (rotation.x < -20) {
    // Break block
    blockAbove.setPermutation(
      BlockPermutation.resolve(MinecraftBlockTypes.Air)
    );
    hurtEntity.dimension
      .getPlayers({ minDistance: 0 })
      .forEach((player) =>
        player.playSound("dig.stone", { location: block.location })
      );

    const cannotJumpUntil =
      (hurtEntity.getDynamicProperty(
        "terminator:cannot_jump_until"
      ) as number) ?? 0;
    if (cannotJumpUntil <= system.currentTick) {
      hurtEntity.applyImpulse(PlayerJumpImpulse);

      hurtEntity.setDynamicProperty(
        "terminator:cannot_jump_until",
        system.currentTick + PlayerJumpCooldown
      );
    }

    // If neccessary place block above
    if (block.permutation.matches(MinecraftBlockTypes.Air)) {
      block.setPermutation(
        BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone)
      );
    }
    hurtEntity.dimension
      .getPlayers({ minDistance: 0 })
      .forEach((player) =>
        player.playSound("dig.stone", { location: block.location })
      );
  }
  // vertical.down
  else if (rotation.x > 20) {
    // Break block
    blockAbove.setPermutation(
      BlockPermutation.resolve(MinecraftBlockTypes.Air)
    );
    hurtEntity.dimension
      .getPlayers({ minDistance: 0 })
      .forEach((player) =>
        player.playSound("dig.stone", { location: block.location })
      );
  }
});
