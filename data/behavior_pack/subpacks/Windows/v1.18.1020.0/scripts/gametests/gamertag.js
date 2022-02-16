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
  if (disableLogging == false) { console.warn(numbers) };
  return numbers;
};

world.events.entityCreate.subscribe(entityData => {
  if (entityData.entity.id === "entity:terminator") {
    let entityName = "Terminator";
    var terminators = getCount("entity:terminator")
    if (terminators > 1) {
      entityData.entity.nameTag = `${entityName} (${Math.max(...(getNameNumber("entity:terminator"))) + 1})`
    } else {
      entityData.entity.nameTag = `${entityName}`;
    }
  };
});

world.events.tick.subscribe(() => {
  const getDuplicates = (arr) => {
    let sorted_arr = arr.slice().sort(); // You can define the comparing function here. 
    // JS by default uses a crappy string compare.
    // (we use slice to clone the array so the
    // original array won't be modified)
    let results = [];
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }
  
  let array = getNameNumber("entity:terminator");
  
  let dulipcates = getDuplicates(array);

  for (let index = 0, fixed = false; index < dulipcates.length && fixed == false; index++) {
    for (let entity of world.getDimension('overworld').getEntities()) {
      if (entity.id === "entity:terminator") {
        if ( entity.nameTag.split(' ')[0] == 'Terminator' && entity.nameTag.split(' ')[1] != undefined ) {
          let getNumber = Number((entity.nameTag.split(' ')[1].split('').slice(1, -1)).join(''));
          if (array.includes(getNumber)) {
            entity.nameTag = `Terminator (${Math.max(...(getNameNumber("entity:terminator"))) + 2})`;
            fixed = true;
          }
        };
      };
    };
  }
})