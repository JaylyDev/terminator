import { world, system, Vector3 } from "@minecraft/server";
import { MinecraftDimensionTypes } from "@minecraft/vanilla-data";
import { getAllDummyEntities } from "./getAll";

export enum TaskType {
  SpawnSteve = 1,
  PathFind,
  SpawnAlex,
  SpawnCustom,
}

system.runInterval(() => {
  for (const dummyEntity of getAllDummyEntities()) {
    const spawnLocation = dummyEntity.getDynamicProperty(
      "dummy:spawn_location"
    ) as Vector3 | undefined;
    const spawnDimension = dummyEntity.getDynamicProperty(
      "dummy:spawn_dimension"
    ) as MinecraftDimensionTypes | undefined;
    if (!spawnLocation || !spawnDimension) continue;
    dummyEntity.teleport(spawnLocation, {
      dimension: world.getDimension(spawnDimension),
    });
  }
});
