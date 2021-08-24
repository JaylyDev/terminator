## this summons the terminator that excludes death event
summon entity:terminator ~ ~ ~ terminator:disable_respawn_event "Terminator"
tellraw @s {"rawtext":[{"text": "§cTerminator successfully summoned"}]}