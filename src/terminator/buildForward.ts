import { BlockPermutation, ScriptEventSource, system } from "@minecraft/server";
import {
  VECTOR3_DOWN,
  VECTOR3_EAST,
  VECTOR3_NORTH,
  VECTOR3_SOUTH,
  VECTOR3_WEST,
  Vector3Builder,
} from "@minecraft/math";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { TerminatorEntity } from "./terminator";

class BridgePosition {
  private constructor() {
    throw new TypeError("Illegal Constructor.");
  }

  public static get North() {
    return new Vector3Builder(VECTOR3_NORTH).add(VECTOR3_DOWN);
  }
  public static get West() {
    return new Vector3Builder(VECTOR3_WEST).add(VECTOR3_DOWN);
  }
  public static get East() {
    return new Vector3Builder(VECTOR3_EAST).add(VECTOR3_DOWN);
  }
  public static get South() {
    return new Vector3Builder(VECTOR3_SOUTH).add(VECTOR3_DOWN);
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

enum TerminatorBuildDirection {
  North = "terminator:forward_north",
  West = "terminator:forward_west",
  East = "terminator:forward_east",
  South = "terminator:forward_south",
  NorthEast = "terminator:forward_north_east",
  SouthWest = "terminator:forward_south_west",
  SouthEast = "terminator:forward_south_east",
  NorthWest = "terminator:forward_north_west",
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
        terminator.placeBlock(location.add(BridgePosition.North), bridgeBlock);
        break;
      case TerminatorBuildDirection.West:
        terminator.placeBlock(location.add(BridgePosition.West), bridgeBlock);
        break;
      case TerminatorBuildDirection.East:
        terminator.placeBlock(location.add(BridgePosition.East), bridgeBlock);
        break;
      case TerminatorBuildDirection.South:
        terminator.placeBlock(location.add(BridgePosition.South), bridgeBlock);
        break;
      case TerminatorBuildDirection.NorthEast:
        for (const direction of BridgePosition.NorthEast) {
          terminator.placeBlock(location.add(direction), bridgeBlock);
        }
        break;
      case TerminatorBuildDirection.SouthWest:
        for (const direction of BridgePosition.SouthWest) {
          terminator.placeBlock(location.add(direction), bridgeBlock);
        }
        break;
      case TerminatorBuildDirection.SouthEast:
        for (const direction of BridgePosition.SouthEast) {
          terminator.placeBlock(location.add(direction), bridgeBlock);
        }
        break;
      case TerminatorBuildDirection.NorthWest:
        for (const direction of BridgePosition.NorthWest) {
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
