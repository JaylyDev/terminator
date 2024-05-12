import {
  Entity,
  EntityDamageCause,
  EntityDieAfterEvent,
  Player,
  world,
} from "@minecraft/server";
import { DeathMessageRawText } from "../deathMessage/rawTextGenerator";
import {
  MinecraftBlockTypes,
  MinecraftEntityTypes,
} from "@minecraft/vanilla-data";
import { debugEnabled } from "../config";
import { getDamagingBlock } from "../deathMessage/damageBlock";
import { entityTriedEscapeDeathFrom } from "../deathMessage/escapeDeathDetector";
import { terminatorDie } from "../terminator-events/onTerminatorDie";

const sendDeathMessageFall = (
  rawTextGenerator: DeathMessageRawText,
  entity: Entity
) => {
  const velocity = entity.getVelocity();
  if (velocity.y > -0.3) world.sendMessage(rawTextGenerator.attackFall());
  else world.sendMessage(rawTextGenerator.fellAccidentGeneric());
};

const sendDeathMessageContact = (
  rawTextGenerator: DeathMessageRawText,
  deadEntity: Entity,
  damagingEntity: Entity | undefined
) => {
  const block = getDamagingBlock(deadEntity);
  const huntEntity = entityTriedEscapeDeathFrom(deadEntity);

  if (damagingEntity) world.sendMessage(rawTextGenerator.attackMob());
  else if (block === MinecraftBlockTypes.Cactus && huntEntity)
    world.sendMessage(rawTextGenerator.attackCactusPlayer());
  else if (block === MinecraftBlockTypes.Cactus)
    world.sendMessage(rawTextGenerator.attackCactus());
  else if (block === MinecraftBlockTypes.SweetBerryBush)
    world.sendMessage(rawTextGenerator.attackSweetBerry());
  else world.sendMessage(rawTextGenerator.attackGeneric());
};
/**
 * Sends a death message to the world when a terminator dies
 */
