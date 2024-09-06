import { EntityDamageCause, world } from "@minecraft/server";
import { terminatorDie } from "../terminator-events/onTerminatorDie";
import { sendDeathMessageCallback } from "./deathMessage";
import { MinecraftColor } from "../minecraft-color";
import { dropEntityInventory } from "./dropInventory";
import { TerminatorRespawnEventController } from "../dummyEntity/terminatorRespawn";
import { TerminatorEntity, TerminatorVariant } from "../terminator/terminator";

terminatorDie.subscribe((event) => {
  const { damageSource } = event;
  const { cause } = damageSource;
  const deadEntity = new TerminatorEntity(event.deadEntity);
  const allowRespawn = !deadEntity.hasTag("terminatordeathrequest");
  const triggerRespawnEvent = !deadEntity.hasTag("disablerespawnevent");
  const variantValue = deadEntity.getVariant();

  dropEntityInventory(deadEntity);

  // First Death
  if (allowRespawn && triggerRespawnEvent && cause !== EntityDamageCause.void) {
    const controller = TerminatorRespawnEventController.initialize(
      event,
      variantValue,
      deadEntity.location,
      deadEntity.dimension,
      deadEntity.nameTag
    );

    controller.triggerEvent();
  }
  // Second Death
  else if (
    allowRespawn &&
    !triggerRespawnEvent &&
    cause !== EntityDamageCause.void
  ) {
    sendDeathMessageCallback(event);
    const terminator = deadEntity.dimension.spawnEntity(
      "entity:terminator",
      deadEntity.location
    );
    terminator.nameTag = deadEntity.nameTag;
    terminator.setDynamicProperty("broadcast_join_message", false);

    terminator.triggerEvent("terminator:disable_respawn");
    if (deadEntity.isSteveVariant())
      terminator.triggerEvent("terminator:switch_skin_to_steve");
    else if (deadEntity.isAlexVariant())
      terminator.triggerEvent("terminator:switch_skin_to_alex");
    else if (variantValue === TerminatorVariant.Custom)
      terminator.triggerEvent("terminator:enable_custom_skin");
    else if (variantValue === TerminatorVariant.CustomSlim)
      terminator.triggerEvent("terminator:enable_customSlim_skin");
  }
  // Third Death
  else {
    sendDeathMessageCallback(event);
    world.sendMessage({
      rawtext: [
        { text: MinecraftColor.yellow },
        { translate: "multiplayer.player.left", with: [deadEntity.nameTag] },
      ],
    });
  }
});
