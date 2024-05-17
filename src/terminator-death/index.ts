import {
  EntityDamageCause,
  EntityVariantComponent,
  world,
} from "@minecraft/server";
import { terminatorDie } from "../terminator-events/onTerminatorDie";
import { sendDeathMessageCallback } from "./deathMessage";
import { MinecraftColor } from "../minecraft-color";

enum TerminatorVariant {
  SteveDefault = 0,
  AlexDefault = 1,
  SteveChristmas = 2,
  AlexChristmas = 3,
  Custom = 4,
  CustomSlim = 5,
}

terminatorDie.subscribe((event) => {
  const { damageSource, deadEntity } = event;
  const { cause } = damageSource;
  const allowRespawn = !deadEntity.hasTag("terminatordeathrequest");
  const triggerRespawnEvent = !deadEntity.hasTag("disablerespawnevent");
  const variant = deadEntity.getComponent(
    EntityVariantComponent.componentId
  ) as EntityVariantComponent;
  const isSteveVariant =
    variant.value === TerminatorVariant.SteveDefault ||
    variant.value === TerminatorVariant.SteveChristmas;
  const isAlexVariant =
    variant.value === TerminatorVariant.AlexDefault ||
    variant.value === TerminatorVariant.AlexChristmas;
  const isCustomVariant =
    variant.value === TerminatorVariant.Custom ||
    variant.value === TerminatorVariant.CustomSlim;

  // First Death
  if (allowRespawn && triggerRespawnEvent && cause !== EntityDamageCause.void) {
    const dummyEntity = deadEntity.dimension.spawnEntity(
      "entity:dummy",
      deadEntity.location
    );
    dummyEntity.runCommand("fog @a remove respawn_lore");
    if (isSteveVariant)
      dummyEntity.triggerEvent("dummy:request_spawning_steve");
    else if (isAlexVariant)
      dummyEntity.triggerEvent("dummy:request_spawning_alex");
    else if (isCustomVariant)
      dummyEntity.triggerEvent("dummy:request_spawning_custom");
  }
  // Second Death
  else if (
    allowRespawn &&
    !triggerRespawnEvent &&
    cause !== EntityDamageCause.void
  ) {
    const terminator = deadEntity.dimension.spawnEntity(
      "entity:terminator",
      deadEntity.location
    );
    if (isSteveVariant)
      terminator.triggerEvent("terminator:disable_respawn_event_steve");
    else if (isAlexVariant)
      terminator.triggerEvent("terminator:disable_respawn_event_alex");
    else if (isCustomVariant)
      terminator.triggerEvent("terminator:disable_respawn_event_custom");
  }
  // Third Death
  else {
    sendDeathMessageCallback(event);
    world.sendMessage({
      rawtext: [
        { text: MinecraftColor.yellow },
        { translate: "multiplayer.player.left" },
        { with: [deadEntity.nameTag] },
      ],
    });
  }
});
