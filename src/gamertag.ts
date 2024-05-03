import { world } from '@minecraft/server';

const disableLogging = true;

/**
 * 
 * @param {string} identifier 
 * @returns 
 */
function getNameNumber (identifier) {
  let numbers = [0];
  for (let entity of world.getDimension('overworld').getEntities()) {
    if (entity.id === identifier) {
      if ( entity.nameTag.split(' ')[0] == 'Terminator' && entity.nameTag.split(' ')[1] != undefined ) {
        let getNumber = Number((entity.nameTag.split(' ')[1].split('').slice(1, -1)).join(''));
        numbers.push(getNumber);
      };
    };
  };
  var getMaxNum = Math.max(...numbers);
  return getMaxNum;
};

world.afterEvents.entitySpawn.subscribe((entityData) => {
  if (entityData.entity.typeId === "entity:terminator") {
    let entityName = "Terminator";
    var terminators = world.getDimension('overworld').getEntities({ type: "entity:terminator" }).length;
    if (terminators > 1) {
      entityData.entity.nameTag = `${entityName} (${getNameNumber("entity:terminator") + 1})`
    } else {
      entityData.entity.nameTag = `${entityName}`;
    }
  };
});