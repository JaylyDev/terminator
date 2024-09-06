import {
  Entity,
  EntityDamageCause,
  EntityDamageSource,
  EntityDieAfterEvent,
  Player,
  RawMessage,
  world,
} from "@minecraft/server";
import {
  MinecraftBlockTypes,
  MinecraftEntityTypes,
} from "@minecraft/vanilla-data";
import { debugEnabled } from "../config";
import { getDamagingBlock } from "../death-message/damageBlock";
import { DeathMessageRawText } from "../death-message/rawTextGenerator";
import { entityTriedEscapeDeathFrom } from "../death-message/escapeDeathDetector";

const getDeathMessageFallMessage = (
  rawTextGenerator: DeathMessageRawText,
  entity: Entity
): RawMessage => {
  const velocity = entity.getVelocity();
  if (velocity.y > -0.3) return rawTextGenerator.attackFall();
  else return rawTextGenerator.fellAccidentGeneric();
};

const getDeathMessageContactMessage = (
  rawTextGenerator: DeathMessageRawText,
  deadEntity: Entity,
  damagingEntity: Entity | undefined
): RawMessage => {
  const block = getDamagingBlock(deadEntity);
  const huntEntity = entityTriedEscapeDeathFrom(deadEntity);

  if (damagingEntity) return rawTextGenerator.attackMob();
  else if (block === MinecraftBlockTypes.Cactus && huntEntity)
    return rawTextGenerator.attackCactusPlayer();
  else if (block === MinecraftBlockTypes.Cactus)
    return rawTextGenerator.attackCactus();
  else if (block === MinecraftBlockTypes.SweetBerryBush)
    return rawTextGenerator.attackSweetBerry();
  else return rawTextGenerator.attackGeneric();
};
/**
 * Sends a death message to the world when a terminator dies
 */
export function sendDeathMessageCallback({
  damageSource,
  deadEntity,
}: EntityDieAfterEvent) {
  const { cause, damagingEntity } = damageSource;
  const message = getDeathMessage(damageSource, deadEntity);
  // debug
  if (debugEnabled) {
    console.log(
      `DeadEntity: ${deadEntity.typeId} | DamagingEntity: ${damagingEntity?.typeId} | DamagingProjectile: ${damageSource.damagingProjectile?.typeId} | Cause: ${cause}`
    );
  }
  world.sendMessage(message);
}

export function getDeathMessage(
  damageSource: EntityDamageSource,
  deadEntity: Entity
): RawMessage {
  const { cause, damagingEntity } = damageSource;
  const rawTextGenerator = new DeathMessageRawText(deadEntity, damagingEntity);

  // Sends a death message based on the cause of the death
  switch (cause) {
    case EntityDamageCause.anvil:
      return rawTextGenerator.attackAnvil();
    case EntityDamageCause.blockExplosion:
      return rawTextGenerator.attackExplosionByBed();
    case EntityDamageCause.campfire:
      return rawTextGenerator.attackInFire();
    case EntityDamageCause.contact:
      return getDeathMessageContactMessage(
        rawTextGenerator,
        deadEntity,
        damagingEntity
      );
    case EntityDamageCause.drowning:
      if (entityTriedEscapeDeathFrom(deadEntity))
        return rawTextGenerator.attackDrownPlayer();
      else return rawTextGenerator.attackDrown();
    case EntityDamageCause.entityAttack:
      if (damagingEntity instanceof Player) {
        if (rawTextGenerator.damagingItem)
          return rawTextGenerator.attackPlayerItem();
        else return rawTextGenerator.attackPlayer();
      } else {
        if (rawTextGenerator.damagingItem)
          return rawTextGenerator.attackMobItem();
        else return rawTextGenerator.attackMob();
      }
    case EntityDamageCause.entityExplosion:
      if (damagingEntity) return rawTextGenerator.attackExplosionPlayer();
      else return rawTextGenerator.attackExplosion();
    case EntityDamageCause.fall:
      return getDeathMessageFallMessage(rawTextGenerator, deadEntity);
    case EntityDamageCause.fallingBlock:
      return rawTextGenerator.attackFallingBlock();
    case EntityDamageCause.fire:
      return rawTextGenerator.attackInFire();
    case EntityDamageCause.fireTick:
      return rawTextGenerator.attackOnFire();
    case EntityDamageCause.fireworks:
      return rawTextGenerator.attackFireworks();
    case EntityDamageCause.flyIntoWall:
      return rawTextGenerator.attackFlyIntoWall();
    case EntityDamageCause.freezing:
      return rawTextGenerator.attackFreeze();
    case EntityDamageCause.lava:
      if (entityTriedEscapeDeathFrom(deadEntity))
        return rawTextGenerator.attackLavaPlayer();
      else return rawTextGenerator.attackLava();
    case EntityDamageCause.lightning:
      return rawTextGenerator.attackLightningBolt();
    case EntityDamageCause.magic:
      if (damagingEntity && rawTextGenerator.damagingItem)
        return rawTextGenerator.attackIndirectMagicItem();
      else if (damagingEntity) return rawTextGenerator.attackIndirectMagic();
      else return rawTextGenerator.attackMagic();
    case EntityDamageCause.magma:
      return rawTextGenerator.attackMagma();
    case EntityDamageCause.projectile:
      // Arrow
      if (damagingEntity?.typeId === MinecraftEntityTypes.Arrow) {
        if (rawTextGenerator.damagingItem)
          return rawTextGenerator.attackArrowItem();
        else return rawTextGenerator.attackArrow();
      }

      // Fireball
      else if (damagingEntity?.typeId === MinecraftEntityTypes.Fireball) {
        if (rawTextGenerator.damagingItem)
          return rawTextGenerator.attackFireballItem();
        else return rawTextGenerator.attackFireball();
      }

      // Thrown trident
      else if (damagingEntity?.typeId === MinecraftEntityTypes.ThrownTrident)
        return rawTextGenerator.attackTrident();
      // Any projectiles
      else if (rawTextGenerator.damagingItem)
        return rawTextGenerator.attackThrownItem();
      else return rawTextGenerator.attackThrown();
    case EntityDamageCause.sonicBoom:
      if (entityTriedEscapeDeathFrom(deadEntity))
        return rawTextGenerator.attackSonicBoomPlayer();
      else return rawTextGenerator.attackSonicBoom();
    case EntityDamageCause.soulCampfire:
      return rawTextGenerator.attackInFire();
    case EntityDamageCause.stalactite:
      return rawTextGenerator.attackStalactite();
    case EntityDamageCause.stalagmite:
      return rawTextGenerator.attackStalagmite();
    case EntityDamageCause.starve:
      return rawTextGenerator.attackStarve();
    case EntityDamageCause.suffocation:
      return rawTextGenerator.attackInWall();
    case EntityDamageCause.thorns:
      return rawTextGenerator.attackThorns();
    case EntityDamageCause.void:
      return rawTextGenerator.attackOutOfWorld();
    case EntityDamageCause.wither:
      return rawTextGenerator.attackWither();
    // Unused death causes
    case EntityDamageCause.charging:
    case EntityDamageCause.none:
    case EntityDamageCause.override:
    case EntityDamageCause.piston:
    case EntityDamageCause.ramAttack:
    case EntityDamageCause.selfDestruct:
    case EntityDamageCause.suicide:
    case EntityDamageCause.temperature:
    default:
      return rawTextGenerator.attackGeneric();
  }
}
