import { Entity, EntityInventoryComponent } from "@minecraft/server";

export function dropEntityInventory(entity: Entity): boolean {
  const inventory = entity.getComponent(
    "inventory"
  ) as EntityInventoryComponent;

  if (!inventory.container) return false;
  for (let slot = 0; slot < inventory.inventorySize; slot++) {
    const item = inventory.container.getItem(slot);
    if (item) {
      const itemEntity = entity.dimension.spawnItem(item, entity.location);
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
