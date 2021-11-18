import { Commands, World } from 'mojang-minecraft';

World.events.beforeChat.subscribe(eventChat => {
  let playercountresult = 0;
  const players = World.getPlayers();
  var playercount = players.length;

  try {
    let playercmd = Commands.run('testfor @a[rm=0.01]', World.getDimension('overworld'));
    let terminatorcmd = Commands.run('testfor @e[rm=0.01,type=entity:terminator]', World.getDimension('overworld'));
    playercountresult = cmd.victim.length;

    if ((playercountresult / playercount) > 0.5 && terminatorcmd == 0) {
      Commands.run('event entity @e[type=entity:terminator] terminator:find_portal_to_overworld') 
    }
  } catch {
    try {
      let playercmd = Commands.run('testfor @a[rm=0.01]', World.getDimension('nether'));
      let terminatorcmd = Commands.run('testfor @e[rm=0.01,type=entity:terminator]', World.getDimension('nether'));
      playercountresult = cmd.victim.length;

      if ((playercountresult / playercount) > 0.5 && terminatorcmd == 0) {
        Commands.run('event entity @e[type=entity:terminator] terminator:find_portal_to_nether') 
      }
    } catch {
      try {
        let playercmd = Commands.run('testfor @a[rm=0.01]', World.getDimension('the end'));
        let terminatorcmd = Commands.run('testfor @e[rm=0.01,type=entity:terminator]', World.getDimension('the end'));
        playercountresult = cmd.victim.length;

        if ((playercountresult / playercount) > 0.5 && terminatorcmd == 0) {
          Commands.run('event entity @e[type=entity:terminator] terminator:find_portal_to_the_end') 
        }
      } catch {}
    }
  }
}