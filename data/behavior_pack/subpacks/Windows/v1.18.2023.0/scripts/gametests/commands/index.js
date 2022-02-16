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
import { authorize } from 'scripts/credentials/developer.js';
import * as auth from 'scripts/credentials/access.js';

let prefix = "#";

world.events.beforeChat.subscribe((data) => {
  // Chat logging stuff
  let playerName = data.sender.name ?? data.sender.nameTag;

  // Main script
  if (data.message.substring(0, 1) == prefix) {
    data.cancel = true; // cancels message sent to public chat
    var cmd = data.message.split(' ');
    if (cmd[0] == `${prefix}summon`) {
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
    } else if (cmd[0] == `${prefix}modalformtest` && auth.players.includes(playerName)) {
      /**
       * @param
       * This function execute test commands.
       * @requires 
       * authorization along with a key
       * @returns
       * according input "module" and status message
       */
      var respondStatus = authorize(cmd[1], cmd[2], playerName);
      var statusCode = respondStatus['response']['code'];
      if (statusCode == 0) { try { ModalForm() } catch {} } else {
        console.error(JSON.stringify(respondStatus));
        message.client(JSON.stringify(respondStatus));
      };
    } else if (cmd[0] == `${prefix}importgametest` && auth.players.includes(playerName)) {
      /**
       * @param
       * This function execute test commands.
       * @requires 
       * authorization along with a key
       * @returns
       * according input "module" and status message
       */
      var respondStatus = authorize(cmd[1], cmd[2], playerName);
      var statusCode = respondStatus['response']['code'];
      if (statusCode == 0) {
        try { mojang_minecraft(); } catch (err) {};
        try { mojang_gametest(); } catch (err) {};
        try { mojang_minecraft_ui(); } catch (err) {};
      } else {
        console.error(JSON.stringify(respondStatus));
        message.client(playerName, JSON.stringify(respondStatus));
      };
    } else if (cmd[0] == `${prefix}fillChunk` && auth.players.includes(playerName)) {
      /**
       * @description
       * experiment with placing blocks
       */
      const blocks = (cmd[1] * cmd[2] * cmd[3]);

      const playerCoord = { x: Math.floor(data.sender.location.x), y: Math.floor(data.sender.location.y), z: Math.floor(data.sender.location.z) };

      const array = Array.from(Array(blocks), (item, i) => ({ x: i % 16 + playerCoord.x, y: -64 + Math.floor(i / 256) % 384, z: Math.floor(i / 16) % 16 + playerCoord.z }));

      for (let blocks = 0; blocks < array.length; blocks++) {
        const BlockLocation = array[blocks];
        console.log(`${playerName}: setblock ${BlockLocation.x} ${BlockLocation.y} ${BlockLocation.z} stone`)
        try {
          data.sender.runCommand(`setblock ${BlockLocation.x} ${BlockLocation.y} ${BlockLocation.z} stone`);
          console.log(`§dBlock ${blocks}: Code 0`);
        } catch (error) { console.log(`§dBlock ${blocks}: Code ${error.statusCode}`) };
      };
      message.client(playerName, `§d${array.length} block(s) has been changed.`);
    } else {
      /**
       * @param
       * This function throws exception in client chat
       */
      message.client(playerName, `§cUnknown command: §7${cmd[0]}§c. Please check that the command exists.`);
    }
  }
});
