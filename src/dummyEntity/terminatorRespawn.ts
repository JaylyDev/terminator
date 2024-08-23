import { Vector3Utils } from "@minecraft/math";
import {
  Dimension,
  Entity,
  EntityDieAfterEvent,
  ExplosionOptions,
  RawMessage,
  StructureAnimationMode,
  system,
  TicksPerSecond,
  Vector3,
  WeatherType,
  world,
} from "@minecraft/server";
import { getDeathMessage } from "../terminator-death/deathMessage";
import { TerminatorEntity, TerminatorVariant } from "../terminator/terminator";
import { UnbreakableBlocks } from "../config";

const overworld = world.getDimension("overworld");
const EventDuration = {
  SpellEffectStage: 6 * TicksPerSecond,
  WeatherSetupStage: 3 * TicksPerSecond,
  ExecuteStage1: 3 * TicksPerSecond,
  ExecuteStage2: 3 * TicksPerSecond,
  ExecuteStage3: 3 * TicksPerSecond,
  ExecuteStage4: 3 * TicksPerSecond,
  ExecuteStage5: 3 * TicksPerSecond,
  ExecuteStage6: 3 * TicksPerSecond,
};
const LifeTime = {
  SpellEffectStage: 0,
  WeatherSetupStage: EventDuration.SpellEffectStage,
  ExecuteStage1:
    EventDuration.SpellEffectStage + EventDuration.WeatherSetupStage,
  ExecuteStage2:
    EventDuration.SpellEffectStage +
    EventDuration.WeatherSetupStage +
    EventDuration.ExecuteStage1,
  ExecuteStage3:
    EventDuration.SpellEffectStage +
    EventDuration.WeatherSetupStage +
    EventDuration.ExecuteStage1 +
    EventDuration.ExecuteStage2,
  ExecuteStage4:
    EventDuration.SpellEffectStage +
    EventDuration.WeatherSetupStage +
    EventDuration.ExecuteStage1 +
    EventDuration.ExecuteStage2 +
    EventDuration.ExecuteStage3,
  ExecuteStage5:
    EventDuration.SpellEffectStage +
    EventDuration.WeatherSetupStage +
    EventDuration.ExecuteStage1 +
    EventDuration.ExecuteStage2 +
    EventDuration.ExecuteStage3 +
    EventDuration.ExecuteStage4,
  ExecuteStage6:
    EventDuration.SpellEffectStage +
    EventDuration.WeatherSetupStage +
    EventDuration.ExecuteStage1 +
    EventDuration.ExecuteStage2 +
    EventDuration.ExecuteStage3 +
    EventDuration.ExecuteStage4 +
    EventDuration.ExecuteStage5,
  SummonStage:
    EventDuration.SpellEffectStage +
    EventDuration.WeatherSetupStage +
    EventDuration.ExecuteStage1 +
    EventDuration.ExecuteStage2 +
    EventDuration.ExecuteStage3 +
    EventDuration.ExecuteStage4 +
    EventDuration.ExecuteStage5 +
    EventDuration.ExecuteStage6,
};

export class TerminatorRespawnEventController {
  readonly dummyEntity: Entity;

  public get deathMessage(): RawMessage {
    const messageString = this.dummyEntity.getDynamicProperty(
      "terminator:death_message"
    );
    if (typeof messageString !== "string")
      throw new TypeError("Terminator death message is not a string.");

    const message: RawMessage = JSON.parse(messageString);
    return {
      rawtext: [message, { translate: "message.entity.respawn.generic" }],
    };
  }

  public get nameTag(): string {
    const nameTag = this.dummyEntity.getDynamicProperty(
      "terminator:spawn_nameTag"
    );
    if (typeof nameTag !== "string")
      throw new TypeError("Terminator name tag is not a string.");
    return nameTag;
  }

  public get variant(): number {
    const variant = this.dummyEntity.getDynamicProperty("dummy:spawn_variant");
    if (typeof variant !== "number")
      throw new TypeError("Invalid variant value.");
    return variant;
  }

  public get dummyLifeTime(): number {
    const value = this.dummyEntity.getDynamicProperty("dummy:life_time");
    if (typeof value !== "number") return 0;
    else return value;
  }

  constructor(dummyEntity: Entity) {
    this.dummyEntity = dummyEntity;
  }

  // Events
  triggerSpellEffects() {
    for (let i = 0; i < 4; i++) {
      this.dummyEntity.dimension.spawnParticle(
        "minecraft:evoker_spell",
        this.dummyEntity.location
      );
    }
  }

  setupWeather() {
    this.dummyEntity.runCommand("/fog @a push minecraft:fog_hell respawn_lore");
    this.dummyEntity.dimension.setWeather(
      WeatherType.Thunder,
      LifeTime.SummonStage - LifeTime.WeatherSetupStage
    );
    world.gameRules.doDayLightCycle = false;
  }

  triggerDramaticEffect() {
    this.dummyEntity.runCommand("/summon minecraft:lightning_bolt");
    this.dummyEntity.triggerEvent("dummy:force_roar");
  }

  placeStructure() {
    world.structureManager.place(
      "mystructure:robot_respawn_cage",
      this.dummyEntity.dimension,
      Vector3Utils.add(this.dummyEntity.location, {
        x: -2,
        y: -1,
        z: -2,
      }),
      {
        animationMode: StructureAnimationMode.Blocks,
        animationSeconds: 1,
      }
    );
  }

