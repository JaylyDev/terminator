import { RawText, system, world } from "@minecraft/server";
import { terminatorSpawn } from "../terminator-events/onTerminatorSpawn";
import { MinecraftColor } from "../minecraft-color";

// naming tag
terminatorSpawn.subscribe(({ entity }) => {
  system.runTimeout(() => {
    const nameTag = entity.nameTag || "Terminator";
    entity.nameTag = nameTag;
    const terminators = entity.dimension.getEntities({
      type: "entity:terminator",
    });
    // Check if existing terminator has the same nameTag, if there one set the entity nameTag to "[name] (1)"
    // If there's more than one with the same name, increment the index
    if (terminators.some((entity) => entity.nameTag === nameTag)) {
      const nameTagRegex = new RegExp(`^${nameTag} \\(\\d+\\)$`);
      const terminatorsWithSameName = terminators.filter(
        (terminator) =>
          (terminator.nameTag === nameTag && terminator !== entity) ||
          nameTagRegex.test(terminator.nameTag)
      );
      if (terminatorsWithSameName.length > 0)
        entity.nameTag = `${nameTag} (${terminatorsWithSameName.length})`;
    }

    // broadcast to world
    const hasRespawn = entity.hasTag("has_respawn");
    const broadcastMessage = entity.getDynamicProperty(
      "broadcast_join_message"
    );
    if (broadcastMessage === false) return;
    if (!hasRespawn) {
      const rawtext: RawText = {
        rawtext: [
          { text: MinecraftColor.yellow },
          { translate: "multiplayer.player.joined", with: [entity.nameTag] },
        ],
      };
      world.sendMessage(rawtext);
    } else {
      const rawtext: RawText = {
        rawtext: [
          { translate: "death.attack.generic", with: [entity.nameTag] },
          { translate: "message.entity.respawn.generic" },
        ],
      };
      world.sendMessage(rawtext);
    }
    world.playSound("mob.terminator.spawn", entity.location);
  }, 2);
});
