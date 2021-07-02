gamemode survival @a[tag=game_is_running,m=!survival,tag=!dev]
scoreboard players add @a[scores={compass_cd=1..}] compass_cd -1
## The 1000x1000 Border
execute @a[tag=game_is_running] 500 ~ ~ fill ~ 0 ~-7 ~ 255 ~7 stained_glass 11
execute @a[tag=game_is_running] -500 ~ ~ fill ~ 0 ~-7 ~ 255 ~7 stained_glass 11
execute @a[tag=game_is_running] ~ ~ 500 fill ~-7 0 ~ ~7 255 ~ stained_glass 11
execute @a[tag=game_is_running] ~ ~ -500 fill ~-7 0 ~ ~7 255 ~ stained_glass 11

execute @a ~ ~ ~ execute @a[x=500,dx=2147483147,tag=game_is_running] ~ ~ ~ tellraw @s {"rawtext":[{"text": "§cError§r: You are not permitted to enter this area.\n§cCode§r: illegal_position_world_border_x+"}]}
execute @a ~ ~ ~  execute @a[x=-500,dx=-2147483147,tag=game_is_running] ~ ~ ~ tellraw @s {"rawtext":[{"text": "§cError§r: You are not permitted to enter this area.\n§cCode§r: illegal_position_world_border_x-"}]}
execute @a ~ ~ ~  execute @a[z=500,dz=2147483147,tag=game_is_running] ~ ~ ~ tellraw @s {"rawtext":[{"text": "§cError§r: You are not permitted to enter this area.\n§cCode§r: illegal_position_world_border_z+"}]}
execute @a ~ ~ ~ execute @a[z=-500,dz=-2147483147,tag=game_is_running] ~ ~ ~ tellraw @s {"rawtext":[{"text": "§cError§r: You are not permitted to enter this area.\n§cCode§r: illegal_position_world_border_z-"}]}
execute @a ~~~ tp @s[x=500,dx=2147483147,tag=game_is_running] 495 ~ ~
execute @a ~~~ tp @s[x=-500,dx=-2147483147,tag=game_is_running] -495 ~ ~
execute @a ~~~ tp @s[z=500,dz=2147483147,tag=game_is_running] ~ ~ 495
execute @a ~~~ tp @s[z=-500,dz=-2147483147,tag=game_is_running] ~ ~ -495

## The item randomizers
scoreboard players remove @a[tag=host,tag=game_is_running,scores={item_cd=1..2400}] item_cd 1
execute @a[tag=game_is_running,scores={item_cd=..0}] ~ ~ ~ function system/ingame/randomitem
execute @a[tag=game_is_running,scores={item_cd=..0}] ~ ~ ~ scoreboard players set @s item_cd 2400
execute @a[tag=game_is_running,scores={item_cd=2401..}] ~ ~ ~ tellraw @a {"rawtext":[{"text": "§cError§r: Item cooldown time value has reached the limit. Time: "},{ "score": {"name": "@a[tag=host]", "objective": "item_cd" }}, {"text": "\n§cCode§r: value_reached_maxinum_value"}]}
execute @a[tag=game_is_running,scores={item_cd=2401..}] ~ ~ ~ scoreboard players set @s item_cd 2400
execute @a[tag=game_is_running,scores={item_cd=2300}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§c§l>>§rItem will despawn in 5 seconds!"}]}
execute @a[tag=game_is_running,scores={item_cd=2200}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§c§l>>§rItem now despawns until next random item event (2 minutes)!"}]}
execute @a[tag=game_is_running,scores={item_cd=..2200}] ~ ~ ~ kill @e[type=item]