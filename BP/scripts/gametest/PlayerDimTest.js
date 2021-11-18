import { Commands, World } from 'mojang-minecraft';

World.events.beforeChat.subscribe(eventChat => {
  let count = 0;
  const players = World.getPlayers();
  var playercount = players.length;

  try {
    let cmd = Commands.run('testfor @a[rm=0.01]', World.getDimension('nether'));
    count = cmd.victim.length;

  if ((count / playercount) > 0.5) {
    Commands.run('event entity @e[type=entity:terminator] terminator:find_portal') }
  } catch {}
}
