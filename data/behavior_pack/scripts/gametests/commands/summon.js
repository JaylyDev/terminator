import { Dimension } from '@minecraft/server';

/**
 * From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
 * Polyfill
 * This code adds compatible Object.keys support in older environments that do not natively support it
 */
if (!Object.keys) {
  Object.keys = (function () {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
      hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
      dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
      ],
      dontEnumsLength = dontEnums.length;

    return function (obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
};

/**
 * @typedef IVec3Input
 * @property {string} x - The x-coordinate.
 * @property {string} y - The y-coordinate.
 * @property {string} z - The z-coordinate.
 */

/**
 * @typedef ITerminatorInputParam
 * @property {string} nametag - The nametag for the Terminator.
 * @property {boolean} customskin - Whether the Terminator has a custom skin.
 * @property {boolean} bossbar - Whether the Terminator has a boss bar.
 * @property {boolean} invulnerable - Whether the Terminator is invulnerable.
 * @property {boolean} deathevent - Whether the Terminator triggers a death event.
 * @property {boolean} physics - Whether the Terminator is affected by physics.
 * @property {boolean} regeneration - Whether the Terminator has regeneration.
 * @property {boolean} respawn - Whether the Terminator can respawn.
 * @property {boolean} breedable - Whether the Terminator is breedable.
 * @property {import('@minecraft/server').Vector3} coords - The coordinates of the Terminator.
 * @property {Dimension} dimension - The dimension of the Terminator.
 * @property {"steve" | "alex"} skinmodel - The skin model for the Terminator (e.g., "steve").
 */

/**
 * @param {ITerminatorInputParam} user_input 
 */
export function terminator(user_input) { // target: string, user_input: object
  const entity = user_input.dimension.spawnEntity('minecraft:terminator', user_input.coords);
    if (entity.id === "entity:terminator") {

      /** @type {Partial<ITerminatorInputParam>} */
      const nbt_input = {};
      if (typeof user_input.nametag == 'string') {
        nbt_input.nametag = user_input.nametag;
      } else {
        console.log(`user_input.nametag is a type of ${typeof user_input.nametag} instead of 'string'`);
      };

      if (typeof user_input.customskin == 'boolean') {
        nbt_input.customskin = user_input.customskin;
      } else {
        console.log(`user_input.customskin is a type of ${typeof user_input.customskin} instead of 'boolean'`);
      };

      if (typeof user_input.bossbar == 'boolean') {
        nbt_input.bossbar = user_input.bossbar;
      } else {
        console.log(`user_input.bossbar is a type of ${typeof user_input.bossbar} instead of 'boolean'`);
      };

      if (typeof user_input.invulnerable == 'boolean') {
        nbt_input.invulnerable = user_input.invulnerable;
      } else {
        console.log(`user_input.invulnerable is a type of ${typeof user_input.invulnerable} instead of 'boolean'`);
      };

      if (typeof user_input.deathevent == 'boolean') {
        nbt_input.deathevent = user_input.deathevent;
      } else {
        console.log(`user_input.deathevent is a type of ${typeof user_input.deathevent} instead of 'boolean'`);
      };

      if (typeof user_input.physics == 'boolean') {
        nbt_input.physics = user_input.physics;
      } else {
        console.log(`user_input.physics is a type of ${typeof user_input.physics} instead of 'boolean'`);
      };

      if (typeof user_input.regeneration == 'boolean') {
        nbt_input.regeneration = user_input.regeneration;
      } else {
        console.log(`user_input.regeneration is a type of ${typeof user_input.regeneration} instead of 'boolean'`);
      };

      if (typeof user_input.coords == 'object') {
        if (typeof user_input.coords["x"] != 'number') {
          console.log(`user_input.coords.x (${user_input.coords.x}) is not a type of integer nor '~'`);
        } else {
          nbt_input.coords.x = user_input.coords["x"];
        };
        if (typeof user_input.coords["y"] != 'number') {
          console.log(`user_input.coords.y (${user_input.coords.y}) is not a type of integer nor '~'`);
        } else {
          nbt_input.coords["y"] = user_input.coords["y"];
        }
        if (typeof user_input.coords["z"] != 'number') {
          console.log(`user_input.coords.z (${user_input.coords.z}) is not a type of integer nor '~'`);
        } else {
          nbt_input.coords["z"] = user_input.coords["z"];
        }
      } else {
        console.log(`user_input.coords is a type of ${typeof user_input.coords} instead of 'object'`);
      };

      if (typeof user_input.respawn == 'boolean') {
        nbt_input.respawn = user_input.respawn;
      } else {
        console.log(`user_input.respawn is a type of ${typeof user_input.respawn} instead of 'boolean'`);
      };

      if (typeof user_input.breedable == 'boolean') {
        nbt_input.breedable = user_input.breedable;
      } else {
        console.log(`user_input.breedable is a type of ${typeof user_input.breedable} instead of 'boolean'`);
      };

      if (typeof user_input.skinmodel == 'string' && user_input.skinmodel == ('steve' || 'alex')) {
        nbt_input.skinmodel = user_input.skinmodel;
      } else {
        console.log(`user_input.skinmodel is a type of ${typeof user_input.skinmodel} instead of 'string'`);
      };

      console.log('User input: ' + JSON.stringify(user_input, null, 2));
      console.log('NBT Input: ' + JSON.stringify(nbt_input, null, 2));

      /**
       * Executing events based on 'nbt_input' variable
       * If the option is undefined in user_input
       * Script Engine will replace key values with 'default_nbt' variable
       */
      entity.nameTag = `${nbt_input.nametag}`;

      if (nbt_input.customskin == true) {
        entity.triggerEvent('terminator:enable_custom_skin')
      };
      if (nbt_input.bossbar == true) {
        entity.triggerEvent('terminator:enable_bossbar')
      };
      if (nbt_input.deathevent == false) {
        entity.triggerEvent('terminator:disable_respawn_event')
      };
      if (nbt_input.invulnerable == true) {
        entity.triggerEvent('terminator:enable_invulnerable')
      };
      if (nbt_input.physics == false) {
        entity.triggerEvent('terminator:disable_physics')
      };
      if (nbt_input.breedable == true) {
        entity.triggerEvent('breedable:true');
      };
      if (nbt_input.regeneration == false) {
        entity.triggerEvent('terminator:disable_regeneration')
      };
      if (nbt_input.respawn == false) {
        entity.triggerEvent('terminator:disable_respawn')
      };
      if (nbt_input.skinmodel == 'alex') {
        entity.triggerEvent('terminator:enable_customSlim_skin')
      };
    };
};
