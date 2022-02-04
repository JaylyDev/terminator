// Permissions for custom commands script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.3 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.3.tgz>
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev
// Definitions: https://minecraft.fandom.com/wiki/Permission_level#Bedrock_Edition_2

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

import { world } from 'mojang-minecraft';

export function operator_test(target) {
  const code = {
    "success": 0,
    "failed": -2147352676
  };
  for (let player of world.getPlayers()) {
    const playerName = player.name;
    if (playerName == target) {
      const statusCode = player.runCommand('camerashake add @s 0 0.01')['statusCode'];

      if (statusCode === code['success']) {
        return 1;
      } else if (statusCode === code['failed']) {
        return 0;
      } else return -1;
    };
  };
  return -1;
};