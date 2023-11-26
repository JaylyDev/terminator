import { world, system, Player } from "@minecraft/server";
import { ModalFormData, ModalFormResponse } from "@minecraft/server-ui";
import * as summon from './summon.js';

let prefix = "#";

/**
 * 
 * @param {import("./summon.js").ITerminatorInputParam} settings 
 */
function generateModalForm(settings) {
  let dimensionIndex = 0;
  let skinModelIndex = 0;
  switch (settings.dimension.id) {
    case "minecraft:overworld":
      dimensionIndex = 0;
      break;
    case "minecraft:nether":
      dimensionIndex = 1;
      break;
    case "minecraft:the_end":
      dimensionIndex = 2;
      break;
  };
  switch (settings.skinmodel) {
    case "steve":
      skinModelIndex = 0;
      break;
    case "alex":
      skinModelIndex = 1;
      break;
  };

  return new ModalFormData()
    .title("Spawn Terminator")
    .textField("Name Tag", "Terminator", "Terminator")
    .textField("Spawn Coordinates", "x y z", "~ ~ ~")
    .dropdown("Dimension", ["Overworld", "Nether", "The End"], dimensionIndex)
    .dropdown("Skin Model", ["Steve", "Alex"], skinModelIndex)
    .toggle("Enable Custom Skin", settings.customskin)
    .toggle("Enable Bossbar", settings.bossbar)
    .toggle("Enable Immunity", settings.invulnerable)
    .toggle("Enable Death Event", settings.deathevent)
    .toggle("Enable Physics", settings.physics)
    .toggle("Enable Regeneration", settings.regeneration)
    .toggle("Enable Respawn", settings.respawn)
    .toggle("Enable Breedability", settings.breedable);
};

/**
 * @param {string} paramString 
 * @param {import("@minecraft/server").Vector3} playerLocation 
 * @returns 
 */
function parseCoordinates(paramString, playerLocation) {
  /** @type {string[]} */
  const coordinates = paramString.split(" ");
  /** @type {import("@minecraft/server").Vector3} */
  const parsedCoordinates = { x: 0, y: 0, z: 0 };

  for (let i = 0; i < 3; i++) {
    /** @type {keyof import("@minecraft/server").Vector3} */
    // @ts-ignore
    const key = ["x", "y", "z"][i];
    if (coordinates[i].startsWith("~")) {
      const location = parseFloat(coordinates[i].replace("~", ""));
      parsedCoordinates[key] = (Number.isNaN(location) ? 0 : location) + playerLocation[key];
    } else {
      parsedCoordinates[key] = parseFloat(coordinates[i]);
    }
  }
  return parsedCoordinates;
}

system.afterEvents.scriptEventReceive.subscribe(({ id, sourceEntity }) => {
  if (id == 'terminator:spawn' && (sourceEntity instanceof Player)) {
    /** @type {import("./summon.js").ITerminatorInputParam} */
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
      "coords": sourceEntity.location,
      "dimension": sourceEntity.dimension,
      "skinmodel": "steve"
    };
    const form = generateModalForm(default_nbt);
    form.show(sourceEntity).then((result) => {
      if (result.canceled) return;
      /**
       * @type {[string, string, number, number, boolean, boolean, boolean, boolean, boolean, boolean, boolean, boolean ]}
       */
      // @ts-ignore
      const [nameTag, locationString, dimensionIndex, skinModelIndex, customSkin, bossbar, invulnerable, deathEvent, physics, regeneration, respawn, breedable] = result.formValues;
      let dimension = world.getDimension('overworld');
      /** @type {"steve" | "alex"} */
      let skinmodel = "steve";
      switch (dimensionIndex) {
        case 0:
          dimension = world.getDimension('overworld');
          break;
        case 1:
          dimension = world.getDimension('nether');
          break;
        case 2:
          dimension = world.getDimension('the_end');
          break;
      }
      switch (skinModelIndex) {
        case 0:
          skinmodel = "steve";
          break;
        case 1:
          skinmodel = "alex";
          break;
      }

      /**
       * @type {import("./summon.js").ITerminatorInputParam}
       */
      const jsonInput = {
        "nametag": nameTag,
        "customskin": customSkin,
        "bossbar": bossbar,
        "invulnerable": invulnerable,
        "deathevent": deathEvent,
        "physics": physics,
        "regeneration": regeneration,
        "respawn": respawn,
        "breedable": breedable,
        coords: parseCoordinates(locationString, sourceEntity.location),
        dimension,
        skinmodel
      }
      summon.terminator(jsonInput);
    })
    .catch((error) => console.error(error + "\n" + error.stack));
  }
}, { namespaces: ['terminator'] });
