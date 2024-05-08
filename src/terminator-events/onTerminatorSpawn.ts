import {
  EntityInitializationCause,
  EntitySpawnAfterEvent,
  world,
} from "@minecraft/server";

/**
 * Registers a script-based event handler for handling what
 * happens when a terminator spawns.
 */
class TerminatorSpawnAfterEventSignal {
  private readonly handlers: ((arg: EntitySpawnAfterEvent) => void)[] = [];
  /**
   * @remarks
   * Method to register an event handler for what happens when an
   * entity spawns.
   *
   * This function can't be called in read-only mode.
   *
   * @param callback
   * Function that handles the spawn event.
   */
  subscribe(
    callback: (arg: EntitySpawnAfterEvent) => void
  ): (arg: EntitySpawnAfterEvent) => void {
    this.handlers.push(callback);
    return callback;
  }
  /**
   * @remarks
   * Unregisters a method that was previously subscribed to the
   * subscription event.
   *
   * This function can't be called in read-only mode.
   *
   * @param callback
   * Original function that was passed into the subscribe event,
   * that is to be unregistered.
   * @throws This function can throw errors.
   */
  unsubscribe(callback: (arg: EntitySpawnAfterEvent) => void): void {
    this.handlers.splice(this.handlers.indexOf(callback), 1);
  }
  private trigger(event: EntitySpawnAfterEvent) {
    this.handlers.forEach((callback) => callback(event));
  }
  constructor() {
    world.afterEvents.entitySpawn.subscribe((event) => {
      if (
        event.cause === EntityInitializationCause.Loaded ||
        event.entity.typeId !== "entity:terminator"
      )
        return;
      this.trigger(event);
    });
  }
}

/**
 * @remarks
 * This event fires when a terminator is spawned.
 *
 */
export const terminatorSpawn = new TerminatorSpawnAfterEventSignal();
