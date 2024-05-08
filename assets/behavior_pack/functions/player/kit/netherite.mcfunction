# This gives you netherite armour
# Copyright (c) JaylyMC.
# Licensed under the GPL-3.0 License.

replaceitem entity @s slot.armor.head 0 netherite_helmet
replaceitem entity @s slot.armor.chest 0 netherite_chestplate
replaceitem entity @s slot.armor.legs 0 netherite_leggings
replaceitem entity @s slot.armor.feet 0 netherite_boots
replaceitem entity @s slot.weapon.mainhand 0 netherite_sword
tellraw @s {"rawtext":[{"text":"[§cDeprecated§r] This command will be removed and replaced by UI form soon."}]}