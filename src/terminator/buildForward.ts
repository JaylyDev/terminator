import {
  BlockPermutation,
  ScriptEventSource,
  system,
  world,
} from "@minecraft/server";
import { Vector3Builder } from "@minecraft/math";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { TerminatorEntity } from "./terminator";

class BridgeDirection {
  private constructor() {
    throw new TypeError("Illegal Constructor.");
  }

  public static get North() {
    return new Vector3Builder(0, -1, -1);
  }
  public static get West() {
    return new Vector3Builder(-1, -1, 0);
  }
  public static get East() {
    return new Vector3Builder(1, -1, 0);
  }
  public static get South() {
    return new Vector3Builder(0, -1, 1);
  }
  public static get NorthEast() {
    return [this.North, this.West];
  }
  public static get SouthWest() {
    return [this.South, this.West];
  }
  public static get SouthEast() {
    return [this.South, this.East];
  }
  public static get NorthWest() {
    return [this.North, this.West];
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

    const terminator = new TerminatorEntity(event.sourceEntity);
    const location = terminator.location;
    switch (event.id) {
      case TerminatorBuildDirection.North:
        terminator.placeBlock(location.add(BridgeDirection.North), bridgeBlock)
        break;
      case TerminatorBuildDirection.West:
        terminator.placeBlock(location.add(BridgeDirection.West), bridgeBlock)
        break;
      case TerminatorBuildDirection.East:
        terminator.placeBlock(location.add(BridgeDirection.East), bridgeBlock)
        break;
      case TerminatorBuildDirection.South:
        terminator.placeBlock(location.add(BridgeDirection.South), bridgeBlock)
        break;
      case TerminatorBuildDirection.NorthEast:
        for (const direction of BridgeDirection.NorthEast) {
          terminator.placeBlock(location.add(direction), bridgeBlock);
        }
        break;
      case TerminatorBuildDirection.SouthWest:
        for (const direction of BridgeDirection.SouthWest) {
          terminator.placeBlock(location.add(direction), bridgeBlock);
        }
        break;
      case TerminatorBuildDirection.SouthEast:
        for (const direction of BridgeDirection.SouthEast) {
          terminator.placeBlock(location.add(direction), bridgeBlock);
        }
        break;
      case TerminatorBuildDirection.NorthWest:
        for (const direction of BridgeDirection.NorthWest) {
          terminator.placeBlock(location.add(direction), bridgeBlock);
        }
        break;
    
      default:
        break;
    }
  },
  {
    namespaces: ["terminator"],
  }
);

/**
 * Minecraft only allows degree range of [-180, 180] for head rotation y.
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
