import {
  VECTOR3_EAST,
  VECTOR3_NORTH,
  VECTOR3_SOUTH,
  VECTOR3_WEST,
  Vector3Utils,
} from "@minecraft/math";
import { Player, world } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

let contactDebugEnabled = false;
export function onContactDebug(enabled: boolean) {
  contactDebugEnabled = enabled;
}

const VECTOR3_NORTHWEST = Vector3Utils.add(VECTOR3_NORTH, VECTOR3_WEST);
const VECTOR3_NORTHEAST = Vector3Utils.add(VECTOR3_NORTH, VECTOR3_EAST);
const VECTOR3_SOUTHWEST = Vector3Utils.add(VECTOR3_SOUTH, VECTOR3_WEST);
const VECTOR3_SOUTHEAST = Vector3Utils.add(VECTOR3_SOUTH, VECTOR3_EAST);

world.afterEvents.entityHurt.subscribe((event) => {
  if (!contactDebugEnabled) return;
  const { hurtEntity } = event;
  if (!(hurtEntity instanceof Player)) return;
  // Get the blocks from player surroundings to detect if the player have contact with cactus or sweet berry bush
  const location = hurtEntity.location;
  const block = hurtEntity.dimension.getBlock(location);
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
    if (block.permutation.matches(MinecraftBlockTypes.Cactus)) {
      hurtEntity.sendMessage(`You have contact with cactus`);
      return;
    }
    if (block.permutation.matches(MinecraftBlockTypes.SweetBerryBush)) {
      hurtEntity.sendMessage(`You have contact with sweet berry bush`);
      return;
    }
  }
});
