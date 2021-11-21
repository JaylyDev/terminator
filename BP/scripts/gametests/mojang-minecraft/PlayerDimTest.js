import { Commands, World } from 'mojang-minecraft';

function DimensionTest (dimension) {
  var playerdimcount = 0;
  const players = World.getPlayers();
  var playercount = players.length;
  const disableLogging = true;

  try {
    var playerdimcount = Commands.run('testfor @a[rm=0]', World.getDimension(dimension)).victim.length;

    if ((playerdimcount / playercount) > 0.5) {
      if (dimension == 'the end') {
        var dim_output = 'the_end';
      } else { var dim_output = dimension; };
      Commands.run(`event entity @e[type=entity:terminator] terminator:find_portal_to_${dim_output}`, World.getDimension('overworld'));
      Commands.run(`event entity @e[type=entity:terminator] terminator:find_portal_to_${dim_output}`, World.getDimension('nether'));
      Commands.run(`event entity @e[type=entity:terminator] terminator:find_portal_to_${dim_output}`, World.getDimension('the end'));
    };
  } catch (err) {
    if (disableLogging == false) {
      console.warn(`${dimension} test - ${err}`);
    };
  };
};

World.events.tick.subscribe(() => {  
  DimensionTest('overworld');
  DimensionTest('nether');
  DimensionTest('the end');
})