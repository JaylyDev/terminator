import { BlockPermutation, ScriptEventSource, system } from "@minecraft/server";
import { Vector3Builder } from "@minecraft/math";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

class BridgeDirection {
  private constructor() {
    throw new TypeError("Illegal Constructor.");
  }
  static readonly North = new Vector3Builder(0, -1, -1);
  static readonly West = new Vector3Builder(0, -1, -1);
  static readonly East = new Vector3Builder(1, -1, 0);
  static readonly South = new Vector3Builder(-1, -1, 0);
  static readonly NorthEast = [
    new Vector3Builder(0, -1, -1),
    new Vector3Builder(1, -1, -1),
  ];
  static readonly SouthWest = [
    new Vector3Builder(0, -1, 1),
    new Vector3Builder(-1, -1, 1),
  ];
  static readonly SouthEast = [
    new Vector3Builder(1, -1, 1),
    new Vector3Builder(1, -1, 0),
  ];
  static readonly NorthWest = [
    new Vector3Builder(0, -1, 1),
    new Vector3Builder(-1, -1, 1),
  ];
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

const bridgeBlock = BlockPermutation.resolve(MinecraftBlockTypes.Cobblestone);

system.afterEvents.scriptEventReceive.subscribe(
  (event) => {
    if (
      event.sourceType !== ScriptEventSource.Entity ||
      event.sourceEntity.typeId !== "entity:terminator"
    )
      return;
    const location = new Vector3Builder(event.sourceEntity.location);
    if (event.id === TerminatorBuildDirection.North) {
      const block = event.sourceEntity.dimension.getBlock(
        location.add(BridgeDirection.North)
      );
      const permutation = block.permutation;
      if (
        permutation.matches(MinecraftBlockTypes.Air) ||
        permutation.matches(MinecraftBlockTypes.Tallgrass)
      )
        block.setPermutation(bridgeBlock);
    } else if (event.id === TerminatorBuildDirection.West) {
      const block = event.sourceEntity.dimension.getBlock(
        location.add(BridgeDirection.West)
      );
      const permutation = block.permutation;
      if (
        permutation.matches(MinecraftBlockTypes.Air) ||
        permutation.matches(MinecraftBlockTypes.Tallgrass)
      )
        block.setPermutation(bridgeBlock);
    } else if (event.id === TerminatorBuildDirection.East) {
      const block = event.sourceEntity.dimension.getBlock(
        location.add(BridgeDirection.East)
      );
      const permutation = block.permutation;
      if (
        permutation.matches(MinecraftBlockTypes.Air) ||
        permutation.matches(MinecraftBlockTypes.Tallgrass)
      )
        block.setPermutation(bridgeBlock);
    } else if (event.id === TerminatorBuildDirection.South) {
      const block = event.sourceEntity.dimension.getBlock(
        location.add(BridgeDirection.South)
      );
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
        );
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
        );
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
        );
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
        );
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
