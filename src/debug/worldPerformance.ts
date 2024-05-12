// Script example for ScriptAPI
// Author: JaylyDev
// Project: https://github.com/JaylyDev/ScriptAPI
import { system, world } from "@minecraft/server";

let lastTick = NaN;
type TickEvent = { currentTick: number; deltaTime: number };
const callbacks: ((event: TickEvent) => void)[] = [];

system.runInterval(() => {
  const { currentTick } = system;
  const deltaTime = (Date.now() - lastTick) / 1000;
  lastTick = Date.now();

  for (const callback of callbacks) {
    callback({ deltaTime, currentTick });
  }
});

export class TickEventSignal {
  subscribe(callback: (event: TickEvent) => void) {
    callbacks.push(callback);
    return callback;
  }
  unsubscribe(callback: (event: TickEvent) => void) {
    const index = callbacks.indexOf(callback);
    callbacks.splice(index, 1);
  }
}

export const tick = new TickEventSignal();

/**
 * If enabled show world TPS on player action bar.
 */
export function onPerformanceDebug(enabled: boolean) {
  world.setDynamicProperty("terminator:performance_debug", enabled);
}

const overworld = world.getDimension("overworld");

tick.subscribe((event) => {
  const enabled = world.getDynamicProperty("terminator:performance_debug") as
    | boolean
    | undefined;
  if (!enabled) return;

  const terminatorsCount = overworld.getEntities({
    type: "entity:terminator",
  }).length;

  for (const player of world.getAllPlayers()) {
    player.onScreenDisplay.setActionBar(
      `Server TPS: ${(1 / event.deltaTime).toFixed(2)}
Terminator Count: ${terminatorsCount}`
    );
  }
});
