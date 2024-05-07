# This kills every terminator and dummies in existence
# Copyright (c) JaylyMC.
# Licensed under the GPL-3.0 License.

tag @e[type=entity:terminator] add terminatordeathrequest
kill @e[type=entity:terminator]
kill @e[type=entity:dummy]
tellraw @s {"rawtext":[{{"text":"[§cDeprecated§r] This command will be removed and replaced by UI form soon."}}]}