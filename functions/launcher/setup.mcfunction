# change players settings
scoreboard objectives add players dummy
scoreboard objectives add compass_cd dummy
clear @a
clearspawnpoint @a
spawnpoint @a ~ ~ ~
spreadplayers ~ ~ 1 10 @a
gamemode a @a

# changes gamerule settings
gamerule naturalregeneration true
gamerule dodaylightcycle true
gamerule doimmediaterespawn false
gamerule showcoordinates true
gamerule spawnradius 10
gamerule sendcommandfeedback false
gamerule pvp false
gamerule falldamage false
gamerule drowningdamage false
gamerule firedamage false
time set 0

# tellraw message
tellraw @s {"rawtext":[{"text":"§aSetup complete."}]}
tellraw @s {"rawtext":[{"text":"―――――――――――――――――"}]}
tellraw @s {"rawtext":[{"text":"§cWhoever execute command §r§l/function start §r§cbecomes a speedrunner, and the rest are hunters."}]}
tellraw @s {"rawtext":[{"text":"§ePlease make sure that you do NOT leave until the game ends, or the game will corrupt."}]}
tellraw @s {"rawtext":[{"text":"―――――――――――――――――"}]}
tellraw @s {"rawtext":[{"text":"§aMore info at: §bhttps://mcpedl.com/minecraft-manhunt"}]}
tellraw @s {"rawtext":[{"text":"§aSupport Discord Server: §bhttps://discord.gg/Xn8TCJWA"}]}
tag @s add host
tag @s add verified
tag @s remove user