const sendDeathMessageCallback = ({
  damageSource,
  deadEntity,
}: EntityDieAfterEvent) => {
  const { cause, damagingEntity } = damageSource;
  const rawTextGenerator = new DeathMessageRawText(deadEntity, damagingEntity);
  // debug
  if (debugEnabled) {
    console.warn(
      `DeadEntity: ${deadEntity.typeId} | DamagingEntity: ${damagingEntity?.typeId} | DamagingProjectile: ${damageSource.damagingProjectile?.typeId} | Cause: ${cause}`
    );
  }
  // Sends a death message based on the cause of the death
  switch (cause) {
    case EntityDamageCause.anvil:
      world.sendMessage(rawTextGenerator.attackAnvil());
      break;
    case EntityDamageCause.blockExplosion:
      world.sendMessage(rawTextGenerator.attackExplosionByBed());
      break;
    case EntityDamageCause.campfire:
      world.sendMessage(rawTextGenerator.attackInFire());
      break;
    case EntityDamageCause.contact:
      sendDeathMessageContact(rawTextGenerator, deadEntity, damagingEntity);
      break;
    case EntityDamageCause.drowning:
      if (entityTriedEscapeDeathFrom(deadEntity))
        world.sendMessage(rawTextGenerator.attackDrownPlayer());
      else world.sendMessage(rawTextGenerator.attackDrown());
      break;
    case EntityDamageCause.entityAttack:
      if (damagingEntity instanceof Player) {
        if (rawTextGenerator.damagingItem)
          world.sendMessage(rawTextGenerator.attackPlayerItem());
        else world.sendMessage(rawTextGenerator.attackPlayer());
      } else {
        if (rawTextGenerator.damagingItem)
          world.sendMessage(rawTextGenerator.attackMobItem());
        else world.sendMessage(rawTextGenerator.attackMob());
      }
      break;
    case EntityDamageCause.entityExplosion:
      if (damagingEntity)
        world.sendMessage(rawTextGenerator.attackExplosionPlayer());
      else world.sendMessage(rawTextGenerator.attackExplosion());
      break;
    case EntityDamageCause.fall:
      sendDeathMessageFall(rawTextGenerator, deadEntity);
      break;
    case EntityDamageCause.fallingBlock:
      world.sendMessage(rawTextGenerator.attackFallingBlock());
      break;
    case EntityDamageCause.fire:
      world.sendMessage(rawTextGenerator.attackInFire());
      break;
    case EntityDamageCause.fireTick:
      world.sendMessage(rawTextGenerator.attackOnFire());
      break;
    case EntityDamageCause.fireworks:
      world.sendMessage(rawTextGenerator.attackFireworks());
      break;
    case EntityDamageCause.flyIntoWall:
      world.sendMessage(rawTextGenerator.attackFlyIntoWall());
      break;
    case EntityDamageCause.freezing:
      world.sendMessage(rawTextGenerator.attackFreeze());
      break;
    case EntityDamageCause.lava:
      if (entityTriedEscapeDeathFrom(deadEntity))
        world.sendMessage(rawTextGenerator.attackLavaPlayer());
      else world.sendMessage(rawTextGenerator.attackLava());
      break;
    case EntityDamageCause.lightning:
      world.sendMessage(rawTextGenerator.attackLightningBolt());
      break;
    case EntityDamageCause.magic:
      if (damagingEntity && rawTextGenerator.damagingItem)
        world.sendMessage(rawTextGenerator.attackIndirectMagicItem());
      else if (damagingEntity)
        world.sendMessage(rawTextGenerator.attackIndirectMagic());
      else world.sendMessage(rawTextGenerator.attackMagic());
      break;
    case EntityDamageCause.magma:
      world.sendMessage(rawTextGenerator.attackMagma());
      break;
    case EntityDamageCause.projectile:
      // Arrow
      if (damagingEntity.typeId === MinecraftEntityTypes.Arrow) {
        if (rawTextGenerator.damagingItem)
          world.sendMessage(rawTextGenerator.attackArrowItem());
        else world.sendMessage(rawTextGenerator.attackArrow());
      }
      // Fireball
      else if (damagingEntity.typeId === MinecraftEntityTypes.Fireball) {
        if (rawTextGenerator.damagingItem)
          world.sendMessage(rawTextGenerator.attackFireballItem());
        else world.sendMessage(rawTextGenerator.attackFireball());
      }
      // Thrown trident
      else if (damagingEntity.typeId === MinecraftEntityTypes.ThrownTrident)
        world.sendMessage(rawTextGenerator.attackTrident());
      // Any projectiles
      else if (rawTextGenerator.damagingItem)
        world.sendMessage(rawTextGenerator.attackThrownItem());
      else world.sendMessage(rawTextGenerator.attackThrown());
      break;
    case EntityDamageCause.sonicBoom:
      if (entityTriedEscapeDeathFrom(deadEntity))
        world.sendMessage(rawTextGenerator.attackSonicBoomPlayer());
      else world.sendMessage(rawTextGenerator.attackSonicBoom());
      break;
    case EntityDamageCause.soulCampfire:
      world.sendMessage(rawTextGenerator.attackInFire());
      break;
    case EntityDamageCause.stalactite:
      world.sendMessage(rawTextGenerator.attackStalactite());
      break;
    case EntityDamageCause.stalagmite:
      world.sendMessage(rawTextGenerator.attackStalagmite());
      break;
    case EntityDamageCause.starve:
      world.sendMessage(rawTextGenerator.attackStarve());
      break;
    case EntityDamageCause.suffocation:
      world.sendMessage(rawTextGenerator.attackInWall());
      break;
    case EntityDamageCause.thorns:
      world.sendMessage(rawTextGenerator.attackThorns());
      break;
    case EntityDamageCause.void:
      world.sendMessage(rawTextGenerator.attackOutOfWorld());
      break;
    case EntityDamageCause.wither:
      world.sendMessage(rawTextGenerator.attackWither());
      break;
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
      world.sendMessage(rawTextGenerator.attackGeneric());
      break;
  }
};

terminatorDie.subscribe(sendDeathMessageCallback);
