execute @s[tag=host,scores={players=2..}] ~~~ scoreboard players set @a[tag=host,scores={settings_state=1}] "settings_state" 2
execute @s[tag=host,scores={players=2..,track_count=1..}] ~ ~ ~ tag @r[tag=track] add speedrunner
execute @s[tag=host,scores={players=2..,track_count=1..}] ~ ~ ~ tag @a remove track
execute @s[tag=host,scores={players=2..,track_count=0,speed_alive=0}] ~ ~ ~ tag @r add speedrunner
execute @s[tag=host,scores={players=2..}] ~ ~ ~ tag @a[tag=!speedrunner] add hunter
execute @s[tag=host,scores={players=2..}] ~ ~ ~ scoreboard players set @a[tag=speedrunner] progress 1
execute @s[tag=host,scores={players=2..}] ~~~ xp 1l @a
gamerule naturalRegeneration true
gamerule doDaylightCycle false
gamerule doimmediateRespawn false
gamerule showcoordinates true
gamerule spawnRadius 1
gamerule sendCommandFeedback false
gamerule pvp false
gamerule falldamage true
time set noon
clear @a[tag=host,scores={settings_state=2}]
execute @a[tag=host,scores={settings_state=2}] ~ ~ ~ spawnpoint @a ~ ~ ~
execute @a[tag=host,scores={settings_state=2}] ~~~ playsound mob.elderguardian.curse @a
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a title §cMinecraft Manhunt
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a subtitle §c§lspeedrunner: §b@a[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ gamemode s @a
execute @a[tag=host,scores={settings_state=2}] ~~~ effect @a[tag=speedrunner] health_boost 216000 4 true
execute @a[tag=host,scores={settings_state=2}] ~~~ effect @a[tag=speedrunner] instant_health 1 255 true
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.armor.chest 0 leather_chestplate 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.armor.head 0 leather_helmet 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.armor.feet 0 leather_boots 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.armor.legs 0 leather_leggings 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.hotbar 0 stone_sword 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.hotbar 1 stone_axe 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.hotbar 2 stone_pickaxe 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=speedrunner] slot.hotbar 3 cooked_beef 8
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.armor.chest 0 iron_chestplate 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.armor.head 0 iron_helmet 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.armor.feet 0 iron_boots 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.armor.legs 0 iron_leggings 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.hotbar 0 compass 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.hotbar 1 iron_sword 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.hotbar 2 iron_axe 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.hotbar 3 iron_pickaxe 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter] slot.hotbar 4 cooked_beef 8
execute @a[tag=host,scores={players=2..,timer_enabled=1,settings_time=0}] ~~~ scoreboard players set @a timer 18000
execute @a[tag=host,scores={players=2..,timer_enabled=1,settings_time=1}] ~~~ scoreboard players set @a timer 36000
tellraw @a[tag=host,scores={settings_state=1}] {"rawtext":[{"text":"§c§lERROR§r Unable to start the game."}]}
tellraw @a[tag=host,scores={settings_state=1}] {"rawtext":[{"text":"§c§lERROR§r Cannot start the game if there is only one person."}]}
execute @a[tag=host,scores={players=2..,timer_enabled=0}] ~~~ tellraw @a {"rawtext":[{"text":"§ePVP has been turned on."}]}
execute @a[tag=host,scores={players=2..,timer_enabled=0}] ~~~ gamerule pvp true
execute @a[tag=host,scores={players=2..,timer_enabled=0}] ~~~ gamerule falldamage true