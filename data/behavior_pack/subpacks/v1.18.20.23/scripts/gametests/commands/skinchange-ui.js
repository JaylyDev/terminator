// Custom commands for Minecraft Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.3 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.3.tgz>
//               data\behavior_pack\subpacks\v1.18.20.23\scripts\gametests\commands\index.js
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

import { ActionFormData } from "mojang-minecraft-ui";
import { client } from "scripts/gametests/commands/message.js";

export function skinChange(player) {
  let colorChanger = new ActionFormData();
  colorChanger.title("Change terminator skins");

  colorChanger.button("Alex", "textures/blocks/wool_colored_red");
  colorChanger.button("Steve", "textures/blocks/wool_colored_blue");
  colorChanger.button("Go Back");

  colorChanger.show(player).then(uiResponse => {
    const { isCanceled, selection } = uiResponse;

    if (isCanceled === true) {
      try { client('ItsDominicPlays', 'changeSkin > UI Canceled'); } catch (err) { console.log(err); };
      return;
    };

    if (selection == 0) {
      player.runCommand("event entity @e[family=terminator] terminator:switch_skin_to_alex");
    };

    if (selection == 1) {
      player.runCommand("event entity @e[family=terminator] terminator:switch_skin_to_steve");
    };

    if (selection == 2) {
      try { client('ItsDominicPlays', 'changeSkin > selection = 2'); } catch (err) { console.log(err); };
    };
  });
};