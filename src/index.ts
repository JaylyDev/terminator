import { debugEnabled } from "./config";

// Core Features
import "./terminator/initialization";
import "./terminator/christmasTheme";
import "./terminator/buildForward";
import "./terminator/buildVertical";
import "./terminator/ridingTransport";
import "./terminator-death/index";
import "./terminator/suffocation";
import "./terminator/rangedAttack";
import "./terminator/escapeFromDanger";
import "./terminator/netherPortal";
import "./commands/index";
import "./guide/index";
import "./dummyEntity/navigationDetect";
import "./dummyEntity/dummyEntity";
import "./dummyEntity/terminatorRespawn";

// Debug Features
if (debugEnabled) {
  import("./debug/listener");
}
