execute @s[tag=host,scores={settings_state=1}] ~~~ scoreboard players set @s settings_time 1
execute @s[tag=host,scores={settings_state=1}] ~~~ scoreboard players set @s timer_enabled 1
execute @s[tag=host,scores={settings_state=1}] ~~~ tellraw @a {"rawtext":[{"text":"Changed game time to §elong§f."}]}
execute @s[tag=host,scores={settings_state=1}] ~~~ tellraw @a {"rawtext":[{"text":"§lTIME EVENTS"}]}
execute @s[tag=host,scores={settings_state=1}] ~~~ tellraw @a {"rawtext":[{"text":"§e1 Minute§f - grace period"}]}
execute @s[tag=host,scores={settings_state=1}] ~~~ tellraw @a {"rawtext":[{"text":"§e59 Minutes§f - pvp on"}]}
execute @s[tag=host,scores={settings_state=1}] ~~~ tellraw @a {"rawtext":[{"text":"You may turned off / on grace period by doing §l/function settings/warmup"}]}
tellraw @s[tag=!host] {"rawtext":[{"text":"§c§§lERROR§r Unable to change the settings."}]}
execute @s[tag=host,scores={settings_state=2}] ~~~ tellraw @s {"rawtext":[{"text":"§c§lERROR§r Settings cannot be changed while in-game."}]}