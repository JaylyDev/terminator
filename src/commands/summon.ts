import { Dimension, Vector3, system } from "@minecraft/server";

export enum TerminatorSkinModel {
  Steve = "steve",
  Alex = "alex",
}

export interface TerminatorInputParam {
  nametag: string;
  customskin: boolean;
  bossbar: boolean;
  invulnerable: boolean;
  deathevent: boolean;
  physics: boolean;
  regeneration: boolean;
  respawn: boolean;
  breedable: boolean;
  coords: Vector3;
  dimension: Dimension;
  skinmodel: TerminatorSkinModel;
}

export function spawnTerminator(user_input: TerminatorInputParam) {
  // target: string, user_input: object
  const entity = user_input.dimension.spawnEntity(
    "entity:terminator",
    user_input.coords
  );

  system.runTimeout(() => {
    /**
     * Executing events based on 'user_input' variable
     * If the option is undefined in user_input
     * Script Engine will replace key values with 'default_nbt' variable
     */
    entity.nameTag = user_input.nametag;

    if (user_input.customskin == true) {
      entity.triggerEvent("terminator:enable_custom_skin");
    }
    if (user_input.bossbar == true) {
      entity.triggerEvent("terminator:enable_bossbar");
    }
    if (user_input.deathevent == false) {
      entity.triggerEvent("terminator:disable_respawn_event");
    }
    if (user_input.invulnerable == true) {
      entity.triggerEvent("terminator:enable_invulnerable");
    }
    if (user_input.physics == false) {
      entity.triggerEvent("terminator:disable_physics");
    }
    if (user_input.breedable == true) {
      entity.triggerEvent("breedable:true");
    }
    if (user_input.regeneration == false) {
      entity.triggerEvent("terminator:disable_regeneration");
    }
    if (user_input.respawn == false) {
      entity.triggerEvent("terminator:disable_respawn");
    }
    if (user_input.skinmodel == "alex") {
      entity.triggerEvent("terminator:enable_customSlim_skin");
    }

    console.log("User input: " + JSON.stringify(user_input, null, 2));
  }, 2);
}
