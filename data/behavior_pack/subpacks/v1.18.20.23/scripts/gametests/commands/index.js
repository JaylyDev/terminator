// Custom commands for Minecraft Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.3 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.3.tgz>
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

import { world } from "mojang-minecraft";
import * as version from 'scripts/gametests/commands/version.js';
import * as message from 'scripts/gametests/commands/message.js';
import * as summon from 'scripts/gametests/commands/summon.js';
import * as help from 'scripts/gametests/commands/help.js';
import { operator_test } from 'scripts/minecraft/permission.js';
import { skinChange } from "scripts/gametests/commands/changeSkin-ui.js";

let prefix = "#";

world.events.beforeChat.subscribe((data) => {
  // Chat logging stuff
  let playerName = data.sender.name ?? data.sender.nameTag;

  // Main script
  if (data.message.substring(0, 1) == prefix) {
    data.cancel = true; // cancels message sent to public chat
    var cmd = data.message.split(' ');
    if (cmd[0] == `${prefix}summon`) {
      var playerPermission = operator_test(playerName);
      if (playerPermission == 1) {
        /**
         * @requires
         * Operator permissions
         * @returns
         * For spawning an entity based on entity identifier input and customization input in JSON
         * @example
         * ```
         *    #summon terminator {"nameTag":"custom"}
         *    #summon terminator {"regeneration":true,"respawn":true}
         * ```
         */
        if (cmd[1] == 'terminator') {
          // get json part
          var jsonNBT = data.message.split(" ");
          console.log(`1 - ${jsonNBT}`);
          jsonNBT.shift();
          console.log(`2 - ${jsonNBT}`);
          jsonNBT.shift();
          console.log(`3 - ${jsonNBT}`);
          jsonNBT = jsonNBT.join('');
          console.log(`4 - ${jsonNBT}`);
          try {
            var jsonInput = JSON.parse(jsonNBT);
            console.log(`5.0 - ${jsonNBT}`);
          } catch {
            var jsonInput = {};
            console.log(`5.1 - ${jsonNBT}`);
          }
          summon.terminator(playerName, jsonInput);
        } else if (cmd[1] != undefined) {
          summon.error(playerName);
        } else message.client(playerName, 'Syntax error: Unexpected \\"\\": at \\"#summon>><<\\"');
      } else message.client(playerName, `§cUnknown command: §7${cmd[0]}§c. Please check that you have permission to use the command.`);
    } else if (cmd[0] == `${prefix}version`) {
      /**
       * @returns
       * GameTest Framework version and Add-on GameTest Package version
       * @example
       * ```
       *    #version gametest
       *    #version
       * ```
       */
      if (cmd[1] == "gametest") {
        message.client(playerName, `GameTest Framework version: ${version.gametest('string')}`);
      } else if (cmd[1] == "module") {
        message.client(playerName, `Add-on GameTest module version: ${version.module('string')}`);
      } else {
        message.client(playerName, `GameTest Framework version: ${version.gametest('string')}`);
        message.client(playerName, `Add-on GameTest module version: ${version.module('string')}`);
      }
    } else if (cmd[0] == `${prefix}help`) {
      help.display(playerName);
    } else if (cmd[0] == `${prefix}changeSkin`) {
      skinChange(playerName);
      message.client(playerName, '#changeSkin command is currenly in beta, if there are bugs report it!');
    } else {
      /**
       * @param This function throws exception in client chat
       */
      message.client(playerName, `§cUnknown command: §7${cmd[0]}§c. Please check that the command exists.`);
    }
  }
});
