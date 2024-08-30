import {
  Vector3Utils,
  VECTOR3_NORTH,
  VECTOR3_WEST,
  VECTOR3_EAST,
  VECTOR3_SOUTH,
} from "@minecraft/math";
import { Entity } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

const VECTOR3_NORTHWEST = Vector3Utils.add(VECTOR3_NORTH, VECTOR3_WEST);
const VECTOR3_NORTHEAST = Vector3Utils.add(VECTOR3_NORTH, VECTOR3_EAST);
const VECTOR3_SOUTHWEST = Vector3Utils.add(VECTOR3_SOUTH, VECTOR3_WEST);
const VECTOR3_SOUTHEAST = Vector3Utils.add(VECTOR3_SOUTH, VECTOR3_EAST);

export function getDamagingBlock(hurtEntity: Entity) {
  // Get the blocks from player surroundings to detect if the player have contact with cactus or sweet berry bush
  const location = hurtEntity.location;
  const block = hurtEntity.dimension.getBlock(location);
  if (!block) return;
  const blockAbove = block.above();
  const blockBelow = block.below();
  const blockNorth = block.north();
  const blockSouth = block.south();
  const blockEast = block.east();
  const blockWest = block.west();
  const blockNorthWest = hurtEntity.dimension.getBlock(
    Vector3Utils.add(location, VECTOR3_NORTHWEST)
  );
  const blockNorthEast = hurtEntity.dimension.getBlock(
    Vector3Utils.add(location, VECTOR3_NORTHEAST)
  );
  const blockSouthWest = hurtEntity.dimension.getBlock(
    Vector3Utils.add(location, VECTOR3_SOUTHWEST)
  );
  const blockSouthEast = hurtEntity.dimension.getBlock(
    Vector3Utils.add(location, VECTOR3_SOUTHEAST)
  );
  const blocks = [
    blockAbove,
    blockBelow,
    blockNorth,
    blockSouth,
    blockEast,
    blockWest,
    blockNorthWest,
    blockNorthEast,
    blockSouthWest,
    blockSouthEast,
  ];
  // Check if the player have contact with cactus or sweet berry bush
  for (const block of blocks) {
    if (!block) continue;
    if (block.typeId === MinecraftBlockTypes.Cactus) {
      return MinecraftBlockTypes.Cactus;
    } else if (block.typeId === MinecraftBlockTypes.SweetBerryBush) {
      return MinecraftBlockTypes.SweetBerryBush;
    }
  }
}
