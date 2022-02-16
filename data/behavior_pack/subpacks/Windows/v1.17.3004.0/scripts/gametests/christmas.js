import { World, Commands } from "mojang-minecraft";

World.events.tick.subscribe(() => {
  let date_ob = new Date();
  let day = date_ob.getDate();
  let month = date_ob.getMonth();
  /**
   * @returns
   * Returns day and month from Date() function
   * @example
   * ```javascript
   *         console.log(new Date()) // 2022-01-23T08:51:05.741Z
   *         console.log(day) // 23
   *         console.log(month) // 0 (Displays month - 1)
   */
  if (((month == 12) && (19 <= day <= 31)) || ((month == 1) && (1 <= day <= 8))) {
    Commands.run('event entity @e[type=entity:terminator] terminator:christmas_skin', World.getDimension('overworld'));
  } else {
    Commands.run('event entity @e[type=entity:terminator] terminator:default_skin', World.getDimension('overworld'));
  };
})
