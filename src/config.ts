import { TicksPerSecond, Vector3 } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

/**
 * A list of blocks with a blast resistance of 100 which terminators cannot break
 */
export const UnbreakableBlocks: MinecraftBlockTypes[] = [
  MinecraftBlockTypes.Barrier,
  MinecraftBlockTypes.LightBlock,
  MinecraftBlockTypes.Bedrock,
  MinecraftBlockTypes.CommandBlock,
  MinecraftBlockTypes.EndGateway,
  MinecraftBlockTypes.EndPortal,
  MinecraftBlockTypes.EndPortalFrame,
  MinecraftBlockTypes.Jigsaw,
  MinecraftBlockTypes.StructureBlock,
  MinecraftBlockTypes.Water,
  MinecraftBlockTypes.Lava,
  MinecraftBlockTypes.FlowingLava,
  MinecraftBlockTypes.FlowingWater,
  MinecraftBlockTypes.Air,
];

export const ReplaceableBlocks: MinecraftBlockTypes[] = [
  MinecraftBlockTypes.Air,
  MinecraftBlockTypes.Tallgrass,
  MinecraftBlockTypes.Seagrass,
  MinecraftBlockTypes.Deadbush,
  MinecraftBlockTypes.Vine,
  MinecraftBlockTypes.GlowLichen,
  MinecraftBlockTypes.WarpedRoots,
  MinecraftBlockTypes.CrimsonRoots,
  MinecraftBlockTypes.Water,
  MinecraftBlockTypes.Lava,
  MinecraftBlockTypes.FlowingLava,
  MinecraftBlockTypes.FlowingWater,
];

export const PlayerJumpImpulse: Vector3 = { x: 0, y: 0.5, z: 0 };
export const PlayerJumpCooldown = TicksPerSecond / 2;

export const debugEnabled = false;
