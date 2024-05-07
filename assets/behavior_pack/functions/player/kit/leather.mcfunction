# This gives you leather armour
# Copyright (c) JaylyMC.
# Licensed under the GPL-3.0 License.

replaceitem entity @s slot.armor.head 0 leather_helmet
replaceitem entity @s slot.armor.chest 0 leather_chestplate
replaceitem entity @s slot.armor.legs 0 leather_leggings
replaceitem entity @s slot.armor.feet 0 leather_boots
replaceitem entity @s slot.weapon.mainhand 0 wooden_sword
tellraw @s {{"rawtext":[{{"text":"[§cDeprecated§r] This command will be removed and replaced by UI form soon."}}]}}