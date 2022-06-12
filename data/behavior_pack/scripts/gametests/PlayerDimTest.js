import { world } from 'mojang-minecraft';

function DimensionTest (dimension) {
  var playerdimcount = 0;
  let playercount = 0;
  for (let player of world.getPlayers()) {
    playercount += 1;
  }
  const disableLogging = true;

  try {
    playerdimcount = world.getDimension(dimension).runCommand('testfor @a[rm=0,m=!c]').victim.length;
    if ((playerdimcount / playercount) > 0.5) {
      if (dimension == 'the end') {
        var dim_output = 'the_end';
      } else { var dim_output = dimension; };
      world.getDimension('overworld').runCommand(`event entity @e[type=entity:terminator] terminator:find_portal_to_${dim_output}`);
    };
  } catch (err) {
    if (disableLogging == false) {
      console.warn(`${dimension} test - ${err}`);
    };
  };
};

world.events.tick.subscribe(() => {  
  DimensionTest('overworld');
  DimensionTest('nether');
  DimensionTest('the end');
})