  removeStructure(source: Entity) {
    // Size: [5, 5, 5]
    // Fill blocks
    const structurePos: Vector3 = Vector3Utils.add(this.dummyEntity.location, {
      x: -2,
      y: -1,
      z: -2,
    });
    const options: ExplosionOptions = {
      allowUnderwater: true,
      breaksBlocks: true,
      causesFire: true,
      source,
    };
    this.dummyEntity.dimension.createExplosion(
      this.dummyEntity.location,
      1000,
      options
    );
    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        for (let z = 0; z < 5; z++) {
          try {
            const block = this.dummyEntity.dimension.getBlock(
              Vector3Utils.add(structurePos, { x, y, z })
            );
            if (!block) continue;
            else if (UnbreakableBlocks.includes(block.typeId)) {
              block.setType("minecraft:air");
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
    }

    // Create explosion
    system.run(() =>
      this.dummyEntity.dimension.createExplosion(
        this.dummyEntity.location,
        10,
        options
      )
    );
  }

  triggerEvent() {
    this.dummyEntity.setDynamicProperty("dummy:life_time", 0);
  }

  // Tick end
  incrementLifeTime() {
    const value = this.dummyEntity.getDynamicProperty("dummy:life_time");
    if (typeof value !== "number")
      this.dummyEntity.setDynamicProperty("dummy:life_time", 1);
    else this.dummyEntity.setDynamicProperty("dummy:life_time", 1 + value);
  }
  static initialize(
    deathEvent: EntityDieAfterEvent,
    variant: number,
    location: Vector3,
    dimension: Dimension,
    nameTag: string
  ) {
    const dummyEntity = dimension.spawnEntity("entity:dummy", location);
    const controller = new this(dummyEntity);
    const deathMessage = getDeathMessage(
      deathEvent.damageSource,
      deathEvent.deadEntity
    );

    dummyEntity.runCommand("fog @a remove respawn_lore");
    dummyEntity.setDynamicProperty("dummy:spawn_location", location);
    dummyEntity.setDynamicProperty("dummy:spawn_dimension", dimension.id);
    dummyEntity.setDynamicProperty("dummy:spawn_variant", variant);
    dummyEntity.setDynamicProperty("terminator:spawn_nameTag", nameTag);
    dummyEntity.setDynamicProperty(
      "terminator:death_message",
      JSON.stringify(deathMessage)
    );

    return controller;
  }
}

system.runInterval(() => {
  for (const dummyEntity of overworld.getEntities({ type: "entity:dummy" })) {
    const lifeTime = dummyEntity.getDynamicProperty("dummy:life_time");

    if (typeof lifeTime !== "number") continue;
    else if (lifeTime > LifeTime.SummonStage) {
      system.run(() => {
        if (dummyEntity.isValid()) dummyEntity.remove();
      });
      continue;
    }

    const controller = new TerminatorRespawnEventController(dummyEntity);

    if (lifeTime === LifeTime.SpellEffectStage) {
      controller.triggerSpellEffects();
    } else if (lifeTime === LifeTime.WeatherSetupStage) {
      controller.setupWeather();
    } else if (lifeTime === LifeTime.ExecuteStage1) {
      controller.triggerDramaticEffect();
      controller.placeStructure();
    } else if (lifeTime === LifeTime.ExecuteStage2) {
      controller.triggerDramaticEffect();
    } else if (lifeTime === LifeTime.ExecuteStage3) {
      controller.triggerDramaticEffect();
    } else if (lifeTime === LifeTime.ExecuteStage4) {
      controller.triggerDramaticEffect();
    } else if (lifeTime === LifeTime.ExecuteStage5) {
      controller.triggerDramaticEffect();
    } else if (lifeTime === LifeTime.ExecuteStage6) {
      controller.triggerDramaticEffect();
    } else if (lifeTime === LifeTime.SummonStage) {
      controller.triggerDramaticEffect();

      world.sendMessage(controller.deathMessage);
      dummyEntity.runCommandAsync("/fog @a remove respawn_lore");

      // Spawn terminator
      const terminator = new TerminatorEntity(
        dummyEntity.dimension.spawnEntity(
          "entity:terminator",
          dummyEntity.location
        )
      );
      controller.removeStructure(terminator.getEntity());

      terminator.nameTag = controller.nameTag;
      terminator.setDynamicProperty("broadcast_join_message", false);

      if (terminator.isSteveVariant())
        terminator.triggerEvent("terminator:disable_respawn_event_steve");
      else if (terminator.isAlexVariant())
        terminator.triggerEvent("terminator:disable_respawn_event_alex");
      else if (controller.variant === TerminatorVariant.Custom)
        terminator.triggerEvent("terminator:disable_respawn_event_custom");
      else if (controller.variant === TerminatorVariant.CustomSlim)
        terminator.triggerEvent("terminator:disable_respawn_event_custom_slim");

      terminator.jump();
      system.run(() => {
        controller.triggerDramaticEffect();
        terminator.dimension.spawnEntity(
          "minecraft:wind_charge_projectile",
          terminator.location
        );
      });
    }
    controller.incrementLifeTime();
  }
});
