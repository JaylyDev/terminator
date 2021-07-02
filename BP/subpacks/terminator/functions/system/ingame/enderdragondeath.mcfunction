tellraw @a {"rawtext":[{"text":"§b§lGame §r>> §eSpeedrunner killed the Ender Dragon! Speedrunner won!"}]}
title @a[tag=speedrunner] subtitle §eCongrats!
title @a[tag=speedrunner] title §eYou won!
gamemode 2 @a
tag @e[type=entity:terminator] remove hunter
tag @a remove speedrunner
tag @a remove game_is_running
tag @e[type=entity:terminator] remove game_is_running
tag @a[tag=host] add end_game