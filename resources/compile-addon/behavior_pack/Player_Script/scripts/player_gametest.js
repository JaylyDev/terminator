//property of ID / VFS DONT COPY OR STEAL,OR YOU WILL RECIVE AN COPYRIGHT STRIKE!!
import * as GameTest from "\u006d\u006f\u006a\u0061\u006e\u0067\u002d\u0067\u0061\u006d\u0065\u0074\u0065\u0073\u0074";
import { World, Location, BlockLocation } from "\u006d\u006f\u006a\u0061\u006e\u0067\u002d\u006d\u0069\u006e\u0065\u0063\u0072\u0061\u0066\u0074";

GameTest.register("\u0053\u0069\u006d\u0075\u006c\u0061\u0074\u0065\u0064\u0050\u006c\u0061\u0079\u0065\u0072\u0054\u0065\u0073\u0074\u0073", "\u0073\u0070\u0061\u0077\u006e\u005f\u0070\u006c\u0061\u0079\u0065\u0072", (test) => {
  const spawnLoc = new BlockLocation(1, 2, 1);
  const landLoc = new BlockLocation(1, 10000, 1);
  const \u0070\u006c\u0061\u0079\u0065\u0072Name = /* NAME OF THE PLAYER: */ "Steve";
  const \u0070\u006c\u0061\u0079\u0065\u0072 = test.spawnSimulatedPlayer(spawnLoc, playerName);
  test.assertEntityPresent("player", spawnLoc);
  test.succeedWhen(() => {
    test.assertEntityPresent("player", landLoc);
  });
})
  .tag(GameTest.Tags.suiteDefault)
  .maxTicks(999999);