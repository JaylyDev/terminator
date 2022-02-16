// JavaScript terminal for Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.3 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.3.tgz>
//               data\behavior_pack\subpacks\v1.18.20.23\scripts\gametests\Main.js
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

import { world } from "mojang-minecraft";
import { players } from "scripts/credentials/access.js";
import { client } from 'scripts/gametests/commands/message.js';
import * as Minecraft from "mojang-minecraft";
import * as GameTest from "mojang-gametest";
import * as UI from "mojang-minecraft-ui";
import { viewObj } from 'scripts/minecraft/viewObj.js';
import { md5 } from 'scripts/blueimp/md5.js';
import { SHA256 as sha256 } from 'scripts/sha256.js';
import * as mojangminecraft from "scripts/@types/mojang-minecraft/index.js";
import * as mojanggametest from "scripts/@types/mojang-gametest/index.js";
import * as mojangminecraftui from "scripts/@types/mojang-minecraft-ui/index.js";

let prefix = "$";

function getIndex (param) {
  if (param == "mojang-minecraft") {
    return mojangminecraft;
  } else if (param == "mojang-gametest") {
    return mojanggametest;
  } else if (param == "mojang-minecraft-ui") {
    return mojangminecraftui;
  }
};

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
      const callback = (new Function("Minecraft", "GameTest", "UI", "viewObj", "md5", "sha256", "getIndex", `return (function () { ${data.message.substring(1)} });`))(Minecraft, GameTest, UI, viewObj, md5, sha256, getIndex);
      callback();
    } catch (error) {
      if (error.stack) { 
        client(playerName, `§c${String(error + error.stack)}`);
      } else client(playerName, `§c${String(error)}`);
    };
    
    console.log(`[${Date()}] <${playerName}> ${data.message}`);
  }
});
