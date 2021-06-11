# This file executes exception when the player executes command "/function start"
execute @s[tag=!end_game] ~~~ tellraw @s {"rawtext":[{"text":"§cError: §rThe game does not detect enough players to start the game."}]}
execute @s[tag=end_game] ~~~ tellraw @s {"rawtext":[{"text":"§cError: §rThe game has ran on this world once.\nPlease start a new world to play again."}]}
tellraw @s {"rawtext":[{"text":"You need at least 2 people to start this game."}]}
tellraw @s {"rawtext":[{"text":"§cIf you beileve this is an error: §rFile an issue in GitHub repository."}]}
tellraw @s {"rawtext":[{"text":"§bGitHub: §rhttps://github.com/JaylyDev/manhunt/issues/new"}]}
tellraw @s {"rawtext":[{"text":"§bDiscord: §rhttps://discord.gg/Xn8TCJWA"}]}