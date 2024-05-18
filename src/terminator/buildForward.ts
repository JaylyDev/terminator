import {
  BlockPermutation,
  ScriptEventSource,
  system,
  world,
} from "@minecraft/server";
import { Vector3Builder } from "@minecraft/math";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

class BridgeDirection {
  private constructor() {
    throw new TypeError("Illegal Constructor.");
  }

  public static get North() {
    return new Vector3Builder(0, -1, -1);
  }
  public static get West() {
    return new Vector3Builder(0, -1, -1);
  }
  public static get East() {
    return new Vector3Builder(1, -1, 0);
  }
  public static get South() {
    return new Vector3Builder(-1, -1, 0);
  }
  public static get NorthEast() {
    return [new Vector3Builder(0, -1, -1), new Vector3Builder(1, -1, -1)];
  }
  public static get SouthWest() {
    return [new Vector3Builder(0, -1, 1), new Vector3Builder(-1, -1, 1)];
  }
  public static get SouthEast() {
    return [new Vector3Builder(1, -1, 1), new Vector3Builder(1, -1, 0)];
  }
  public static get NorthWest() {
    return [new Vector3Builder(0, -1, 1), new Vector3Builder(-1, -1, 1)];
  }
}

export enum TerminatorBuildDirection {
  North = "terminator:forward_north",
  West = "terminator:forward_west",
  East = "terminator:forward_east",
  South = "terminator:forward_south",
  NorthEast = "terminator:forward_north_east",
  SouthWest = "terminator:forward_south_west",
  SouthEast = "terminator:forward_south_east",
  NorthWest = "terminator:forward_north_west",
}

/**
 * Unfortuantly, Minecraft wasn't implemented well with directions.
 * Y-rotation varies from -180° (facing due north) to -90° (facing due east) to 0° (facing due south) to +90° (facing due west) to +180° (facing due north again).
 */
export enum DirectionDegrees {
  North = -180,
  East = -90,
  South = 0,
  West = 90,
  NorthEast = -135,
  SouthWest = 135,
  SouthEast = 45,
  NorthWest = -45,
}

export enum DegreeRange {
  Azimuth = 33,
  Intercardinal = 11,
}

const bridgeBlock = BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone);

// Have to use /scriptevent because Entity::target isn't released to stable.
system.afterEvents.scriptEventReceive.subscribe(
  (event) => {
    if (
      event.sourceType !== ScriptEventSource.Entity ||
      event.sourceEntity?.typeId !== "entity:terminator" ||
      !event.id.startsWith("terminator:forward")
    )
      return;

    const location = new Vector3Builder(event.sourceEntity.location);
    if (event.id === TerminatorBuildDirection.North) {
      const block = event.sourceEntity.dimension.getBlock(
        location.add(BridgeDirection.North)
      )!;
      const permutation = block.permutation;
      if (
        permutation.matches(MinecraftBlockTypes.Air) ||
        permutation.matches(MinecraftBlockTypes.Tallgrass)
      )
        block.setPermutation(bridgeBlock);
    } else if (event.id === TerminatorBuildDirection.West) {
      const block = event.sourceEntity.dimension.getBlock(
        location.add(BridgeDirection.West)
      )!;
      const permutation = block.permutation;
      if (
        permutation.matches(MinecraftBlockTypes.Air) ||
        permutation.matches(MinecraftBlockTypes.Tallgrass)
      )
        block.setPermutation(bridgeBlock);
    } else if (event.id === TerminatorBuildDirection.East) {
      const block = event.sourceEntity.dimension.getBlock(
        location.add(BridgeDirection.East)
      )!;
      const permutation = block.permutation;
      if (
        permutation.matches(MinecraftBlockTypes.Air) ||
        permutation.matches(MinecraftBlockTypes.Tallgrass)
      )
        block.setPermutation(bridgeBlock);
    } else if (event.id === TerminatorBuildDirection.South) {
      const block = event.sourceEntity.dimension.getBlock(
        location.add(BridgeDirection.South)
      )!;
      const permutation = block.permutation;
      if (
        permutation.matches(MinecraftBlockTypes.Air) ||
        permutation.matches(MinecraftBlockTypes.Tallgrass)
      )
        block.setPermutation(bridgeBlock);
    } else if (event.id === TerminatorBuildDirection.NorthEast) {
      for (const direction of BridgeDirection.NorthEast) {
        const block = event.sourceEntity.dimension.getBlock(
          location.add(direction)
        )!;
        const permutation = block.permutation;
        if (
          permutation.matches(MinecraftBlockTypes.Air) ||
          permutation.matches(MinecraftBlockTypes.Tallgrass)
        )
          block.setPermutation(bridgeBlock);
      }
    } else if (event.id === TerminatorBuildDirection.SouthWest) {
      for (const direction of BridgeDirection.SouthWest) {
        const block = event.sourceEntity.dimension.getBlock(
          location.add(direction)
        )!;
        const permutation = block.permutation;
        if (
          permutation.matches(MinecraftBlockTypes.Air) ||
          permutation.matches(MinecraftBlockTypes.Tallgrass)
        )
          block.setPermutation(bridgeBlock);
      }
    } else if (event.id === TerminatorBuildDirection.SouthEast) {
      for (const direction of BridgeDirection.SouthEast) {
        const block = event.sourceEntity.dimension.getBlock(
          location.add(direction)
        )!;
        const permutation = block.permutation;
        if (
          permutation.matches(MinecraftBlockTypes.Air) ||
          permutation.matches(MinecraftBlockTypes.Tallgrass)
        )
          block.setPermutation(bridgeBlock);
      }
    } else if (event.id === TerminatorBuildDirection.NorthWest) {
      for (const direction of BridgeDirection.NorthWest) {
        const block = event.sourceEntity.dimension.getBlock(
          location.add(direction)
        )!;
        const permutation = block.permutation;
        if (
          permutation.matches(MinecraftBlockTypes.Air) ||
          permutation.matches(MinecraftBlockTypes.Tallgrass)
        )
          block.setPermutation(bridgeBlock);
      }
    }
  },
  {
    namespaces: ["terminator"],
  }
);

