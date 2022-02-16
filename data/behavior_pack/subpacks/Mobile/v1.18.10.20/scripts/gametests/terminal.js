// JavaScript terminal for Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.3 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.3.tgz>
//               data\behavior_pack\subpacks\v1.18.10.20\scripts\gametests\Main.js
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

import { world } from "mojang-minecraft";
import { players } from "scripts/credentials/access.js";
import { client } from 'scripts/gametests/commands/message.js';
import * as Minecraft from "mojang-minecraft";
import * as GameTest from "mojang-gametest";
import { viewObj } from 'scripts/minecraft/viewObj.js';

let prefix = "$";

world.events.beforeChat.subscribe((data) => {
  let playerName = data.sender.name ?? data.sender.nameTag;
  if (data.message.substring(0, 1) == prefix && players.includes(playerName)) {
    /**
     * This script is only available to players with authorization
     * Players are not supposed to execute this file
     */
    data.cancel = true;

    client(playerName, `$${data.message.substring(1)}`);
    try {
      const callback = (new Function("Minecraft", "GameTest", "viewObj", `return (function () { ${data.message.substring(1)} });`))(Minecraft, GameTest, viewObj);
      callback();
    } catch (error) {
      if (error.stack) { 
        client(playerName, `§c${String(error + error.stack)}`);
      } else client(playerName, `§c${String(error)}`);
    };
  }
});
