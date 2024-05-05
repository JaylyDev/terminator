import { world, system, Player, Vector3 } from "@minecraft/server";
import { ModalFormData } from "@minecraft/server-ui";
import { MinecraftDimensionTypes } from "@minecraft/vanilla-data";
import {
  spawnTerminator,
  TerminatorInputParam,
  TerminatorSkinModel,
} from "./summon.js";

function generateModalForm(settings: TerminatorInputParam) {
  let dimensionIndex = 0;
  let skinModelIndex = 0;
  switch (settings.dimension.id) {
    case MinecraftDimensionTypes.Overworld:
      dimensionIndex = 0;
      break;
    case MinecraftDimensionTypes.Nether:
      dimensionIndex = 1;
      break;
    case MinecraftDimensionTypes.TheEnd:
      dimensionIndex = 2;
      break;
  }
  switch (settings.skinmodel) {
    case TerminatorSkinModel.Steve:
      skinModelIndex = 0;
      break;
    case TerminatorSkinModel.Alex:
      skinModelIndex = 1;
      break;
  }

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
}

/**
 * @param {string} paramString
 * @param {Vector3} playerLocation
 * @returns
 */
function parseCoordinates(paramString: string, playerLocation: Vector3) {
  /** @type {string[]} */
  const coordinates: string[] = paramString.split(" ");
  /** @type {Vector3} */
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
  string,
  string,
  number,
  number,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean,
  boolean
];

system.afterEvents.scriptEventReceive.subscribe(
  ({ id, sourceEntity }) => {
    if (id == "terminator:spawn" && sourceEntity instanceof Player) {
      const default_nbt: TerminatorInputParam = {
        nametag: "Terminator",
        customskin: false,
        bossbar: false,
        invulnerable: false,
        deathevent: true,
        physics: true,
        regeneration: true,
        respawn: true,
        breedable: false,
        coords: sourceEntity.location,
        dimension: sourceEntity.dimension,
        skinmodel: TerminatorSkinModel.Steve,
      };
      const form = generateModalForm(default_nbt);
      form
        .show(sourceEntity)
        .then((result) => {
          if (result.canceled) return;
          const [
            nameTag,
            locationString,
            dimensionIndex,
            skinModelIndex,
            customSkin,
            bossbar,
            invulnerable,
            deathEvent,
            physics,
            regeneration,
            respawn,
            breedable,
          ] = result.formValues as TerminatorSpawnFormValues;
          let dimension = world.getDimension("overworld");
          let skinmodel: TerminatorSkinModel = TerminatorSkinModel.Steve;
          switch (dimensionIndex) {
            case 0:
              dimension = world.getDimension("overworld");
              break;
            case 1:
              dimension = world.getDimension("nether");
              break;
            case 2:
              dimension = world.getDimension("the_end");
              break;
          }
          switch (skinModelIndex) {
            case 0:
              skinmodel = TerminatorSkinModel.Steve;
              break;
            case 1:
              skinmodel = TerminatorSkinModel.Alex;
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
            coords: parseCoordinates(locationString, sourceEntity.location),
            dimension,
            skinmodel,
          };
          spawnTerminator(jsonInput);
        })
        .catch((error) => console.error(error + "\n" + error.stack));
    }
  },
  { namespaces: ["terminator"] }
);
