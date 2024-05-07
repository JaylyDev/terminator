import {
  Entity,
  EntityEquippableComponent,
  EntityInventoryComponent,
  EquipmentSlot,
  ItemStack,
  Player,
  RawMessage,
} from "@minecraft/server";
import { DeathAttackMessage, DeathFellMessage } from "./languageKeys";

function rawMessageTranslator(
  deadEntity: Entity,
  damagingEntity?: Entity,
  damagingItem?: ItemStack
): RawMessage {
  const ids: string[] = [
    `entity.${deadEntity.typeId.replace("minecraft:", "")}.name`,
  ];
  if (damagingEntity)
    ids.push(`entity.${damagingEntity.typeId.replace("minecraft:", "")}.name`);
  if (damagingItem)
    ids.push(`item.${damagingItem.typeId.replace("minecraft:", "")}.name`);
  return {
    with: {
      rawtext: ids.map((id) => ({
        translate: id,
      })),
    },
  };
}

export class DeathMessageRawText {
  public damagingItem?: ItemStack;

  constructor(public deadEntity: Entity, public damagingEntity?: Entity) {
    // Get the item damaging entity is holding when killing the entity
    if (damagingEntity instanceof Player) {
      const equippable = damagingEntity.getComponent(
        EntityEquippableComponent.componentId
      ) as EntityEquippableComponent;
      this.damagingItem = equippable.getEquipment(EquipmentSlot.Mainhand);
    } else if (damagingEntity instanceof Entity) {
      const inventory = damagingEntity.getComponent(
        EntityInventoryComponent.componentId
      ) as EntityInventoryComponent;
      this.damagingItem = inventory.container.getItem(0);
    }
  }
  attackAnvil(): RawMessage {
    return {
      translate: DeathAttackMessage.anvil,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackArrow(): RawMessage {
    return {
      translate: DeathAttackMessage.arrow,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackArrowItem(): RawMessage {
    return {
      translate: DeathAttackMessage.arrowItem,
      with: rawMessageTranslator(
        this.deadEntity,
        this.damagingEntity,
        this.damagingItem
      ),
    };
  }
  attackBullet(): RawMessage {
    return {
      translate: DeathAttackMessage.bullet,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackCactus(): RawMessage {
    return {
      translate: DeathAttackMessage.cactus,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackCactusPlayer(): RawMessage {
    return {
      translate: DeathAttackMessage.cactusPlayer,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackDrown(): RawMessage {
    return {
      translate: DeathAttackMessage.drown,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackDrownPlayer(): RawMessage {
    return {
      translate: DeathAttackMessage.drownPlayer,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackExplosion(): RawMessage {
    return {
      translate: DeathAttackMessage.explosion,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackExplosionByBed(): RawMessage {
    return {
      translate: DeathAttackMessage.explosionByBed,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackExplosionPlayer(): RawMessage {
    return {
      translate: DeathAttackMessage.explosionPlayer,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackFall(): RawMessage {
    return {
      translate: DeathAttackMessage.fall,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackFallingBlock(): RawMessage {
    return {
      translate: DeathAttackMessage.fallingBlock,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackFireball(): RawMessage {
    return {
      translate: DeathAttackMessage.fireball,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackFireballItem(): RawMessage {
    return {
      translate: DeathAttackMessage.fireballItem,
      with: rawMessageTranslator(
        this.deadEntity,
        this.damagingEntity,
        this.damagingItem
      ),
    };
  }
  attackFireworks(): RawMessage {
    return {
      translate: DeathAttackMessage.fireworks,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackFlyIntoWall(): RawMessage {
    return {
      translate: DeathAttackMessage.flyIntoWall,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackGeneric(): RawMessage {
    return {
      translate: DeathAttackMessage.generic,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackIndirectMagic(): RawMessage {
    return {
      translate: DeathAttackMessage.indirectMagic,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackIndirectMagicItem(): RawMessage {
    return {
      translate: DeathAttackMessage.indirectMagicItem,
      with: rawMessageTranslator(
        this.deadEntity,
        this.damagingEntity,
        this.damagingItem
      ),
    };
  }
  attackInFire(): RawMessage {
    return {
      translate: DeathAttackMessage.inFire,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackInFirePlayer(): RawMessage {
    return {
      translate: DeathAttackMessage.inFirePlayer,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackInWall(): RawMessage {
    return {
      translate: DeathAttackMessage.inWall,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackLava(): RawMessage {
    return {
      translate: DeathAttackMessage.lava,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackLavaPlayer(): RawMessage {
    return {
      translate: DeathAttackMessage.lavaPlayer,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackLightningBolt(): RawMessage {
    return {
      translate: DeathAttackMessage.lightningBolt,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackMagic(): RawMessage {
    return {
      translate: DeathAttackMessage.magic,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackMagma(): RawMessage {
    return {
      translate: DeathAttackMessage.magma,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackMagmaPlayer(): RawMessage {
    return {
      translate: DeathAttackMessage.magmaPlayer,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackMob(): RawMessage {
    return {
      translate: DeathAttackMessage.mob,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackMobItem(): RawMessage {
    return {
      translate: DeathAttackMessage.mobItem,
      with: rawMessageTranslator(
        this.deadEntity,
        this.damagingEntity,
        this.damagingItem
      ),
    };
  }
  attackOnFire(): RawMessage {
    return {
      translate: DeathAttackMessage.onFire,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackOnFirePlayer(): RawMessage {
    return {
      translate: DeathAttackMessage.onFirePlayer,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackOutOfWorld(): RawMessage {
    return {
      translate: DeathAttackMessage.outOfWorld,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackPlayer(): RawMessage {
    return {
      translate: DeathAttackMessage.player,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackPlayerItem(): RawMessage {
    return {
      translate: DeathAttackMessage.playerItem,
      with: rawMessageTranslator(
        this.deadEntity,
        this.damagingEntity,
        this.damagingItem
      ),
    };
  }
  attackSpit(): RawMessage {
    return {
      translate: DeathAttackMessage.spit,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackStarve(): RawMessage {
    return {
      translate: DeathAttackMessage.starve,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackSweetBerry(): RawMessage {
    return {
      translate: DeathAttackMessage.sweetBerry,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackThorns(): RawMessage {
    return {
      translate: DeathAttackMessage.thorns,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackThrown(): RawMessage {
    return {
      translate: DeathAttackMessage.thrown,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackThrownItem(): RawMessage {
    return {
      translate: DeathAttackMessage.thrownItem,
      with: rawMessageTranslator(
        this.deadEntity,
        this.damagingEntity,
        this.damagingItem
      ),
    };
  }
  attackTrident(): RawMessage {
    return {
      translate: DeathAttackMessage.trident,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackWither(): RawMessage {
    return {
      translate: DeathAttackMessage.wither,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackFreeze(): RawMessage {
    return {
      translate: DeathAttackMessage.freeze,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackSonicBoom(): RawMessage {
    return {
      translate: DeathAttackMessage.sonicBoom,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackSonicBoomPlayer(): RawMessage {
    return {
      translate: DeathAttackMessage.sonicBoomPlayer,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  attackStalactite(): RawMessage {
    return {
      translate: DeathAttackMessage.stalactite,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  attackStalagmite(): RawMessage {
    return {
      translate: DeathAttackMessage.stalagmite,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  fellAccidentGeneric(): RawMessage {
    return {
      translate: DeathFellMessage.accidentGeneric,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  fellAccidentLadder(): RawMessage {
    return {
      translate: DeathFellMessage.accidentLadder,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  fellAccidentVines(): RawMessage {
    return {
      translate: DeathFellMessage.accidentVines,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  fellAccidentWater(): RawMessage {
    return {
      translate: DeathFellMessage.accidentWater,
      with: rawMessageTranslator(this.deadEntity),
    };
  }
  fellAssist(): RawMessage {
    return {
      translate: DeathFellMessage.assist,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  fellAssistItem(): RawMessage {
    return {
      translate: DeathFellMessage.assistItem,
      with: rawMessageTranslator(
        this.deadEntity,
        this.damagingEntity,
        this.damagingItem
      ),
    };
  }
  fellFinish(): RawMessage {
    return {
      translate: DeathFellMessage.finish,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
  fellFinishItem(): RawMessage {
    return {
      translate: DeathFellMessage.finishItem,
      with: rawMessageTranslator(
        this.deadEntity,
        this.damagingEntity,
        this.damagingItem
      ),
    };
  }
  fellKiller(): RawMessage {
    return {
      translate: DeathFellMessage.killer,
      with: rawMessageTranslator(this.deadEntity, this.damagingEntity),
    };
  }
}
