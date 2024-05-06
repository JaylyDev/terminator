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
