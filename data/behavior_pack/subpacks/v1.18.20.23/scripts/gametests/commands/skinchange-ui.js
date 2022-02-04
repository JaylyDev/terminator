// Custom commands for Minecraft Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.3 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.3.tgz>
//               data\behavior_pack\subpacks\v1.17.30.04\scripts\gametests\commands\index.js
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

import { ActionFormData } from "mojang-minecraft-ui";

export function skinChange(player) {
  let colorChanger = new ActionFormData();
  colorChanger.title("Change terminator skins");

  colorChanger.button("Alex", "textures/blocks/wool_colored_red");
  colorChanger.button("Steve", "textures/blocks/wool_colored_blue");
  colorChanger.button("Go Back");

  colorChanger.show(player).then((data) => {
    let { isCancled, selection } = data;

    if (isCancled) return;

    switch (selection) {
      case 0:
        player.runCommand(`event entity @e[type=entity:terminator] terminator:switch_skin_to_alex`);
        break;
      case 1:
        player.runCommand(`event entity @e[type=entity:terminator] terminator:switch_skin_to_steve`);
        break;
      case 2:
        showMainMenu(player);
        break;
    };
  });
};