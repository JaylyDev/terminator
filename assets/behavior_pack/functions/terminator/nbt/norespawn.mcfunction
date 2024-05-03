# this summons the terminator that does not respawn
# *********************************************************
# *   (c) JaylyMC. All rights reserved.                   *
# *********************************************************

summon entity:terminator ~ ~ ~ terminator:disable_respawn
tellraw @s {"rawtext":[{"text": "§cTerminator successfully summoned"}]}