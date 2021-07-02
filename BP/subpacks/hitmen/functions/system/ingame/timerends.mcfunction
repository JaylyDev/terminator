tellraw @a {"rawtext":[{"text":"§b§lGame §r>> §eSpeedrunner survived from the hitmen! Speedrunner won!"}]}
tellraw @a {"rawtext":[{"text":"§b§lGame §r>> §ePVP has been disabled! You are safe... for now."}]}
title @a[tag=speedrunner] subtitle §eCongrats!
title @a[tag=speedrunner] title §eYou won!
title @a[tag=hunter] subtitle §cYou lost!
title @a[tag=hunter] title 
gamemode 2 @a
tag @a remove hunter
tag @a remove speedrunner
tag @a remove game_is_running
tag @a[tag=host] add end_game