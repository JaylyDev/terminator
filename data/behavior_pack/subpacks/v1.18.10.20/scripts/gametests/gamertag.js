import { world } from 'mojang-minecraft';

world.events.entityCreate.subscribe((entityData) => {
  if (entityData.entity.id === "entity:terminator") {
    let entityName = "Terminator";
    entityData.entity.nameTag = `${entityName}`;
  };
});