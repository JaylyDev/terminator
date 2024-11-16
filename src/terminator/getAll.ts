import { EntityQueryOptions, world } from "@minecraft/server";
import { TerminatorEntity } from "./terminator";

const overworld = world.getDimension("overworld");
const nether = world.getDimension("nether");
const theEnd = world.getDimension("the_end");
const queryOptions: EntityQueryOptions = {
  type: "entity:terminator",
  minDistance: 0.1,
};

export function* getAllTerminators(
  options?: Omit<EntityQueryOptions, "type" | "minDistance">
): Generator<TerminatorEntity, void, void> {
  for (const entity of overworld.getEntities({ ...options, ...queryOptions })) {
    yield new TerminatorEntity(entity);
  }
  for (const entity of nether.getEntities({ ...options, ...queryOptions })) {
    yield new TerminatorEntity(entity);
  }
  for (const entity of theEnd.getEntities({ ...options, ...queryOptions })) {
    yield new TerminatorEntity(entity);
  }
}

export const getOverworldCount = () =>
  overworld.getEntities(queryOptions).length;
export const getNetherCount = () => overworld.getEntities(queryOptions).length;
export const getTheEndCount = () => overworld.getEntities(queryOptions).length;
