// Custom commands for Minecraft Terminator script APIs (experimental)
// Dependencies: @types/mojang-minecraft@0.1.0 <https://registry.npmjs.org/@types/mojang-minecraft/-/mojang-minecraft-0.1.0.tgz>
//               data\behavior_pack\subpacks\v1.16.210.05\scripts\gametests\commands\index.js
// Project: https://github.com/JaylyDev/terminator/
// Created by: https://github.com/JaylyDev

/* *****************************************************************************
   Copyright (c) JaylyMC.
   ***************************************************************************** */

import { World, Commands } from 'Minecraft';
import * as message from 'scripts/gametests/commands/message.js';

export function terminator(target, user_input) { // target: string, user_input: object
  var modifyEntityData = World.events.entityCreate.subscribe((entityData) => {
    console.log('entityCreate callback has been added from "scripts/gametests/commands/summon.js"');
    if (entityData.entity.id === "entity:terminator") {
      /**
       * These are the keys player are allow to modify 
       * when spawning a terminator with custom commands 
       */
      const default_nbt = {
        "nametag": "Terminator",
        "customskin": false,
        "bossbar": false,
        "invulnerable": false,
        "deathevent": true,
        "physics": true,
        "regeneration": true,
        "respawn": true,
        "breedable": false,
        "skinmodel": "steve"
      };

      // Applying player's JSON input to default NBT key values
      var nbt_input = default_nbt;

      if (typeof user_input['nametag'] == 'string') {
        nbt_input['nametag'] = user_input['nametag'];
        console.log(nbt_input['nametag']);
      } else {
        console.log(`user_input['nametag'] is a type of ${typeof user_input['nametag']} instead of 'string'`);
      };

      if (typeof user_input['customskin'] == 'boolean') {
        nbt_input['customskin'] = user_input['customskin'];
        console.log(nbt_input['customskin']);
      } else {
        console.log(`user_input['customskin'] is a type of ${typeof user_input['customskin']} instead of 'boolean'`);
      };

      if (typeof user_input['bossbar'] == 'boolean') {
        nbt_input['bossbar'] = user_input['bossbar'];
        console.log(nbt_input['bossbar']);
      } else {
        console.log(`user_input['bossbar'] is a type of ${typeof user_input['bossbar']} instead of 'boolean'`);
      };

      if (typeof user_input['invulnerable'] == 'boolean') {
        nbt_input['invulnerable'] = user_input['invulnerable'];
        console.log(nbt_input['invulnerable']);
      } else {
        console.log(`user_input['invulnerable'] is a type of ${typeof user_input['invulnerable']} instead of 'boolean'`);
      };

      if (typeof user_input['deathevent'] == 'boolean') {
        nbt_input['deathevent'] = user_input['deathevent'];
        console.log(nbt_input['deathevent']);
      } else {
        console.log(`user_input['deathevent'] is a type of ${typeof user_input['deathevent']} instead of 'boolean'`);
      };

      if (typeof user_input['physics'] == 'boolean') {
        nbt_input['physics'] = user_input['physics'];
        console.log(nbt_input['physics']);
      } else {
        console.log(`user_input['physics'] is a type of ${typeof user_input['physics']} instead of 'boolean'`);
      };

      if (typeof user_input['regeneration'] == 'boolean') {
        nbt_input['regeneration'] = user_input['regeneration'];
        console.log(nbt_input['regeneration']);
      } else {
        console.log(`user_input['regeneration'] is a type of ${typeof user_input['regeneration']} instead of 'boolean'`);
      };

      if (typeof user_input['respawn'] == 'boolean') {
        nbt_input['respawn'] = user_input['respawn'];
        console.log(nbt_input['respawn']);
      } else {
        console.log(`user_input['respawn'] is a type of ${typeof user_input['respawn']} instead of 'boolean'`);
      };

      if (typeof user_input['breedable'] == 'boolean') {
        nbt_input['breedable'] = user_input['breedable'];
        console.log(nbt_input['breedable']);
      } else {
        console.log(`user_input['breedable'] is a type of ${typeof user_input['breedable']} instead of 'boolean'`);
      };

      if (typeof user_input['skinmodel'] == 'string' && user_input['skinmodel'] == ('steve' || 'alex')) {
        nbt_input['skinmodel'] = user_input['skinmodel'];
        console.log(nbt_input['skinmodel']);
      } else {
        console.log(`user_input['skinmodel'] is a type of ${typeof user_input['skinmodel']} instead of 'string'`);
      };

      console.log('User input: ' + JSON.stringify(user_input, null, 2));
      console.log('NBT Input: ' + JSON.stringify(nbt_input, null, 2));

      /**
       * Executing events based on 'nbt_input' variable
       * If the option is undefined in user_input
       * Script Engine will replace key values with 'default_nbt' variable
       */
      entityData.entity.nameTag = `${nbt_input['nametag']}`;

      if (nbt_input['customskin'] == true) {
        entityData.entity.triggerEvent('terminator:enable_custom_skin')
      };
      if (nbt_input['bossbar'] == true) {
        entityData.entity.triggerEvent('terminator:enable_bossbar')
      };
      if (nbt_input['deathevent'] == false) {
        entityData.entity.triggerEvent('terminator:disable_respawn_event')
      };
      if (nbt_input['invulnerable'] == true) {
        entityData.entity.triggerEvent('terminator:enable_invulnerable')
      };
      if (nbt_input['physics'] == false) {
        entityData.entity.triggerEvent('terminator:disable_physics')
      };
      if (nbt_input['breedable'] == true) {
        entityData.entity.triggerEvent('breedable:true');
      };
      if (nbt_input['regeneration'] == false) {
        entityData.entity.triggerEvent('terminator:disable_regeneration')
      };
      if (nbt_input['respawn'] == false) {
        entityData.entity.triggerEvent('terminator:disable_respawn')
      };
      if (nbt_input['skinmodel'] == 'alex') {
        entityData.entity.triggerEvent('terminator:enable_customSlim_skin')
      };

      World.events.entityCreate.unsubscribe(modifyEntityData);
    };
  });
  Commands.run(`execute ${target} ~~~ summon entity:terminator`);
};

export function error(target) { // target: string
  var error_msg = "This add-on currenly do not support this entity.";
  message.client(target, error_msg)
};
