import { world } from "mojang-minecraft";
import * as message from 'scripts/gametests/commands/message.js';
import { viewObj } from 'scripts/minecraft/viewObj.js';
let prefix = "!";

world.events.beforeChat.subscribe((data) => {
  // Chat logging stuff
  let playerName = data.sender.name ?? data.sender.nameTag;

  // Main script
  if (data.message.substring(0, 1) == prefix && playerName == 'ItsDominicPlays') {
    data.cancel = true;
    var command = data.message.split('');
    command.shift();
    command = command.join('');
    message.client(playerName, viewObj(world.getDimension('overworld').runCommand(`execute ${playerName} ~ ~ ~ ${command}`)).join('\n§r'));
  }
});
