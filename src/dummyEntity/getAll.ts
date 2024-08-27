import { Entity, EntityQueryOptions, world } from "@minecraft/server";

const overworld = world.getDimension("overworld");
const nether = world.getDimension("nether");
const theEnd = world.getDimension("the_end");
const dummyOptions: EntityQueryOptions = {
  type: "entity:dummy",
  minDistance: 0.1,
};

export function* getAllDummyEntities(): Generator<Entity, void, void> {
  for (const entity of overworld.getEntities(dummyOptions)) {
    yield entity;
  }
  for (const entity of nether.getEntities(dummyOptions)) {
    yield entity;
  }
  for (const entity of theEnd.getEntities(dummyOptions)) {
    yield entity;
  }
}
