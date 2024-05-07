import { EntityDamageCause, world } from "@minecraft/server";
import { terminatorDie } from "../terminator-events/onTerminatorDie";

// Sends a death message to the world when a terminator dies
terminatorDie.subscribe(({ damageSource, deadEntity }) => {
  const damageCause = damageSource.cause;
  damageSource.damagingEntity;
  switch (damageCause) {
    case EntityDamageCause.anvil:
      break;
    case EntityDamageCause.blockExplosion:
      break;
    case EntityDamageCause.campfire:
      break;
    case EntityDamageCause.charging:
      break;
    case EntityDamageCause.contact:
      break;
    case EntityDamageCause.drowning:
      break;
    case EntityDamageCause.entityAttack:
      break;
    case EntityDamageCause.entityExplosion:
      break;
    case EntityDamageCause.fall:
      break;
    case EntityDamageCause.fallingBlock:
      break;
    case EntityDamageCause.fire:
      break;
    case EntityDamageCause.fireTick:
      break;
    case EntityDamageCause.fireworks:
      break;
    case EntityDamageCause.flyIntoWall:
      break;
    case EntityDamageCause.freezing:
      break;
    case EntityDamageCause.lava:
      break;
    case EntityDamageCause.lightning:
      break;
    case EntityDamageCause.magic:
      break;
    case EntityDamageCause.magma:
      break;
    case EntityDamageCause.none:
      break;
    case EntityDamageCause.override:
      break;
    case EntityDamageCause.piston:
      break;
    case EntityDamageCause.projectile:
      break;
    case EntityDamageCause.ramAttack:
      break;
    case EntityDamageCause.selfDestruct:
      break;
    case EntityDamageCause.sonicBoom:
      break;
    case EntityDamageCause.soulCampfire:
      break;
    case EntityDamageCause.stalactite:
      break;
    case EntityDamageCause.stalagmite:
      break;
    case EntityDamageCause.starve:
      break;
    case EntityDamageCause.suffocation:
      break;
    case EntityDamageCause.suicide:
      break;
    case EntityDamageCause.temperature:
      break;
    case EntityDamageCause.thorns:
      break;
    case EntityDamageCause.void:
      break;
    case EntityDamageCause.wither:
      break;

    default:
      break;
  }
});
