#automaticily select the host
scoreboard objectives add setup_state dummy
scoreboard players add @s setup_state 1

#scoreboard setup
execute @s[scores={setup_state}] ~~~ scoreboard objectives add display dummy "§l§cManhunt"
execute @s[scores={setup_state}] ~~~ scoreboard objectives add counter dummy
execute @s[scores={setup_state}] ~~~ scoreboard objectives add speed_alive dummy
execute @s[scores={setup_state}] ~~~ scoreboard objectives add hunt_alive dummy
execute @s[scores={setup_state}] ~~~ scoreboard objectives add speedcount dummy
execute @s[scores={setup_state}] ~~~ scoreboard objectives add huntcount dummy
execute @s[scores={setup_state}] ~~~ scoreboard objectives add players dummy
execute @s[scores={setup_state}] ~~~ scoreboard objectives add settings_healing dummy
execute @s[scores={setup_state}] ~~~ scoreboard objectives add settings_warmup dummy
execute @s[scores={setup_state}] ~~~ scoreboard objectives add trackcount dummy
execute @s[scores={settings_state=2}] ~~~ scoreboard objectives add track_count dummy

#default settings
execute @s[scores={settings_state=2}] ~~~ scoreboard players set @s settings_healing 0
execute @s[scores={settings_state=2}] ~~~ scoreboard players set @s settings_warmup 0

#teleport everyone to the host
execute @s[scores={settings_state=2}] ~~~ scoreboard objectives setdisplay sidebar display
execute @s[scores={settings_state=2}] ~~~ spreadplayers ~ ~ 1 2 @a
execute @s[scores={settings_state=2}] ~~~ spawnpoint @a ~ 100 ~
execute @s[scores={settings_state=2}] ~~~ setworldspawn ~ 100 ~

#Change every gamerules
execute @s[scores={settings_state=2}] ~~~ gamerule naturalRegeneration true
execute @s[scores={settings_state=2}] ~~~ gamerule doDaylightCycle false
execute @s[scores={settings_state=2}] ~~~ gamerule doimmediateRespawn false
execute @s[scores={settings_state=2}] ~~~ gamerule showcoordinates true
execute @s[scores={settings_state=2}] ~~~ gamerule spawnRadius 1
execute @s[scores={settings_state=2}] ~~~ gamerule sendCommandFeedback false
execute @s[scores={settings_state=2}] ~~~ gamerule pvp false
execute @s[scores={settings_state=2}] ~~~ gamerule falldamage false
execute @s[scores={settings_state=2}] ~~~ time set noon

execute @s[scores={settings_state=2}] ~~~ tellraw @s {"rawtext":[{"text":"§aSetup complete."}]}
execute @s[scores={settings_state=2}] ~~~ tellraw @s {"rawtext":[{"text":"―――――――――――――――――"}]}
execute @s[scores={settings_state=2}] ~~~ tellraw @s {"rawtext":[{"text":"Default settings:"}]}
execute @s[scores={settings_state=2}] ~~~ tellraw @s {"rawtext":[{"text":"Healing: §bEnabled"}]}
execute @s[scores={settings_state=2}] ~~~ tellraw @s {"rawtext":[{"text":"Grace Period: §bDisabled"}]}
execute @s[scores={settings_state=2}] ~~~ tellraw @s {"rawtext":[{"text":"―――――――――――――――――"}]}
execute @s[scores={settings_state=2}] ~~~ tellraw @s {"rawtext":[{"text":"§dIf you dislike the default settings, you may go to §e/function settings§d to change them."}]}
execute @s[scores={settings_state=2}] ~~~ tellraw @s {"rawtext":[{"text":"§bIf you want to track a player, type §3/tag [player] add track"}]}
execute @s[scores={settings_state=2}] ~~~ tellraw @s {"rawtext":[{"text":"§bIf you track zero or more than one player, the game will select one for them."}]}
execute @s[scores={settings_state=2}] ~~~ tellraw @s {"rawtext":[{"text":"§ePlease make sure that you do NOT leave until the game ends, or the game will corrupt."}]}
execute @s[scores={settings_state=2}] ~~~ tellraw @s {"rawtext":[{"text":"―――――――――――――――――"}]}
execute @s[scores={settings_state=2}] ~~~ tellraw @s {"rawtext":[{"text":"§aMore info at: §bhttps://mcpedl.com/minecraft-manhunt"}]}
execute @s[scores={settings_state=2}] ~~~ tellraw @s {"rawtext":[{"text":"§aSupport Discord Server: §bhttps://discord.gg/EFB7aru"}]}
execute @s[scores={settings_state=2}] ~~~ scoreboard players set @s settings_state 0
