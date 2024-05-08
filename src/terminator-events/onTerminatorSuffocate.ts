import {
  EntityDamageCause,
  EntityHurtAfterEvent,
  world,
} from "@minecraft/server";

/**
 * Manages callbacks that are connected to when a terminator is
 * hurt.
 */
class TerminatorSuffocateAfterEventSignal {
  private readonly handlers: ((arg: EntityHurtAfterEvent) => void)[] = [];
  /**
   * @remarks
   * Adds a callback that will be called when a terminator is hurt.
   *
   * This function can't be called in read-only mode.
   *
   */
  subscribe(
    callback: (arg: EntityHurtAfterEvent) => void
  ): (arg: EntityHurtAfterEvent) => void {
    this.handlers.push(callback);
    return callback;
  }
  /**
   * @remarks
   * Removes a callback from being called when a terminator is hurt.
   *
   * This function can't be called in read-only mode.
   *
   * @throws This function can throw errors.
   */
  unsubscribe(callback: (arg: EntityHurtAfterEvent) => void): void {
    this.handlers.splice(this.handlers.indexOf(callback), 1);
  }
  private trigger(event: EntityHurtAfterEvent) {
    this.handlers.forEach((callback) => callback(event));
  }
  constructor() {
    world.afterEvents.entityHurt.subscribe(
      (event) => {
        if (
          event.hurtEntity.typeId !== "entity:terminator" ||
          event.damageSource.cause !== EntityDamageCause.suffocation
        )
          return;
        this.trigger(event);
      },
      {
        entityTypes: ["entity:terminator"],
      }
    );
  }
}

/**
 * @remarks
 * This event fires when a terminator is hurt (takes damage) from suffocation.
 *
 */
export const terminatorSuffocate = new TerminatorSuffocateAfterEventSignal();
