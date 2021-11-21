import { World, Commands } from 'mojang-minecraft';

let totalCount = 0;
let onEntityRetrivedCallbacks = [];
let retriving = false;
const disableLogging = true;

function getEnities(callback) {
  try {
    let entity = Commands.run('testfor @e[rm=0.01, type=!item, type=!boat, type=!minecart ]', World.getDimension('overworld'));
    totalCount = entity.victim.length;
  } catch (error) { console.warn(error); };
  onEntityRetrivedCallbacks.push(callback);
  retriving = true;

  try { 
    Commands.run('effect @e invisibility', World.getDimension('overworld'));
  } catch (e) {
    if (disableLogging == false) {
      console.log(e);
      console.log(e.stack);
    };
  }
}

let retrivedEntity = [];
let currentCount = 0;

World.events.effectAdd.subscribe((eventData) => {
  const { entity } = eventData;
  try {
    if (!retriving) return;

    retrivedEntity.push(entity);

    if (++currentCount !== totalCount) return;

    if (onEntityRetrivedCallbacks.length) {
      onEntityRetrivedCallbacks.forEach((callback) => callback(retrivedEntity));
    };

    Commands.run('effect @e clear', World.getDimension('overworld'));

    totalCount = 0;
    onEntityRetrivedCallbacks = [];
    retriving = false;

    retrivedEntity = [];
    currentCount = 0;
  } catch (e) {
    if (disableLogging == false) {
      console.log(e);
      console.log(e.stack);
    };
  };
  getEnities((enities) => {
    Commands.run(`say ${JSON.stringify(enities)}`);
  });
});
