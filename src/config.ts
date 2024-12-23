import { TicksPerSecond, Vector3 } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

/**
 * A list of blocks with a blast resistance of 100 which terminators cannot break
 */
export const UnbreakableBlocks: string[] = [
  // 1.21.0
  "minecraft:light_block",

  // 1.21.40
  "minecraft:glowingobsidian",
  "minecraft:info_update",
  "minecraft:info_update2",
  "minecraft:invisible_bedrock",
  "minecraft:reserved6",
  "minecraft:stonecutter",
  "minecraft:netherreactor",
  "minecraft:end_gateway",

  // 1.21.20
  MinecraftBlockTypes.Barrier,
  MinecraftBlockTypes.LightBlock0,
  MinecraftBlockTypes.LightBlock1,
  MinecraftBlockTypes.LightBlock2,
  MinecraftBlockTypes.LightBlock3,
  MinecraftBlockTypes.LightBlock4,
  MinecraftBlockTypes.LightBlock5,
  MinecraftBlockTypes.LightBlock6,
  MinecraftBlockTypes.LightBlock7,
  MinecraftBlockTypes.LightBlock8,
  MinecraftBlockTypes.LightBlock9,
  MinecraftBlockTypes.LightBlock10,
  MinecraftBlockTypes.LightBlock11,
  MinecraftBlockTypes.LightBlock12,
  MinecraftBlockTypes.LightBlock13,
  MinecraftBlockTypes.LightBlock14,
  MinecraftBlockTypes.LightBlock15,
  MinecraftBlockTypes.Bedrock,
  MinecraftBlockTypes.CommandBlock,
  MinecraftBlockTypes.EndPortal,
  MinecraftBlockTypes.EndPortalFrame,
  MinecraftBlockTypes.Jigsaw,
  MinecraftBlockTypes.StructureBlock,
  MinecraftBlockTypes.Water,
  MinecraftBlockTypes.Lava,
  MinecraftBlockTypes.FlowingLava,
  MinecraftBlockTypes.FlowingWater,
  MinecraftBlockTypes.Air,
  MinecraftBlockTypes.Obsidian,
  MinecraftBlockTypes.Allow,
  MinecraftBlockTypes.Deny,
  MinecraftBlockTypes.Portal,
  MinecraftBlockTypes.Fire,
  MinecraftBlockTypes.SoulFire,
];

export const ReplaceableBlocks: string[] = [
  MinecraftBlockTypes.Air,
  MinecraftBlockTypes.TallGrass,
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
