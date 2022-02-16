// Custom commands for Minecraft Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.3 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.3.tgz>
//               data\behavior_pack\subpacks\v1.17.30.04\scripts\gametests\commands\index.js
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

import { world } from 'mojang-minecraft';
import * as summon from 'scripts/gametests/commands/summon.js';

let prefix = "#";

world.events.beforeChat.subscribe((data) => {
  if (data.message.substring(0, 1) == prefix) {
    data.cancel = true; // cancels message sent to public chat
    var cmd = data.message.split(' ');

    if (cmd[0] == `${prefix}teleport`) {
      let numberId;
      const identifier = "entity:terminator";

      if (cmd[1] == "terminator") {
        if (Number(cmd[2]) != NaN) {
          numberId = Number(cmd[2])
        } else numberId = 0;

        for (let entity of world.getDimension('overworld').getEntities()) {
          if (entity.id === identifier) {
            if ( entity.nameTag.split(' ')[0] == 'Terminator' && entity.nameTag.split(' ')[1] != undefined ) {
              let getNumber = Number((entity.nameTag.split(' ')[1].split('').slice(1, -1)).join(''));
              if (numberId === getNumber) {
                let entityInfo = {
                  "nameTag": entity.nameTag,
                  "position": [entity.location.x, entity.location.y, entity.location.z],
                  "rotation": [entity.bodyRotation],
                  "dimension": entity.dimension
                };
                data.sender.teleport(new Location(entityInfo.position[0], entityInfo.position[1], entityInfo.position[2]), entityInfo.dimension, 0, entityInfo.rotation);
                
                data.sender.runCommand(`tellraw ${entityInfo.nameTag} { "rawtext":[{ "translate": "commands.tp.successVictim", "with":{ "rawtext":{ "selector": "${entityInfo.nameTag}"}}}]}`);
                console.log(`[teleport.js]- Teleported ${data.sender.name} to ${entityInfo.position.join(", ")}`);
                console.log(entityInfo);
              }
            } else if ( entity.nameTag.split(' ')[0] == 'Terminator' && entity.nameTag.split(' ')[1] == undefined ) {
              let getNumber = 0;
              if (numberId === getNumber) {
                let entityInfo = {
                  "nameTag": entity.nameTag,
                  "position": [entity.location.x, entity.location.y, entity.location.z],
                  "rotation": [entity.bodyRotation],
                  "dimension": entity.dimension
                };
                data.sender.teleport(new Location(entityInfo.position[0], entityInfo.position[1], entityInfo.position[2]), entityInfo.dimension, 0, entityInfo.rotation);

                data.sender.runCommand(`tellraw ${entityInfo.nameTag} { "rawtext":[{ "translate": "commands.tp.successVictim", "with":{ "rawtext":{ "selector": "${entityInfo.nameTag}"}}}]}`);
                console.log(`[teleport.js]- Teleported ${data.sender.name} to ${entityInfo.position.join(", ")}`);
                console.log(entityInfo);
              }
            };
          };
        };
      } else if (cmd[1] != undefined) {
        summon.error(playerName);
      } else message.client(playerName, 'Syntax error: Unexpected \\"\\": at \\"#teleport>><<\\"');
    }
  }
})