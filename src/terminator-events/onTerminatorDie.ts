import { EntityDieAfterEvent, world } from "@minecraft/server";

/**
 * Supports registering for an event that fires after an entity
 * has died.
 */
class TerminatorDieAfterEventSignal {
  private readonly handlers: ((arg: EntityDieAfterEvent) => void)[] = [];
  /**
   * @remarks
   * Subscribes to an event that fires when an entity dies.
   *
   * This function can't be called in read-only mode.
   *
   * @param callback
   * Function to call when an entity dies.
   * @param options
   * Additional filtering options for when the subscription
   * fires.
   * @returns
   * Returns the closure that can be used in future downstream
   * calls to unsubscribe.
   */
  subscribe(
    callback: (arg: EntityDieAfterEvent) => void
  ): (arg: EntityDieAfterEvent) => void {
    this.handlers.push(callback);
    return callback;
  }
  /**
   * @remarks
   * Stops this event from calling your function when an entity
   * dies.
   *
   * This function can't be called in read-only mode.
   *
   * @throws This function can throw errors.
   */
  unsubscribe(callback: (arg: EntityDieAfterEvent) => void): void {
    this.handlers.splice(this.handlers.indexOf(callback), 1);
  }
  private trigger(event: EntityDieAfterEvent) {
    this.handlers.forEach((callback) => callback(event));
  }
  constructor() {
    world.afterEvents.entityDie.subscribe(
      (event) => {
        if (event.deadEntity.typeId !== "entity:terminator") return;
        this.trigger(event);
      },
      { entityTypes: ["entity:terminator"] }
    );
  }
}

export const terminatorDie = new TerminatorDieAfterEventSignal();
