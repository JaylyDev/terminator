import { BlockPermutation, ScriptEventSource, system } from "@minecraft/server";
import {
  VECTOR3_DOWN,
  VECTOR3_EAST,
  VECTOR3_NORTH,
  VECTOR3_SOUTH,
  VECTOR3_UP,
  VECTOR3_WEST,
  Vector3Builder,
} from "@minecraft/math";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
import { TerminatorEntity } from "./terminator";

// Vector3 values for Math
//
// VECTOR3_NORTH = (0, 0, 1)
// VECTOR3_EAST = (1, 0, 0)
// VECTOR3_SOUTH = (0, 0, -1)
// VECTOR3_WEST = (-1, 0, 0)

// Vector3 values for Minecraft game
// Yes, East and West are flipped, I blame the Mojang's dodgy code.
//
// North (0 degree) = (0, 0, 1)
// East (90 degree) = (-1, 0, 0)
// South (-180 degree) = (0, 0, -1)
// West (-90 degree) = (1, 0, 0)

class BridgePosition {
  private constructor() {
    throw new TypeError("Illegal Constructor.");
  }

  public static get North() {
    return new Vector3Builder(VECTOR3_NORTH).add(VECTOR3_DOWN);
  }
  public static get West() {
    return new Vector3Builder(VECTOR3_EAST).add(VECTOR3_DOWN);
  }
  public static get East() {
    return new Vector3Builder(VECTOR3_WEST).add(VECTOR3_DOWN);
  }
  public static get South() {
    return new Vector3Builder(VECTOR3_SOUTH).add(VECTOR3_DOWN);
  }
  public static get NorthEast() {
    return [this.North, this.East];
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

class MiningPosition {
  private constructor() {
    throw new TypeError("Illegal Constructor.");
  }

  public static get NorthUp() {
    return new Vector3Builder(VECTOR3_NORTH).add(VECTOR3_UP);
  }
  public static get WestUp() {
    return new Vector3Builder(VECTOR3_EAST).add(VECTOR3_UP);
  }
  public static get EastUp() {
    return new Vector3Builder(VECTOR3_WEST).add(VECTOR3_UP);
  }
  public static get SouthUp() {
    return new Vector3Builder(VECTOR3_SOUTH).add(VECTOR3_UP);
  }
  public static get North() {
    return [new Vector3Builder(VECTOR3_NORTH), this.NorthUp];
  }
  public static get West() {
    return [new Vector3Builder(VECTOR3_EAST), this.WestUp];
  }
  public static get East() {
    return [new Vector3Builder(VECTOR3_WEST), this.EastUp];
  }
  public static get South() {
    return [new Vector3Builder(VECTOR3_SOUTH), this.SouthUp];
  }
  public static get NorthEast() {
    return [...this.North, ...this.East];
  }
  public static get SouthWest() {
    return [...this.South, ...this.West];
  }
  public static get SouthEast() {
    return [...this.South, ...this.East];
  }
  public static get NorthWest() {
    return [...this.North, ...this.West];
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
    switch (event.id) {
      case TerminatorBuildDirection.North:
        for (const direction of MiningPosition.North) {
          terminator.breakBlock(terminator.location.add(direction));
        }
        terminator.placeBlock(
          terminator.location.add(BridgePosition.North),
          bridgeBlock
        );
        break;
      case TerminatorBuildDirection.West:
        for (const direction of MiningPosition.West) {
          terminator.breakBlock(terminator.location.add(direction));
        }
        terminator.placeBlock(
          terminator.location.add(BridgePosition.West),
          bridgeBlock
        );
        break;
      case TerminatorBuildDirection.East:
        for (const direction of MiningPosition.East) {
          terminator.breakBlock(terminator.location.add(direction));
        }
        terminator.placeBlock(
          terminator.location.add(BridgePosition.East),
          bridgeBlock
        );
        break;
      case TerminatorBuildDirection.South:
        for (const direction of MiningPosition.South) {
          terminator.breakBlock(terminator.location.add(direction));
        }
        terminator.placeBlock(
          terminator.location.add(BridgePosition.South),
          bridgeBlock
        );
        break;
      case TerminatorBuildDirection.NorthEast:
        for (const direction of MiningPosition.NorthEast) {
          terminator.breakBlock(terminator.location.add(direction));
        }
        for (const direction of BridgePosition.NorthEast) {
          terminator.placeBlock(
            terminator.location.add(direction),
            bridgeBlock
          );
        }
        break;
      case TerminatorBuildDirection.SouthWest:
        for (const direction of MiningPosition.SouthWest) {
          terminator.breakBlock(terminator.location.add(direction));
        }
        for (const direction of BridgePosition.SouthWest) {
          terminator.placeBlock(
            terminator.location.add(direction),
            bridgeBlock
          );
        }
        break;
      case TerminatorBuildDirection.SouthEast:
        for (const direction of MiningPosition.SouthEast) {
          terminator.breakBlock(terminator.location.add(direction));
        }
        for (const direction of BridgePosition.SouthEast) {
          terminator.placeBlock(
            terminator.location.add(direction),
            bridgeBlock
          );
        }
        break;
      case TerminatorBuildDirection.NorthWest:
        for (const direction of MiningPosition.NorthWest) {
          terminator.breakBlock(terminator.location.add(direction));
        }
        for (const direction of BridgePosition.NorthWest) {
          terminator.placeBlock(
            terminator.location.add(direction),
            bridgeBlock
          );
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
