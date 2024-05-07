# this summons the terminator that does not regenerate when low health
# Copyright (c) JaylyMC.
# Licensed under the GPL-3.0 License.

summon entity:terminator ~ ~ ~ ~ ~ terminator:disable_regeneration
tellraw @s {"rawtext":[{"text": "§cTerminator successfully summoned"}]}