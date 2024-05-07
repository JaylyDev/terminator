# This gives you iron armour
# Copyright (c) JaylyMC.
# Licensed under the GPL-3.0 License.

replaceitem entity @s slot.armor.head 0 iron_helmet
replaceitem entity @s slot.armor.chest 0 iron_chestplate
replaceitem entity @s slot.armor.legs 0 iron_leggings
replaceitem entity @s slot.armor.feet 0 iron_boots
replaceitem entity @s slot.weapon.mainhand 0 iron_sword
tellraw @s {"rawtext":[{"text":"[§cDeprecated§r] This command will be removed and replaced by UI form soon."}]}