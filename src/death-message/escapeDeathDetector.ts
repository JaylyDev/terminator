import { Entity, TicksPerSecond, system, world } from "@minecraft/server";

// To send death messages when the player is hurt by a player or mob then die.
world.afterEvents.entityHurt.subscribe(({ damageSource, hurtEntity }) => {
  const { damagingEntity } = damageSource;
  if (!damagingEntity) return;
  hurtEntity.setDynamicProperty(
    "terminator:damaging_entity",
    damagingEntity.id
  );
  // Store when was entity hurt
  hurtEntity.setDynamicProperty("terminator:entity_hurt", system.currentTick);
});

/**
 * Test if entity died when attempting to escape death.
 * If true it will return an Entity instance, otherwise undefined (representing false).
 */
export function entityTriedEscapeDeathFrom(entity: Entity): Entity | undefined {
  const damagingEntityId = entity.getDynamicProperty(
    "terminator:damaging_entity"
  ) as string;
  const hurtByPlayerOrMob = entity.getDynamicProperty(
    "terminator:entity_hurt"
  ) as number;
  if (!damagingEntityId || !hurtByPlayerOrMob) return;

  const huntEntity = world.getEntity(damagingEntityId);
  if (!huntEntity) return;

  const escapeDeathTick = system.currentTick - hurtByPlayerOrMob;
  if (escapeDeathTick < TicksPerSecond * 5) return huntEntity;
}
