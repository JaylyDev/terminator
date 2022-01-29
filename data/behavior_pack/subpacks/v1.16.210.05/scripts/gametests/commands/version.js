// Custom commands for Minecraft Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.0 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.0.tgz>
//               data\behavior_pack\subpacks\v1.16.210.05\scripts\gametests\commands\index.js
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

export function gametest (type) { // type: ( 'string' | 'array' | 'object' )
  const version = [ 1, 16, 210, 5 ];
  if (type == 'string') {
    return `${version[0]}.${version[1]}.${version[2]}.${version[3]}`;
  } else if (type == 'array') {
    return [version[0], version[1], version[2], version[3]];
  } else if (type == 'object') {
    return {
      "major": version[0],
      "minor": version[1],
      "patch": version[2],
      "revision": version[3]
    };
  } else {
    return undefined;
  }
};

export function module (type) { // type: ( 'string' | 'array' | 'object' )
  const version = [ 0, 4, 29 ];
  if (type == 'string') {
    return `${version[0]}.${version[1]}.${version[2]}`;
  } else if (type == 'array') {
    return [version[0], version[1], version[2]];
  } else if (type == 'object') {
    return {
      "major": version[0],
      "minor": version[1],
      "patch": version[2]
    };
  } else {
    return undefined;
  }
};