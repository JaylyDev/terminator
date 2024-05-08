import {
  DisplaySlotId,
  EntityHealthComponent,
  system,
  world,
} from "@minecraft/server";

const healthObjective =
  world.scoreboard.getObjective("health_debug") ??
  world.scoreboard.addObjective("health_debug", "Health");
const overworld = world.getDimension("overworld");
let runId: number | undefined;

system.afterEvents.scriptEventReceive.subscribe(
  (event) => {
    if (event.id === "terminator:health_debug" && event.message === "true") {
      world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.Sidebar, {
        objective: healthObjective,
      });
      runId = system.runInterval(() => {
        const terminators = overworld.getEntities({
          type: "entity:terminator",
        });
        for (const terminator of terminators) {
          const health = terminator.getComponent(
            EntityHealthComponent.componentId
          ) as EntityHealthComponent;
          healthObjective.setScore(terminator, health.currentValue);
        }
      });
    } else if (
      event.id === "terminator:health_debug" &&
      event.message === "false"
    ) {
      world.scoreboard.clearObjectiveAtDisplaySlot(DisplaySlotId.Sidebar);
      system.clearRun(runId);
      runId = undefined;
    }
  },
  { namespaces: ["terminator"] }
);