/**
 * Minecraft only allows degree range of [-180, 180] for y-rotation.
 */
const fixDegreeY = (degreeY: number) => {
  if (degreeY > 180) return degreeY - 360;
  if (degreeY < -180) return degreeY + 360;
  throw new RangeError("The degreeY must be within the bounds [-180, 180]");
};

system.runInterval(() => {
  for (const terminator of world
    .getDimension("overworld")
    .getEntities({ type: "entity:terminator" })) {
    const hasTarget = terminator.getProperty(
      "terminator:has_target"
    ) as boolean;
    if (!hasTarget) continue;

    const rotation = terminator.getRotation();
    // North
    if (
      rotation.y >= fixDegreeY(DirectionDegrees.North - DegreeRange.Azimuth) &&
      rotation.y <= DirectionDegrees.North + DegreeRange.Azimuth
    )
      terminator.runCommand(`scriptevent ${TerminatorBuildDirection.North}`);
    // West
    else if (
      rotation.y >= DirectionDegrees.West - DegreeRange.Azimuth &&
      rotation.y <= DirectionDegrees.West + DegreeRange.Azimuth
    )
      terminator.runCommand(`scriptevent ${TerminatorBuildDirection.West}`);
    // East
    else if (
      rotation.y >= DirectionDegrees.East - DegreeRange.Azimuth &&
      rotation.y <= DirectionDegrees.East + DegreeRange.Azimuth
    )
      terminator.runCommand(`scriptevent ${TerminatorBuildDirection.East}`);
    // South
    else if (
      rotation.y >= DirectionDegrees.South - DegreeRange.Azimuth &&
      rotation.y <= DirectionDegrees.South + DegreeRange.Azimuth
    )
      terminator.runCommand(`scriptevent ${TerminatorBuildDirection.South}`);
    // NorthEast
    else if (
      rotation.y >= DirectionDegrees.NorthEast - DegreeRange.Intercardinal &&
      rotation.y <= DirectionDegrees.NorthEast + DegreeRange.Intercardinal
    )
      terminator.runCommand(
        `scriptevent ${TerminatorBuildDirection.NorthEast}`
      );
    // SouthWest
    else if (
      rotation.y >= DirectionDegrees.SouthWest - DegreeRange.Intercardinal &&
      rotation.y <= DirectionDegrees.SouthWest + DegreeRange.Intercardinal
    )
      terminator.runCommand(
        `scriptevent ${TerminatorBuildDirection.SouthWest}`
      );
    // SouthEast
    else if (
      rotation.y >= DirectionDegrees.SouthEast - DegreeRange.Intercardinal &&
      rotation.y <= DirectionDegrees.SouthEast + DegreeRange.Intercardinal
    )
      terminator.runCommand(
        `scriptevent ${TerminatorBuildDirection.SouthEast}`
      );
    // NorthWest
    else if (
      rotation.y >= DirectionDegrees.NorthWest - DegreeRange.Intercardinal &&
      rotation.y <= DirectionDegrees.NorthWest + DegreeRange.Intercardinal
    )
      terminator.runCommand(
        `scriptevent ${TerminatorBuildDirection.NorthWest}`
      );
  }
});
