import { Vector3Utils } from "@minecraft/math";
import {
  Dimension,
  Entity,
  EntityQueryOptions,
  GameMode,
  StructureAnimationMode,
  system,
  TicksPerSecond,
  world,
} from "@minecraft/server";
import {
  MinecraftBlockTypes,
  MinecraftEffectTypes,
} from "@minecraft/vanilla-data";
import { debugEnabled } from "../config";

const overworld = world.getDimension("overworld");
const nether = world.getDimension("nether");
const playerQueryOptions: EntityQueryOptions = {
  excludeGameModes: [GameMode.creative, GameMode.spectator],
  minDistance: 0.1,
};
const terminatorOptions: EntityQueryOptions = {
  type: "entity:terminator",
  minDistance: 0.1,
};

export function buildNetherPortal(dimension: Dimension, terminator: Entity) {
  const { location } = terminator;
  const structure = world.structureManager.get("mystructure:nether_portal");
  if (!structure) {
    throw new Error('Structure "mystructure:nether_portal" is not found.');
  }

  const placeLocation = Vector3Utils.add(location, { x: 0, y: -1, z: -1 });

  world.structureManager.place(structure, dimension, placeLocation, {
    animationMode: StructureAnimationMode.Blocks,
    animationSeconds: 2.0,
  });

  system.runTimeout(() => {
    const block = dimension.getBlock(location);
    if (block && block.typeId !== MinecraftBlockTypes.Portal) {
      block.setType(MinecraftBlockTypes.Fire);
      terminator.removeTag("building_portal");
      if (debugEnabled) {
        world.sendMessage(
          "Nether portal built at " +
            Vector3Utils.toString(location) +
            " at " +
            dimension.id
        );
      }
    }
  }, 50);
}

system.runInterval(() => {
  const overworldCount = overworld.getPlayers(playerQueryOptions).length;
  const netherCount = nether.getPlayers(playerQueryOptions).length;

  if (overworldCount === 0 && netherCount > 0) {
    for (const terminator of overworld.getEntities(terminatorOptions)) {
      if (terminator.hasTag("building_portal") || terminator.isInWater) {
        continue;
      }
      terminator.addTag("building_portal");
      terminator.addEffect(MinecraftEffectTypes.Slowness, 3 * TicksPerSecond, {
        amplifier: 200,
        showParticles: false,
      });
      buildNetherPortal(overworld, terminator);
    }
  } else if (overworldCount > 0 && netherCount === 0) {
    for (const terminator of nether.getEntities(terminatorOptions)) {
      if (terminator.hasTag("building_portal") || terminator.isInWater) {
        continue;
      }
      terminator.addTag("building_portal");
      terminator.addEffect(MinecraftEffectTypes.Slowness, 3 * TicksPerSecond, {
        amplifier: 200,
        showParticles: false,
      });
      buildNetherPortal(nether, terminator);
    }
  }
}, TicksPerSecond);

system.afterEvents.scriptEventReceive.subscribe((event) => {
  if (
    event.id === "jayly:build_portal" &&
    event.sourceEntity?.typeId === "entity:terminator"
  ) {
    event.sourceEntity.addEffect(
      MinecraftEffectTypes.Slowness,
      3 * TicksPerSecond,
      {
        amplifier: 200,
        showParticles: false,
      }
    );
    buildNetherPortal(event.sourceEntity.dimension, event.sourceEntity);
  }
});
