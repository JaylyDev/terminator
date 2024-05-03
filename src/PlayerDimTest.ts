import { GameMode, system, world } from '@minecraft/server';

/**
 * @param {string} dimension 
 */
function DimensionTest (dimension) {
  var playerdimcount = 0;
  let playercount = world.getAllPlayers().length;

  playerdimcount = world.getDimension(dimension).getEntities({ minDistance: 0, excludeGameModes: [GameMode.creative, GameMode.spectator] }).length;
  if ((playerdimcount / playercount) > 0.5) {
    for (const terminator of world.getDimension('overworld').getEntities({ minDistance: 0, type: 'entity:terminator' })) {
      terminator.triggerEvent('terminator:find_portal_to_' + dimension);
    }
  };
};

system.runInterval(() => {  
  DimensionTest('overworld');
  DimensionTest('nether');
  DimensionTest('the_end');
})
