#scoreboard setup
scoreboard objectives add players dummy

#teleport everyone to the host
spreadplayers ~ ~ 1 10 @a
clearspawnpoint @a

#Change every gamerules
gamerule naturalRegeneration true
gamerule doDaylightCycle false
gamerule doimmediateRespawn false
gamerule showcoordinates true
gamerule spawnRadius 10
gamerule sendCommandFeedback false
gamerule pvp false
gamerule falldamage false 
time set noon

#tellraw
tellraw @s {"rawtext":[{"text":"§aSetup complete."}]}
tellraw @s {"rawtext":[{"text":"―――――――――――――――――"}]}
tellraw @s {"rawtext":[{"text":"§cWhoever execute command /function start becomes a speedrunner, and the rest are hunters."}]}
tellraw @s {"rawtext":[{"text":"§ePlease make sure that you do NOT leave until the game ends, or the game will corrupt."}]}
tellraw @s {"rawtext":[{"text":"―――――――――――――――――"}]}
tellraw @s {"rawtext":[{"text":"§aMore info at: §bhttps://mcpedl.com/minecraft-manhunt"}]}
tellraw @s {"rawtext":[{"text":"§bSupport Discord Server: §bhttps://discord.gg/EFB7aru"}]}

#host
tag @s add host
tag @s add setup_complete
scoreboard players set @s[tag=host] players 0