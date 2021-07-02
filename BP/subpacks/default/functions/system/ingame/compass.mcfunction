execute @s[tag=hunter,tag=game_is_running,scores={compass_cd=0}] ~~~ execute @a[tag=speedrunner,tag=game_is_running] ~ ~ ~ setworldspawn
execute @s[tag=hunter,tag=game_is_running,scores={compass_cd=0}] ~~~ tellraw @s {"rawtext":[{"text":"§cYou are tracking: §r§l"}, {"selector": "@a[tag=speedrunner,tag=game_is_running]"}]}
execute @s[tag=!hunter,tag=game_is_running,scores={compass_cd=0}] ~~~ tellraw @s { "rawtext": [ { "text": "§cError: §rYou are not allowed to have compass in your inventory.\n§cCode: §rnot_a_hunter" } ] }
execute @s[tag=!hunter,tag=game_is_running,scores={compass_cd=0}] ~~~ clear @s compass
execute @s[tag=speedrunner,tag=hunter,tag=game_is_running,scores={compass_cd=0}] ~~~ tellraw @s { "rawtext": [ { "text": "§cError: §rYou are not allowed to have compass in your inventory.\n§cCode: §rhas_muitiple_identity" } ] }
execute @s[tag=speedrunner,tag=hunter,tag=game_is_running,scores={compass_cd=0}] ~~~ clear @s compass
execute @s[tag=game_is_running,scores={compass_cd=0}] ~~~ scoreboard players set @s compass_cd 20