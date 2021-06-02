execute @a[tag=speedrunner,tag="game_is_running"] ~ ~ ~ setworldspawn
tellraw @s {"rawtext":[{"text":"§cYou are tracking: §r§l"}, {"selector": "@a[tag=speedrunner,tag=\"game_is_running\"]"}]}