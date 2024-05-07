# This summons a terminator with netherite armour
# Copyright (c) JaylyMC.
# Licensed under the GPL-3.0 License.

summon entity:terminator "Terminator" ~~~
replaceitem entity @e[type=entity:terminator,r=5] slot.armor.head 0 netherite_helmet
replaceitem entity @e[type=entity:terminator,r=5] slot.armor.chest 0 netherite_chestplate
replaceitem entity @e[type=entity:terminator,r=5] slot.armor.legs 0 netherite_leggings
replaceitem entity @e[type=entity:terminator,r=5] slot.armor.feet 0 netherite_boots
replaceitem entity @e[type=entity:terminator,r=5] slot.weapon.mainhand 0 netherite_sword
replaceitem entity @e[type=entity:terminator,r=5] slot.weapon.offhand 0 shield
tellraw @s {"rawtext":[{{"text":"[§cDeprecated§r] This command will be removed and replaced by UI form soon."}}]}