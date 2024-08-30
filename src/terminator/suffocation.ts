import { BlockPermutation } from "@minecraft/server";
import { terminatorSuffocate } from "../terminator-events/onTerminatorSuffocate";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { TerminatorEntity } from "./terminator";
import { VECTOR3_DOWN, VECTOR3_UP, Vector3Builder } from "@minecraft/math";

const buildingBlock = BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone);

terminatorSuffocate.subscribe(({ hurtEntity }) => {
  const terminator = new TerminatorEntity(hurtEntity);
  const rotation = terminator.getRotation();
  const location = new Vector3Builder(terminator.location);
  const block = terminator.dimension.getBlock(location);

  // Break the block terminator is suffocating from, no matter what.
  terminator.breakBlock(location.add(VECTOR3_UP));

  // vertical.up
  if (rotation.x < -20) {
    terminator.jump();

    // If neccessary place block above
    if (block && block.isAir) {
      terminator.placeBlock(location, buildingBlock);
    }
  }
  // vertical.down
  else if (rotation.x > 20) {
    terminator.breakBlock(location.add(VECTOR3_DOWN));
    terminator.breakBlock(location.add(VECTOR3_DOWN));
  }
});
