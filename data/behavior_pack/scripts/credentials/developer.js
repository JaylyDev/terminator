import * as UITest from './MojangMinecraftUITest.js';
import * as ImportTest from './MojangImportTest.js';
import { SHA256 } from '../sha256.js';

function ResponseMessage(player, callback, canAccess) {
  let responses = [
    {
      "response": {
        "code": 0,
        "message": "The request has a valid key for authorization.",
        "request": [
          {
            "type": `${SHA256(callback)}`,
            "identifier": `minecraft:player.${player}.client`
          }
        ],
        "status": "PERMISSION_GRANTED"
      }
    },
    {
      "response": {
        "code": 403,
        "message": "The request is missing a valid key.",
        "error": [
          {
            "message": "The request is missing a valid key.",
            "identifier": `minecraft:player.${player}.client`,
            "reason": "forbidden"
          }
        ],
        "status": "PERMISSION_DENIED"
      }
    },
    {
      "response": {
        "code": 400,
        "message": "The request does not include an input",
        "error": [
          {
            "message": "The request is missing a valid module.",
            "identifier": `minecraft:player.${player}.client`,
            "reason": "missingRequiredParameter"
          }
        ],
        "status": "MISSING_PARAMETER"
      }
    }
  ];
  if (canAccess == true) {
    return responses[0];
  } else if (canAccess == false) {
    return responses[1];
  } else return responses[2];
};

export function authorize(password, callback, player) {
  /**
   * @name
   * mojang-minecraft-ui test
   * @requires
   * User knowing the token and the package name for the test
   * (Developers only)
   * @returns
   * ResponseMessage
   * @example (Delete this when publish)
   * ``
   */
  if (password == UITest.token && callback == UITest.name) {
    return ResponseMessage(player, callback, true);
  } else if (password != UITest.token && callback == UITest.name) {
    return ResponseMessage(player, callback, false);
  } else
  /**
   * @name
   * GameTest import test
   * @requires
   * User knowing the token and the package name for the test
   * (Developers only)
   * @returns
   * ResponseMessage
   * @example (Delete this when publish)
   * ``
   */
  if (password == ImportTest.token && callback == ImportTest.name) {
    return ResponseMessage(player, callback, true);
  } else if (password != ImportTest.token && callback == ImportTest.name) {
    return ResponseMessage(player, callback, false);
  } else return ResponseMessage(player, callback, null);
};