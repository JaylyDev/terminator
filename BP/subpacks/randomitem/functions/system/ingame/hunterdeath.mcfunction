execute @a[tag=host,scores={players=3..}] ~~~ tellraw @a {"rawtext":[{"text":"§c§l"}, {"selector": "@a[tag=death]"}, {"text": " died! §r>> §bSpeedrunner still needs to kill the rest of the hunters!"}]}
execute @a[tag=host,scores={players=..2}] ~~~ tellraw @a {"rawtext":[{"text":"§c§l"}, {"selector": "@a[tag=death]"}, {"text": " died! §r>> §bSpeedrunner wins!"}]}

execute @a[tag=host,scores={players=..2}] ~~~ gamemode 2 @a
execute @a[tag=host,scores={players=..2}] ~~~ tag @a remove game_is_running
execute @a[tag=host,scores={players=..2}] ~~~ tag @a remove hunter
execute @a[tag=host,scores={players=..2}] ~~~ tag @a remove speedrunner

execute @a[tag=host,scores={players=3..}] ~~~ gamemode 2 @s
execute @a[tag=host,scores={players=3..}] ~~~ tag @s remove game_is_running
execute @a[tag=host,scores={players=3..}] ~~~ tag @s remove hunter

title @s title §cYou Died!