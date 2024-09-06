import { system, TicksPerSecond } from "@minecraft/server";
import { getAllTerminators } from "./getAll";

system.runInterval(() => {
  const date_ob = new Date();
  const day = parseInt(("0" + date_ob.getDate()).slice(-2));
  const month = parseInt(("0" + (date_ob.getMonth() + 1)).slice(-2));
  const terminators = getAllTerminators();
  if (
    (month == 12 && 19 <= day && day <= 31) ||
    (month == 1 && 1 <= day && day <= 8)
  ) {
    for (const terminator of terminators) {
      terminator.triggerEvent("terminator:christmas_skin");
    }
  } else {
    for (const terminator of terminators) {
      terminator.triggerEvent("terminator:default_skin");
    }
  }
}, TicksPerSecond);
