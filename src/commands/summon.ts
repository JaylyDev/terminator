import { Player, Vector3, system } from "@minecraft/server";
import { debugEnabled } from "../config";
import { CapeVariant } from "../terminator/capeVariant";

export enum TerminatorSkinModel {
  Steve = "steve",
  Alex = "alex",
  Custom = "custom",
  CustomSlim = "custom_slim",
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
  skinmodel: TerminatorSkinModel;
  cape: CapeVariant;
}

export function spawnTerminator(
  user_input: TerminatorInputParam,
  sourcePlayer: Player
) {
  // target: string, user_input: object
  const entity = sourcePlayer.dimension.spawnEntity(
    "entity:terminator",
    user_input.coords
  );

  system.runTimeout(() => {
    /**
     * Executing events based on 'user_input' variable
     * If the option is undefined in user_input
     * Script Engine will replace key values with 'default_nbt' variable
     */
    user_input.nametag = user_input.nametag
      .replace(/[^a-zA-Z0-9_ ]/g, "")
      .substring(0, 15);
    entity.nameTag = user_input.nametag;

    if (user_input.customskin == true) {
      entity.triggerEvent("terminator:enable_custom_skin");
    }
    if (user_input.bossbar == true) {
      entity.triggerEvent("terminator:enable_bossbar");
    }
    if (user_input.deathevent == false) {
      entity.addTag("disablerespawnevent");
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
    if (user_input.skinmodel == TerminatorSkinModel.Alex) {
      entity.triggerEvent("terminator:switch_skin_to_alex");
    } else if (user_input.skinmodel == TerminatorSkinModel.Custom) {
      entity.triggerEvent("terminator:enable_custom_skin");
    } else if (user_input.skinmodel == TerminatorSkinModel.CustomSlim) {
      entity.triggerEvent("terminator:enable_customSlim_skin");
    }
    if (user_input.cape !== 0) {
      entity.setProperty("terminator:cape", user_input.cape);
    }

    const userInputString = JSON.stringify(user_input);
    if (debugEnabled) console.log("User input: " + userInputString);
    sourcePlayer.setDynamicProperty(
      "terminator:spawn_options",
      userInputString
    );
  }, 2);
}
