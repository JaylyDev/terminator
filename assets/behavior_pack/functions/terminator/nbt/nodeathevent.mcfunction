# this summons the terminator that excludes death event
# Copyright (c) JaylyMC.
# Licensed under the GPL-3.0 License.

summon entity:terminator ~ ~ ~ ~ ~ terminator:disable_respawn_event
tellraw @s {"rawtext":[{"text": "§cTerminator successfully summoned"}]}
tellraw @s {"rawtext":[{{"text":"[§cDeprecated§r] This command will be removed and replaced by UI form soon."}}]}