import { Entity, RawText, system, world } from "@minecraft/server";
import { terminatorSpawn } from "../terminator-events/onTerminatorSpawn";
import { MinecraftColor } from "../minecraft-color";
import { getAllTerminators } from "./getAll";
import { debugEnabled } from "../config";

/**
 * A controller of reserved names when assigning a name tag to terminators.
 */
class ReservedNames {
  has(nameTag: string) {
    const names = world.getDynamicProperty("terminator:reserved_names");
    if (typeof names !== "string") {
      return false;
    } else {
      const namesArray = JSON.parse(names) as string[];
      return namesArray.includes(nameTag);
    }
  }
  add(nameTag: string) {
    const names = world.getDynamicProperty("terminator:reserved_names");
    if (typeof names !== "string") {
      world.setDynamicProperty(
        "terminator:reserved_names",
        JSON.stringify([nameTag])
      );
      return;
    } else {
      const namesArray = JSON.parse(names) as string[];
      namesArray.push(nameTag);
      world.setDynamicProperty(
        "terminator:reserved_names",
        JSON.stringify(namesArray)
      );
    }
  }
  delete(nameTag: string) {
    const names = world.getDynamicProperty("terminator:reserved_names");
    if (typeof names !== "string") {
      world.setDynamicProperty("terminator:reserved_names", "[]");
      return;
    } else {
      const namesArray = JSON.parse(names) as string[];
      const index = namesArray.indexOf(nameTag);
      if (index !== -1) {
        namesArray.splice(index, 1);
        world.setDynamicProperty(
          "terminator:reserved_names",
          JSON.stringify(namesArray)
        );
      }
    }
  }
}

/**
 * Reserved names that terminators cannot be assigned to when spawn.
 */
export const reservedNames = new ReservedNames();

function broadcastMessage(entity: Entity) {
  // broadcast to world
  const hasRespawn = entity.hasTag("has_respawn");
  const broadcastMessage = entity.getDynamicProperty("broadcast_join_message");

  if (broadcastMessage === false) {
    return;
  }

  if (!hasRespawn) {
    const rawtext: RawText = {
      rawtext: [
        { text: MinecraftColor.yellow },
        { translate: "multiplayer.player.joined", with: [entity.nameTag] },
      ],
    };
    world.sendMessage(rawtext);
  }
  // Death message is missing whenever this message is shown. Please fix if that happens.
  else {
    const rawtext: RawText = {
      rawtext: [
        { translate: "death.attack.generic", with: [entity.nameTag] },
        { translate: "message.entity.respawn.generic" },
      ],
    };
    world.sendMessage(rawtext);
    if (debugEnabled) {
      console.warn(
        `Terminator ${entity.nameTag} has respawned without death message assigned.`
      );
    }
  }
  world.playSound("mob.terminator.spawn", entity.location);
}

/**
 * Fetch the entity name tag from dynamic properties, then assign it to entity.
 * @param entity - The entity to assign a name tag to
 */
function assignNameTag(entity: Entity) {
  // This name doesn't change
  let name = entity.getDynamicProperty("terminator:name_tag");
  const hasRespawn = entity.hasTag("has_respawn");
  if (typeof name !== "string") {
    name = "Terminator";
  }

  const allTerminators = Array.from(getAllTerminators());
  const allNames = allTerminators.map((t) => t.nameTag);
  let duplicateNamesIndex = allTerminators.filter((terminator) => {
    return terminator.getDynamicProperty("terminator:name_tag") === name;
  }).length;

  // Set name tag
  if (duplicateNamesIndex > 0 && !hasRespawn) {
    let nameTag = `${name} (${duplicateNamesIndex})`;

    while (reservedNames.has(nameTag) || allNames.includes(nameTag)) {
      duplicateNamesIndex++;
      nameTag = `${name} (${duplicateNamesIndex})`;
      console.log(nameTag);
    }
    entity.nameTag = nameTag;
  } else {
    entity.nameTag = name;
  }
  entity.setDynamicProperty("terminator:name_tag", entity.nameTag);
}

terminatorSpawn.subscribe(({ entity }) => {
  system.runTimeout(() => {
    assignNameTag(entity);
    broadcastMessage(entity);
  }, 2);
});
