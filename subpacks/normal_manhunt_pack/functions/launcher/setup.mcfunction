#scoreboard setup
scoreboard objectives add display dummy "§l§cManhunt"
scoreboard objectives add counter dummy
scoreboard objectives add speed_alive dummy
scoreboard objectives add hunt_alive dummy
scoreboard objectives add speedcount dummy
scoreboard objectives add huntcount dummy
scoreboard objectives add players dummy
scoreboard objectives add settings_healing dummy
scoreboard objectives add settings_warmup dummy
scoreboard objectives add trackcount dummy
scoreboard objectives add track_count dummy

#default settings
scoreboard players set @s settings_healing 0
scoreboard players set @s settings_warmup 0

#teleport everyone to 0,0
scoreboard objectives setdisplay sidebar display
spreadplayers 0 0 1 5 @a
clearspawnpoint @a
setworldspawn ~ ~ ~

#Change every gamerules
gamerule naturalRegeneration true
gamerule doDaylightCycle false
gamerule doimmediateRespawn false
gamerule showcoordinates true
gamerule spawnRadius 1
gamerule sendCommandFeedback false
gamerule pvp false
gamerule falldamage false 
time set noon

#tellraw
tellraw @s {"rawtext":[{"text":"§aSetup complete."}]}
tellraw @s {"rawtext":[{"text":"―――――――――――――――――"}]}
tellraw @s {"rawtext":[{"text":"Default settings:"}]}
tellraw @s {"rawtext":[{"text":"Healing: §bEnabled"}]}
tellraw @s {"rawtext":[{"text":"Grace Period: §bDisabled"}]}
tellraw @s {"rawtext":[{"text":"―――――――――――――――――"}]}
tellraw @s {"rawtext":[{"text":"§dIf you dislike the default settings, you may go to §e/function settings§d to change them."}]}
tellraw @s {"rawtext":[{"text":"§bIf you want to track a player, type §3/tag [player] add track"}]}
tellraw @s {"rawtext":[{"text":"§bIf you track zero or more than one player, the game will select one for them."}]}
tellraw @s {"rawtext":[{"text":"§ePlease make sure that you do NOT leave until the game ends, or the game will corrupt."}]}
tellraw @s {"rawtext":[{"text":"―――――――――――――――――"}]}
tellraw @s {"rawtext":[{"text":"§aMore info at: §bhttps://mcpedl.com/minecraft-manhunt"}]}
tellraw @s {"rawtext":[{"text":"§aSupport Discord Server: §bhttps://discord.gg/EFB7aru"}]}
scoreboard players set @s settings_state 0
