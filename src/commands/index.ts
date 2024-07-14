import { system, Player, Vector3 } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";
import {
  spawnTerminator,
  TerminatorInputParam,
  TerminatorSkinModel,
} from "./summon.js";
import { debugEnabled } from "../config.js";
import { CapeVariant, CapeVariants } from "../terminator/capeVariant.js";

function generateModalForm(settings: TerminatorInputParam) {
  let skinModelIndex = 0;
  switch (settings.skinmodel) {
    case TerminatorSkinModel.Steve:
      skinModelIndex = 0;
      break;
    case TerminatorSkinModel.Alex:
      skinModelIndex = 1;
      break;
    case TerminatorSkinModel.Custom:
      skinModelIndex = 2;
      break;
    case TerminatorSkinModel.CustomSlim:
      skinModelIndex = 3;
      break;
  }

  return new ModalFormData()
    .title("Spawn Terminator")
    .textField("Name Tag", settings.nametag, settings.nametag)
    .textField("Spawn Coordinates", "x y z", "~ ~ ~")
    .dropdown(
      "Skin Model",
      ["Steve", "Alex", "Custom (Steve Model)", "Custom (Alex Model)"],
      skinModelIndex
    )
    .toggle("Enable Custom Skin", settings.customskin)
    .toggle("Enable Bossbar", settings.bossbar)
    .toggle("Enable Immunity", settings.invulnerable)
    .toggle("Enable Death Event", settings.deathevent)
    .toggle("Enable Physics", settings.physics)
    .toggle("Enable Regeneration", settings.regeneration)
    .toggle("Enable Respawn", settings.respawn)
    .toggle("Enable Breedability", settings.breedable)
    .dropdown("Cape", CapeVariants, settings.cape);
}

/**
 * @param {string} paramString
 * @param {Vector3} playerLocation
 * @returns
 */
function parseCoordinates(paramString: string, playerLocation: Vector3) {
  const coordinates: string[] = paramString.split(" ");
  const parsedCoordinates: Vector3 = {
    x: 0,
    y: 0,
    z: 0,
  };

  for (let i = 0; i < 3; i++) {
    const key = ["x", "y", "z"][i] as keyof Vector3;
    if (coordinates[i].startsWith("~")) {
      const location = parseFloat(coordinates[i].replace("~", ""));
      parsedCoordinates[key] =
        (Number.isNaN(location) ? 0 : location) + playerLocation[key];
    } else {
      parsedCoordinates[key] = parseFloat(coordinates[i]);
    }
  }
  return parsedCoordinates;
}

type TerminatorSpawnFormValues = [
  string, // nameTag
  string, // locationString
  number, // skinModelIndex
  boolean, // customSkin
  boolean, // bossbar
  boolean, // invulnerable
  boolean, // deathEvent
  boolean, // physics
  boolean, // regeneration
  boolean, // respawn
  boolean, // breedable
  number // cape
];

const getDefaultSpawnOptions = (player: Player): TerminatorInputParam => ({
  nametag: "Terminator",
  customskin: false,
  bossbar: false,
  invulnerable: false,
  deathevent: true,
  physics: true,
  regeneration: true,
  respawn: true,
  breedable: false,
  coords: player.location,
  skinmodel: TerminatorSkinModel.Steve,
  cape: CapeVariant.None,
});

function getPlayerSpawnOptions(player: Player): TerminatorInputParam {
  const playerOptionString = player.getDynamicProperty(
    "terminator:spawn_options"
  ) as string | undefined;
  if (!playerOptionString) return getDefaultSpawnOptions(player);
  try {
    return JSON.parse(playerOptionString);
  } catch (error) {
    if (debugEnabled) console.error(error);
    return getDefaultSpawnOptions(player);
  }
}

export function showSpawnTerminatorForm(player: Player) {
  const spawnOptions = getPlayerSpawnOptions(player);
  const form = generateModalForm(spawnOptions);
  form
    .show(player)
    .then((result) => {
      if (result.canceled) return;
      const [
        nameTag,
        locationString,
        skinModelIndex,
        customSkin,
        bossbar,
        invulnerable,
        deathEvent,
        physics,
        regeneration,
        respawn,
        breedable,
        cape,
      ] = result.formValues as TerminatorSpawnFormValues;
      let skinmodel: TerminatorSkinModel = TerminatorSkinModel.Steve;
      switch (skinModelIndex) {
        case 0:
          skinmodel = TerminatorSkinModel.Steve;
          break;
        case 1:
          skinmodel = TerminatorSkinModel.Alex;
          break;
        case 2:
          skinmodel = TerminatorSkinModel.Custom;
          break;
        case 3:
          skinmodel = TerminatorSkinModel.CustomSlim;
          break;
      }

      const jsonInput: TerminatorInputParam = {
        nametag: nameTag,
        customskin: customSkin,
        bossbar: bossbar,
        invulnerable: invulnerable,
        deathevent: deathEvent,
        physics: physics,
        regeneration: regeneration,
        respawn: respawn,
        breedable: breedable,
        coords: parseCoordinates(locationString, player.location),
        skinmodel: skinmodel,
        cape: cape,
      };
      spawnTerminator(jsonInput, player);
    })
    .catch((error) => console.error(error + "\n" + error.stack));
}

system.afterEvents.scriptEventReceive.subscribe(
  ({ id, sourceEntity }) => {
    if (id == "terminator:spawn" && sourceEntity instanceof Player) {
      showSpawnTerminatorForm(sourceEntity);
    }
  },
  { namespaces: ["terminator"] }
);
