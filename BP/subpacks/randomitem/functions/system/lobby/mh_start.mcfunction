#Assign players roles
tag @s add speedrunner
tag @a[tag=!speedrunner] add hunter
tag @a add game_is_running

#introduction to the game
tellraw @a {"rawtext":[{"text":"§6§lMinecraft Manhunt (Random Items)"}]}
tellraw @a {"rawtext":[{"text":"―――――――――――――――――"}]}
tellraw @a {"rawtext":[{"text":"§bSpeedrunner§r:§b§l "}, {"selector": "@a[tag=speedrunner,tag=game_is_running]"}]}
tellraw @a {"rawtext":[{"text":"§b§l"}, {"selector": "@a[tag=speedrunner,tag=game_is_running]"}, {"text":"§r's goal is to take down all the hunters"}]}
tellraw @a {"rawtext":[{"text":"§bIf "}, {"selector": "@a[tag=hunter,tag=game_is_running]"}, {"text":" killed all the hunters before their death, the speedrunner wins. If the speedrunner died, they lose."}]}
tellraw @a {"rawtext":[{"text":"―――――――――――――――――"}]}
execute @a[tag=host,scores={players=..2}] ~~~ tellraw @a {"rawtext":[{"text":"§bHunter§r:§b§l "}, {"selector": "@a[tag=hunter,tag=game_is_running]"}]}
execute @a[tag=host,scores={players=3..}] ~~~ tellraw @a {"rawtext":[{"text":"§bHunters§r:§b§l "}, {"selector": "@a[tag=hunter,tag=game_is_running]"}]}
tellraw @a {"rawtext":[{"text":"§c§l"}, {"selector": "@a[tag=hunter,tag=game_is_running]"}, {"text":"§r's goal is to kill the speedrunner before they kill the hunters."}]}
tellraw @a {"rawtext":[{"text":"§cHunters have a working compass to track the speedrunner in the overworld."}]}
tellraw @a {"rawtext":[{"text":"§cThey also have unlimited life and they won't lose their compass."}]}
tellraw @a {"rawtext":[{"text":"―――――――――――――――――"}]}
tellraw @a {"rawtext":[{"text":"§c§lRules§r: Every item dropped on the ground will disappear except the moment you get a random type of items. There is a 1000x1000 border. Every two minutes we each get a completely random item. You can pick up each others items."}]}

#miscs
execute @a[tag=host] ~~~ spreadplayers 0 0 0 10 @a
execute @a[tag=host] ~~~ setworldspawn 0 64 0
execute @a[tag=host] ~~~ spawnpoint @a 0 64 0
scoreboard players set @a compass_cd 0
scoreboard players set @a[tag=host] item_cd 2200
## replaceitem entity @a[tag=hunter,tag=game_is_running] slot.weapon.mainhand 0 compass 1 0 {"minecraft:item_lock":{"mode": "lock_in_slot"}, "minecraft:keep_on_death":{}}
gamerule pvp true
gamerule falldamage true
gamerule drowningdamage true
gamerule firedamage true
effect @a instant_health 0 0 true
effect @a strength 0 0 true
