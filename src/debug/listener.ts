import { system } from "@minecraft/server";
import { onHealthDebug } from "./statsDisplay";
import { onPerformanceDebug } from "./worldPerformance";
import { onContactDebug } from "./contactWithBlock";

system.afterEvents.scriptEventReceive.subscribe(
  (event) => {
    // scriptevent terminator:health_debug
    if (event.id === "terminator:health_debug" && event.message === "true") {
      onHealthDebug(true);
    } else if (
      event.id === "terminator:health_debug" &&
      event.message === "false"
    ) {
      onHealthDebug(false);
    }
    // scriptevent terminator:performance_debug
    else if (
      event.id === "terminator:performance_debug" &&
      event.message === "true"
    ) {
      onPerformanceDebug(true);
    } else if (
      event.id === "terminator:performance_debug" &&
      event.message === "false"
    ) {
      onPerformanceDebug(false);
    }
    // scriptevent terminator:contact_debug
    else if (
      event.id === "terminator:contact_debug" &&
      event.message === "true"
    ) {
      onContactDebug(true);
    } else if (
      event.id === "terminator:contact_debug" &&
      event.message === "false"
    ) {
      onContactDebug(false);
    }
  },
  { namespaces: ["terminator"] }
);
