import { Entity, ItemStack, RawText } from "@minecraft/server";
import { DeathAttackMessage } from "./languageKeys";

// death.attack.anvil=%1$s was squashed by a falling anvil
// death.attack.arrow=%1$s was shot by %2$s
// death.attack.arrow.item=%1$s was shot by %2$s using %3$s
// death.attack.bullet=%1$s was sniped by %2$s
// death.attack.cactus=%1$s was pricked to death
// death.attack.cactus.player=%1$s walked into a cactus whilst trying to escape %2$s
// death.attack.drown=%1$s drowned
// death.attack.drown.player=%1$s drowned whilst trying to escape %2$s
// death.attack.explosion=%1$s blew up
// death.attack.explosion.by.bed=%1$s was killed by [Intentional Game Design]
// death.attack.explosion.player=%1$s was blown up by %2$s
// death.attack.fall=%1$s hit the ground too hard
// death.attack.fallingBlock=%1$s was squashed by a falling block
// death.attack.fireball=%1$s was fireballed by %2$s
// death.attack.fireball.item=%1$s was fireballed by %2$s using %3$s
// death.attack.fireworks=%1$s went off with a bang
// death.attack.flyIntoWall=%1$s experienced kinetic energy
// death.attack.generic=%1$s died
// death.attack.indirectMagic=%1$s was killed by %2$s using magic
// death.attack.indirectMagic.item=%1$s was killed by %2$s using %3$s
// death.attack.inFire=%1$s went up in flames
// death.attack.inFire.player=%1$s walked into fire whilst fighting %2$s
// death.attack.inWall=%1$s suffocated in a wall
// death.attack.lava=%1$s tried to swim in lava
// death.attack.lava.player=%1$s tried to swim in lava to escape %2$s
// death.attack.lightningBolt=%1$s was struck by lightning
// death.attack.magic=%1$s was killed by magic
// death.attack.magma=%1$s discovered the floor was lava
// death.attack.magma.player=%1$s walked on danger zone due to %2$s
// death.attack.mob=%1$s was slain by %2$s
// death.attack.mob.item=%1$s was slain by %2$s using %3$s
// death.attack.onFire=%1$s burned to death
// death.attack.onFire.player=%1$s was burnt to a crisp whilst fighting %2$s
// death.attack.outOfWorld=%1$s fell out of the world
// death.attack.player=%1$s was slain by %2$s
// death.attack.player.item=%1$s was slain by %2$s using %3$s
// death.attack.spit=%1$s was spitballed by %2$s
// death.attack.starve=%1$s starved to death
// death.attack.sweetBerry=%1$s was poked to death by a sweet berry bush
// death.attack.thorns=%1$s was killed trying to hurt %2$s
// death.attack.thrown=%1$s was pummeled by %2$s
// death.attack.thrown.item=%1$s was pummeled by %2$s using %3$s
// death.attack.trident=%1$s was impaled to death by %2$s
// death.attack.wither=%1$s withered away
// death.attack.freeze=%1$s froze to death
// death.attack.sonicBoom=%1$s was obliterated by a sonically-charged shriek
// death.attack.sonicBoom.player=%1$s was obliterated by a sonically-charged shriek whilst trying to escape %2$s
// death.attack.stalactite=%1$s was skewered by a falling stalactite
// death.attack.stalagmite=%1$s was impaled on a stalagmite
// death.fell.accident.generic=%1$s fell from a high place
// death.fell.accident.ladder=%1$s fell off a ladder
// death.fell.accident.vines=%1$s fell off some vines
// death.fell.accident.water=%1$s fell out of the water
// death.fell.assist=%1$s was doomed to fall by %2$s
// death.fell.assist.item=%1$s was doomed to fall by %2$s using %3$s
// death.fell.finish=%1$s fell too far and was finished by %2$s
// death.fell.finish.item=%1$s fell too far and was finished by %2$s using %3$s
// death.fell.killer=%1$s was doomed to fall

export class DeathMessageRawText {
  constructor(
    public deadEntity: Entity,
    public damagingEntity: Entity,
    public damagingItem: ItemStack
  ) {}
  attackAnvil(): RawText {
    return {
      rawtext: [
        { translate: DeathAttackMessage.anvil, with: [this.deadEntity.typeId] },
      ],
    };
  }
}
