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

  // vertical.up
  if (rotation.x < -20) {
    // Break block
    terminator.breakBlock(location.add(VECTOR3_UP));
    terminator.jump();

    // If neccessary place block above
    if (block && block.permutation.matches(MinecraftBlockTypes.Air)) {
      terminator.placeBlock(location, buildingBlock);
    }
  }
  // vertical.down
  else if (rotation.x > 20) {
    // Break block
    terminator.breakBlock(location.add(VECTOR3_UP));
    terminator.breakBlock(location.add(VECTOR3_DOWN));
    terminator.breakBlock(location.add(VECTOR3_DOWN));
  }
});
