import { Entity, EntityInventoryComponent } from "@minecraft/server";

export function dropEntityInventory(entity: Entity): boolean {
  const inventory = entity.getComponent(
    "inventory"
  ) as EntityInventoryComponent;

  if (!inventory.container) {
    return false;
  }

  const spawnLocation = entity.location;
  if (entity.dimension.heightRange.min > entity.location.y) {
    spawnLocation.y = entity.dimension.heightRange.min + 1;
  } else if (entity.dimension.heightRange.max < entity.location.y) {
    spawnLocation.y = entity.dimension.heightRange.max - 1;
  }
  for (let slot = 0; slot < inventory.inventorySize; slot++) {
    const item = inventory.container.getItem(slot);
    if (item) {
      const itemEntity = entity.dimension.spawnItem(item, spawnLocation);
      itemEntity.applyImpulse({
        x: Math.random() - 0.5,
        y: 0,
        z: Math.random() - 0.5,
      });
    }
  }
  inventory.container.clearAll();
  return true;
}
