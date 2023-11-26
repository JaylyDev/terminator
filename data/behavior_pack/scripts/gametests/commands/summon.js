import { Dimension, system } from '@minecraft/server';

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
  const entity = user_input.dimension.spawnEntity('entity:terminator', user_input.coords);

  system.runTimeout(() => {
    
  /**
   * Executing events based on 'user_input' variable
   * If the option is undefined in user_input
   * Script Engine will replace key values with 'default_nbt' variable
   */
  entity.nameTag = user_input.nametag;

  if (user_input.customskin == true) {
    entity.triggerEvent('terminator:enable_custom_skin')
  };
  if (user_input.bossbar == true) {
    entity.triggerEvent('terminator:enable_bossbar')
  };
  if (user_input.deathevent == false) {
    entity.triggerEvent('terminator:disable_respawn_event')
  };
  if (user_input.invulnerable == true) {
    entity.triggerEvent('terminator:enable_invulnerable')
  };
  if (user_input.physics == false) {
    entity.triggerEvent('terminator:disable_physics')
  };
  if (user_input.breedable == true) {
    entity.triggerEvent('breedable:true');
  };
  if (user_input.regeneration == false) {
    entity.triggerEvent('terminator:disable_regeneration')
  };
  if (user_input.respawn == false) {
    entity.triggerEvent('terminator:disable_respawn')
  };
  if (user_input.skinmodel == 'alex') {
    entity.triggerEvent('terminator:enable_customSlim_skin')
  };

  console.warn('User input: ' + JSON.stringify(user_input, null, 2));
  }, 2)
};
