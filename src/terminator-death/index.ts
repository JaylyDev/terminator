import {
  EntityDamageCause,
  EntityVariantComponent,
  world,
} from "@minecraft/server";
import { terminatorDie } from "../terminator-events/onTerminatorDie";
import { sendDeathMessageCallback } from "./deathMessage";
import { MinecraftColor } from "../minecraft-color";
import { dropEntityInventory } from "./dropInventory";
import { TaskType } from "../dummyEntity/dummyEntity";

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

  dropEntityInventory(deadEntity);

  // First Death
  if (allowRespawn && triggerRespawnEvent && cause !== EntityDamageCause.void) {
    const dummyEntity = deadEntity.dimension.spawnEntity(
      "entity:dummy",
      deadEntity.location
    );
    dummyEntity.runCommand("fog @a remove respawn_lore");
    dummyEntity.setDynamicProperty("dummy:spawn_location", deadEntity.location);
    dummyEntity.setDynamicProperty(
      "dummy:spawn_dimension",
      deadEntity.dimension.id
    );
    if (isSteveVariant)
      dummyEntity.setProperty("dummy:task_type", TaskType.SpawnSteve);
    else if (isAlexVariant)
      dummyEntity.setProperty("dummy:task_type", TaskType.SpawnAlex);
    else if (isCustomVariant)
      dummyEntity.setProperty("dummy:task_type", TaskType.SpawnCustom);
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
    terminator.triggerEvent("terminator:disable_respawn");
    if (isSteveVariant)
      terminator.triggerEvent("terminator:switch_skin_to_steve");
    else if (isAlexVariant)
      terminator.triggerEvent("terminator:switch_skin_to_alex");
    else if (variant.value === TerminatorVariant.Custom)
      terminator.triggerEvent("terminator:enable_custom_skin");
    else if (variant.value === TerminatorVariant.CustomSlim)
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
