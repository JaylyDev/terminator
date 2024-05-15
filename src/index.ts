import { debugEnabled } from "./config";

// Core Features
import "./terminator/initialization";
import "./terminator/christmasTheme";
import "./terminator/buildForward";
import "./terminator/buildVertical";
import "./terminator/ridingTransport";
import "./terminator/broadcastDeathMessage";
import "./terminator/suffocation";
import "./terminator/rangedAttack";
import "./commands/index";
import "./guide/index";

// Debug Features
if (debugEnabled) {
  import("./debug/listener");
}
