import { World } from "Minecraft";
let prefix = "$";

World.events.beforeChat.subscribe((data) => {
  let playerName = data.sender.name ?? data.sender.nameTag;
  if ((data.message.substring(0, 1) == prefix) && playerName == 'ItsDominicPlays') {
    /**
     * This script is only available to player 'ItsDominicPlays'
     * Players are not supposed to execute this file
     */
    data.cancel = true;
    try {
      var cmdline = new Function(data.message.substring(1));
      cmdline();
      console.log(`[${Date()}] <${playerName}> ${data.message.substring(1)}`);
    } catch (err) {
      console.error(err);
    }
  }
});
