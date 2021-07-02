tag @s add speedrunner_death
tag @s remove speedrunner
execute @a[tag=host,scores={speedrunners=1..}] ~ ~ ~ tellraw @a[tag=speedrunner_death,tag=death] {"rawtext":[{"text":"§b§lGame §r>> §eYou died!"}]}
execute @a[tag=host,scores={speedrunners=1..}] ~ ~ ~ tag @s add spectate
execute @a[tag=host,scores={speedrunners=..0}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§b§lGame §r>> §eAll speedrunners died! Hunters won!"}]}
execute @a[tag=host,scores={speedrunners=..0}] ~ ~ ~ tag @e[type=entity:terminator] remove hunter
execute @a[tag=host,scores={speedrunners=..0}] ~ ~ ~ tag @a[tag=host] add end_game
execute @a[tag=host,scores={speedrunners=..0}] ~ ~ ~ tag @a remove game_is_running
execute @a[tag=host,scores={speedrunners=..0}] ~ ~ ~ tag @a remove spectate
execute @a[tag=host,scores={speedrunners=..0}] ~ ~ ~ effect @a invisibility 0
title @s[tag=speedrunner_death] subtitle §cYou lost!
title @s[tag=speedrunner_death] title 
gamemode 2 @s
tag @s remove speedrunner_death
