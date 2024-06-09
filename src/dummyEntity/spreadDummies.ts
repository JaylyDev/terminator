import { VECTOR3_DOWN, Vector3Utils } from "@minecraft/math";
import { Dimension, Vector3 } from "@minecraft/server";

interface LocationXZ {
  x: number;
  z: number;
}

// reference
// function normalDistribution(x: number, mean: number, stdev: number): number {
//   if (stdev <= 0) {
//     throw new Error("Standard deviation must be positive");
//   }
//   const exponent = -Math.pow(x - mean, 2) / (2 * Math.pow(stdev, 2));
//   const coefficient = 1 / (stdev * Math.sqrt(2 * Math.PI));
//   const probability = coefficient * Math.exp(exponent);
//   return probability;
// }

// https://minecraft.wiki/w/Commands/spreadplayers#Usage
function inverseNormalDistribution(
  prob: number,
  mean: number,
  stdev: number
): number {
  const coefficient = 1 / (stdev * Math.sqrt(2 * Math.PI));
  const exponent = Math.log(prob / coefficient);
  const x = Math.sqrt(-(exponent * (2 * Math.pow(stdev, 2)))) + mean;
  return x;
}

/**
 * @returns y coordinate
 */
function findLocationHeight(
  location: LocationXZ,
  dimension: Dimension
): number {
  const heightRange = dimension.heightRange;
  let found = false;
  let attempts = 5;
  while (!found && attempts > 0) {
    // random y between min and max height range
    const y =
      inverseNormalDistribution(Math.random(), 0, 0.15) *
      (heightRange.max - heightRange.min - 2);
    const blockLocation: Vector3 = { x: location.x, y, z: location.z };
    const ray = dimension.getBlockFromRay(blockLocation, VECTOR3_DOWN);
    if (ray && Vector3Utils.distance(ray.block.location, blockLocation) > 2) {
      found = true;
      return ray.block.location.y + 1;
    } else attempts--;
  }
  return heightRange.max - 1;
}

/**
 * Find a y level that has multiple air blocks
 */
export function getSpreadLocation(
  location: LocationXZ,
  dimension: Dimension
): Vector3 {
  const y = findLocationHeight(location, dimension);
  return { x: location.x, y, z: location.z };
}
