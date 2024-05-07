# this summons the terminator that does not respawn
# Copyright (c) JaylyMC.
# Licensed under the GPL-3.0 License.

summon entity:terminator ~ ~ ~ ~ ~ terminator:disable_respawn
tellraw @s {"rawtext":[{"text": "§cTerminator successfully summoned"}]}
tellraw @s {"rawtext":[{"text":"[§cDeprecated§r] This command will be removed and replaced by UI form soon."}]}