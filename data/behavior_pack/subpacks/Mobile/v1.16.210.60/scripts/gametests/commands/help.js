// Custom commands for Minecraft Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.0 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.0.tgz>
//               data\behavior_pack\subpacks\v1.16.210.05\scripts\gametests\commands\index.js
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

import * as message from 'scripts/gametests/commands/message.js';

const definitions = [
  {
    "command": "#help",
    "infomation": {
      "definition": "you need help so here we are",
      "usage": [ "" ]
    }
  },
  {
    "command": "#summon",
    "infomation": {
      "definition": "Summons an entity along with multiple events added to the entity behavior.",
      "usage": [
        "<entity: string>",
        "<entity: string> <NBT Data: JSON>"
      ]
    }
  },
  {
    "command": "#version",
    "infomation": {
      "definition": "Displays the version of Minecraft GameTest Framework and GameTest add-on module.",
      "usage": [
        "gametest",
        "module"
      ]
    }
  }
];

export function display(target) {
  let text = "§2--- Showing help page (cuz u need it) ---";
  message.client(target, text);
  for (let index = 0; index < definitions.length; index++) {
    for (let count = 0; count < definitions[index]['infomation']['usage'].length; count++) {
      text = `${definitions[index]['command']} ${definitions[index]['infomation']['usage'][count]}`;
      message.client(target, text);
    }
  };
  text = "§2For more infomation, visit: https://github.com/JaylyDev/terminator/blob/main/docs/commands/gametest.md";
  message.client(target, text);
}