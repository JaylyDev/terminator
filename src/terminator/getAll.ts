import { EntityQueryOptions, world } from "@minecraft/server";
import { TerminatorEntity } from "./terminator";

const overworld = world.getDimension("overworld");
const nether = world.getDimension("nether");
const theEnd = world.getDimension("the_end");
const options: EntityQueryOptions = {
  type: "entity:terminator",
  minDistance: 0.1,
};

export function* getAllTerminators(): Generator<TerminatorEntity, void, void> {
  for (const entity of overworld.getEntities(options)) {
    yield new TerminatorEntity(entity);
  }
  for (const entity of nether.getEntities(options)) {
    yield new TerminatorEntity(entity);
  }
  for (const entity of theEnd.getEntities(options)) {
    yield new TerminatorEntity(entity);
  }
}

export const getOverworldCount = () => overworld.getEntities(options).length;
export const getNetherCount = () => overworld.getEntities(options).length;
export const getTheEndCount = () => overworld.getEntities(options).length;
