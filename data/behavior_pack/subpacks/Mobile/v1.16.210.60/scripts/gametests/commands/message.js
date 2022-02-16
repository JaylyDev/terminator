// Custom commands for Minecraft Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.0 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.0.tgz>
//               data\behavior_pack\subpacks\v1.16.210.05\scripts\gametests\commands\index.js
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

import { World, Commands } from 'Minecraft';

export function client (target, data) {
  Commands.run(`tellraw ${target} {"rawtext":[{"text":"§7${data}"}]}`);
};

export function server (sender, data) {
  Commands.run(`tellraw @a {"rawtext":[{"text":"[${sender}: ${data}]"}]}`);
};