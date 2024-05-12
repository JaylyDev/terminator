// Last Updated: v1.21.0.24-preview

export enum DeathAttackMessage {
  /** %1$s was squashed by a falling anvil */
  anvil = "death.attack.anvil",
  /** %1$s was shot by %2$s */
  arrow = "death.attack.arrow",
  /** %1$s was shot by %2$s using %3$s */
  arrowItem = "death.attack.arrow.item",
  /** %1$s was sniped by %2$s */
  bullet = "death.attack.bullet",
  /** %1$s was pricked to death */
  cactus = "death.attack.cactus",
  /** %1$s walked into a cactus whilst trying to escape %2$s */
  cactusPlayer = "death.attack.cactus.player",
  /** %1$s drowned */
  drown = "death.attack.drown",
  /** %1$s drowned whilst trying to escape %2$s */
  drownPlayer = "death.attack.drown.player",
  /** %1$s blew up */
  explosion = "death.attack.explosion",
  /** %1$s was killed by [Intentional Game Design] */
  explosionByBed = "death.attack.explosion.by.bed",
  /** %1$s was blown up by %2$s */
  explosionPlayer = "death.attack.explosion.player",
  /** %1$s hit the ground too hard */
  fall = "death.attack.fall",
  /** %1$s was squashed by a falling block */
  fallingBlock = "death.attack.fallingBlock",
  /** %1$s was fireballed by %2$s */
  fireball = "death.attack.fireball",
  /** %1$s was fireballed by %2$s using %3$s */
  fireballItem = "death.attack.fireball.item",
  /** %1$s went off with a bang */
  fireworks = "death.attack.fireworks",
  /** %1$s experienced kinetic energy */
  flyIntoWall = "death.attack.flyIntoWall",
  /** %1$s died */
  generic = "death.attack.generic",
  /** %1$s was killed by %2$s using magic */
  indirectMagic = "death.attack.indirectMagic",
  /** %1$s was killed by %2$s using %3$s */
  indirectMagicItem = "death.attack.indirectMagic.item",
  /** %1$s went up in flames */
  inFire = "death.attack.inFire",
  /** %1$s walked into fire whilst fighting %2$s */
  inFirePlayer = "death.attack.inFire.player",
  /** %1$s suffocated in a wall */
  inWall = "death.attack.inWall",
  /** %1$s tried to swim in lava */
  lava = "death.attack.lava",
  /** %1$s tried to swim in lava to escape %2$s */
  lavaPlayer = "death.attack.lava.player",
  /** %1$s was struck by lightning */
  lightningBolt = "death.attack.lightningBolt",
  /** %1$s was killed by magic */
  magic = "death.attack.magic",
  /** %1$s discovered the floor was lava */
  magma = "death.attack.magma",
  /** %1$s walked on danger zone due to %2$s */
  magmaPlayer = "death.attack.magma.player",
  /** %1$s was slain by %2$s */
  mob = "death.attack.mob",
  /** %1$s was slain by %2$s using %3$s */
  mobItem = "death.attack.mob.item",
  /** %1$s burned to death */
  onFire = "death.attack.onFire",
  /** %1$s was burnt to a crisp whilst fighting %2$s */
  onFirePlayer = "death.attack.onFire.player",
  /** %1$s fell out of the world */
  outOfWorld = "death.attack.outOfWorld",
  /** %1$s was slain by %2$s */
  player = "death.attack.player",
  /** %1$s was slain by %2$s using %3$s */
  playerItem = "death.attack.player.item",
  /** %1$s was spitballed by %2$s */
  spit = "death.attack.spit",
  /** %1$s starved to death */
  starve = "death.attack.starve",
  /** %1$s was poked to death by a sweet berry bush */
  sweetBerry = "death.attack.sweetBerry",
  /** %1$s was killed trying to hurt %2$s */
  thorns = "death.attack.thorns",
  /** %1$s was pummeled by %2$s */
  thrown = "death.attack.thrown",
  /** %1$s was pummeled by %2$s using %3$s */
  thrownItem = "death.attack.thrown.item",
  /** %1$s was impaled to death by %2$s */
  trident = "death.attack.trident",
  /** %1$s withered away */
  wither = "death.attack.wither",
  /** %1$s froze to death */
  freeze = "death.attack.freeze",
  /** %1$s was obliterated by a sonically-charged shriek */
  sonicBoom = "death.attack.sonicBoom",
  /** %1$s was obliterated by a sonically-charged shriek whilst trying to escape %2$s */
  sonicBoomPlayer = "death.attack.sonicBoom.player",
  /** %1$s was skewered by a falling stalactite */
  stalactite = "death.attack.stalactite",
  /** %1$s was impaled on a stalagmite */
  stalagmite = "death.attack.stalagmite",
}

export enum DeathFellMessage {
  /** %1$s fell from a high place */
  accidentGeneric = "death.fell.accident.generic",
  /** %1$s fell off a ladder */
  accidentLadder = "death.fell.accident.ladder",
  /** %1$s fell off some vines */
  accidentVines = "death.fell.accident.vines",
  /** %1$s fell out of the water */
  accidentWater = "death.fell.accident.water",
  /** %1$s was doomed to fall by %2$s */
  assist = "death.fell.assist",
  /** %1$s was doomed to fall by %2$s using %3$s */
  assistItem = "death.fell.assist.item",
  /** %1$s fell too far and was finished by %2$s */
  finish = "death.fell.finish",
  /** %1$s fell too far and was finished by %2$s using %3$s */
  finishItem = "death.fell.finish.item",
  /** %1$s was doomed to fall */
  killer = "death.fell.killer",
}
