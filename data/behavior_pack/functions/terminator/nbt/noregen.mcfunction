# this summons the terminator that does not regenerate when low health
# *********************************************************
# *   (c) JaylyMC. All rights reserved.                   *
# *********************************************************

summon entity:terminator ~ ~ ~ terminator:disable_regeneration
tellraw @s {"rawtext":[{"text": "§cTerminator successfully summoned"}]}