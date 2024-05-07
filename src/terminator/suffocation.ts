import { BlockPermutation } from "@minecraft/server";
import { terminatorSuffocate } from "../terminator-events/onTerminatorSuffocate";
import { PlayerJumpImpulse, UnbreakableBlocks } from "../config";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

terminatorSuffocate.subscribe((event) => {
  const { hurtEntity } = event;
  const rotation = hurtEntity.getRotation();
  const block = hurtEntity.dimension.getBlock(hurtEntity.location);
  const blockAbove = block.above();
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

    hurtEntity.applyImpulse(PlayerJumpImpulse);

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
