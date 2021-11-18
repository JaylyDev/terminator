import { Commands, World } from 'mojang-minecraft';

World.events.beforeChat.subscribe(eventChat => {
  let count = 0;
  const players = World.getPlayers();
  var playercount = players.length;

  try {
    let playercmd = Commands.run('testfor @a[rm=0.01]', World.getDimension('overworld'));
    let terminatorcmd = Commands.run('testfor @e[rm=0.01,type=entity:terminator]', World.getDimension('overworld'));
    playercountresult = cmd.victim.length;

    if ((playercountresult / playercount) > 0.5 && terminatorcmd == 0) {
      Commands.run('event entity @e[type=entity:terminator] terminator:find_portal_to_overworld') 
    }
  } catch {}
}
