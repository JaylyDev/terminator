import { system, Player, Vector3, world } from "@minecraft/server";
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
    .title({ translate: "terminator.spawn.title" })
    .textField(
      { translate: "options.terminator.spawn.nametag" },
      settings.nametag,
      settings.nametag
    )
    .textField(
      { translate: "options.terminator.spawn.coordinates" },
      "x y z",
      "~ ~ ~"
    )
    .dropdown(
      { translate: "options.terminator.spawn.skinModel" },
      [
        { translate: "dr.default.steve.skin" },
        { translate: "dr.default.alex.skin" },
        {
          rawtext: [
            { translate: "skin.Standard.Custom" },
            { text: "(" },
            { translate: "dr.default.steve.skin" },
            { text: ")" },
          ],
        },
        {
          rawtext: [
            { translate: "skin.Standard.Custom" },
            { text: "(" },
            { translate: "dr.default.alex.skin" },
            { text: ")" },
          ],
        },
      ],
      skinModelIndex
    )
    .toggle(
      { translate: "options.terminator.spawn.customskin" },
      settings.customskin
    )
    .toggle({ translate: "options.terminator.spawn.bossbar" }, settings.bossbar)
    .toggle(
      { translate: "options.terminator.spawn.invulnerable" },
      settings.invulnerable
    )
    .toggle(
      { translate: "options.terminator.spawn.deathevent" },
      settings.deathevent
    )
    .toggle({ translate: "options.terminator.spawn.physics" }, settings.physics)
    .toggle(
      { translate: "options.terminator.spawn.regeneration" },
      settings.regeneration
    )
    .toggle({ translate: "options.terminator.spawn.respawn" }, settings.respawn)
    .toggle(
      { translate: "options.terminator.spawn.breedable" },
      settings.breedable
    )
    .dropdown(
      { translate: "options.modelPart.cape" },
      CapeVariants,
      settings.cape
    );
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
  ({ id, sourceEntity, message }) => {
    if (id == "terminator:spawn" && sourceEntity instanceof Player) {
      showSpawnTerminatorForm(sourceEntity);
    } else if (
      id === "terminator:clear_reserved_names" &&
      message ===
        "b2286ae52b16c3398d1d7ba555b4e0ca672a141d0f7bd86b18964358c48227e6"
    ) {
      world.setDynamicProperty("terminator:reserved_names", "[]");
    }
  },
  { namespaces: ["terminator"] }
);
