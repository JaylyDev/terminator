import { world } from 'mojang-minecraft';

const disableLogging = true;

function getCount(identifier) {
  let entities = [];
  for (let entity of world.getDimension('overworld').getEntities()) {
    if (entity.id === identifier) {
      entities.push(entity.nameTag);
    }
  };
  return entities.length;
};

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
  if (disableLogging == false) { console.warn(numbers) };
  return getMaxNum;
};

world.events.entityCreate.subscribe((entityData) => {
  if (entityData.entity.id === "entity:terminator") {
    let entityName = "Terminator";
    var terminators = getCount("entity:terminator")
    if (terminators > 1) {
      entityData.entity.nameTag = `${entityName} (${getNameNumber("entity:terminator") + 1})`
    } else {
      entityData.entity.nameTag = `${entityName}`;
    }
  };
});