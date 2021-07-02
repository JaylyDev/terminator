tellraw @a {"rawtext":[{"text":"§b§lGame §r>> §eSpeedrunner died before timer ends! Hunters won!"}]}
title @a[tag=hunter] subtitle §eCongratulations!
title @a[tag=hunter] title §eYou won!
title @a[tag=speedrunner] subtitle §cYou lost!
title @a[tag=speedrunner] title 
gamemode 2 @a
tag @a remove game_is_running
tag @a remove hunter
tag @a remove speedrunner
tag @a[tag=host] add end_game