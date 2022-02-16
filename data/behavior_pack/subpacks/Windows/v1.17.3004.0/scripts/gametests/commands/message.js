// Custom commands for Minecraft Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.1 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.1.tgz>
//               data\behavior_pack\subpacks\v1.17.30.04\scripts\gametests\commands\index.js
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

import { World, Commands } from 'mojang-minecraft';

export function client (target, data) { // target: string, data: string
  console.log(`[${Date()}] <${target}> ${data}`);
  Commands.run(`tellraw ${target} {"rawtext":[{"text":"§7${data}"}]}`, World.getDimension('overworld'));
};

export function server (sender, data) { // sender: string, data: string
  console.log(`[${Date()}] <${sender} -> server> ${data}`);
  Commands.run(`tellraw @a {"rawtext":[{"text":"[${sender}: ${data}]"}]}`, World.getDimension('overworld'));
};