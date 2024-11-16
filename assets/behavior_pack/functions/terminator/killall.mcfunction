# This kills every terminator and dummies in existence
# Copyright (c) JaylyMC. All rights reserved.

tag @e[type=entity:terminator] add terminatordeathrequest
kill @e[type=entity:terminator]
kill @e[type=entity:dummy]
scriptevent terminator:clear_reserved_names b2286ae52b16c3398d1d7ba555b4e0ca672a141d0f7bd86b18964358c48227e6