execute @a[tag=host,scores={settings_state=0}] ~ ~ ~ xp -32427l @a
execute @a[tag=host,scores={settings_state=0}] ~ ~ ~ tag @a remove spec
execute @a[tag=host,scores={settings_state=0}] ~ ~ ~ tag @a remove hunter
execute @a[tag=host,scores={settings_state=0}] ~ ~ ~ tag @a remove speedrunner
execute @a[tag=host,scores={settings_state=1,players=..1}] ~~~ title @a actionbar §eYou need at least 2 players to start the game
execute @a[tag=host,scores={settings_state=1,players=2..}] ~~~ title @a actionbar §eStart the game by executing §b/function start
execute @a[tag=host,scores={settings_state=1}] ~~~ effect @a strength 1 255 true
execute @a[tag=host,scores={settings_state=1}] ~~~ effect @a saturation 1 255 true

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner] ~~~ tp @a[l=0,lm=0,tag=hunter] @s
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner] ~~~ spreadplayers ~ ~ 2 30 @a[l=0,lm=0,tag=hunter]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[l=0,lm=0,tag=hunter] ~~~ scoreboard players set @s spawn_time 600
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[l=0,lm=0,tag=hunter] ~~~ effect @s invisibility 35 1 true
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[l=0,lm=0,tag=hunter] ~~~ effect @s resistance 35 255 true
execute @a[tag=host,scores={settings_state=2}] ~~~ xp 2l @a[l=0,lm=0,tag=hunter]
execute @a[tag=host,scores={settings_state=2}] ~~~ scoreboard players remove @a[l=2,lm=2,tag=hunter,scores={spawn_time=1..600}] spawn_time 1
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=hunter,scores={spawn_time=599}] ~~~ tellraw @s {"rawtext":[{"text":"§7You died! Respawning in 30 seconds!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=hunter,scores={spawn_time=300}] ~~~ tellraw @s {"rawtext":[{"text":"§7Respawning in 15 seconds!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=hunter,scores={spawn_time=200}] ~~~ tellraw @s {"rawtext":[{"text":"§7Respawning in 10 seconds!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=hunter,scores={spawn_time=100}] ~~~ tellraw @s {"rawtext":[{"text":"§7Respawning in 5 seconds!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=hunter,scores={spawn_time=80}] ~~~ tellraw @s {"rawtext":[{"text":"§7Respawning in 4 seconds!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=hunter,scores={spawn_time=60}] ~~~ tellraw @s {"rawtext":[{"text":"§7Respawning in 3 seconds!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=hunter,scores={spawn_time=40}] ~~~ tellraw @s {"rawtext":[{"text":"§7Respawning in 2 seconds!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=hunter,scores={spawn_time=20}] ~~~ tellraw @s {"rawtext":[{"text":"§7Respawning in 1 second!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=hunter,scores={spawn_time=1..600}] ~~~ tp ~~~
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=hunter,scores={spawn_time=..0}] ~~~ tellraw @s {"rawtext":[{"text":"§lYou have respawned."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter,scores={spawn_time=..0}]  slot.armor.chest 0 iron_chestplate 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter,scores={spawn_time=..0}]  slot.armor.head 0 iron_helmet 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter,scores={spawn_time=..0}]  slot.armor.feet 0 iron_boots 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter,scores={spawn_time=..0}]  slot.armor.legs 0 iron_leggings 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter,scores={spawn_time=..0}]  slot.hotbar 0 compass 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter,scores={spawn_time=..0}]  slot.hotbar 1 iron_sword 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter,scores={spawn_time=..0}]  slot.hotbar 2 iron_axe 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter,scores={spawn_time=..0}]  slot.hotbar 3 iron_pickaxe 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=hunter,scores={spawn_time=..0}]  slot.hotbar 4 cooked_beef 8
execute @a[tag=host,scores={settings_state=2}] ~~~ xp -200l @a[l=2,lm=2,tag=hunter,scores={spawn_time=..0}]
execute @a[tag=host,scores={settings_state=2}] ~~~ xp 1l @a[l=0,lm=0,tag=hunter,scores={spawn_time=..0}]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[l=1,lm=1,tag=hunter,scores={spawn_time=..0}] ~~~ scoreboard players reset @s spawn_time
execute @a[tag=speedrunner] ~ ~ ~ setworldspawn
#spectating
execute @a[tag=spec] ~ ~ ~ function spec
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=!speedrunner,tag=!hunter,tag=!spec] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§aYou are spectating the match, please do not leave until the match ends."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=!speedrunner,tag=!hunter,tag=!spec] ~ ~ ~ ability @s mayfly true
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=!speedrunner,tag=!hunter,tag=!spec] ~ ~ ~ gamemode a @s
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=!speedrunner,tag=!hunter,tag=!spec] ~ ~ ~ tp @s @r[tag=!spec]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=!speedrunner,tag=!hunter,tag=!spec] ~ ~ ~ tag @s add spec
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=!speedrunner,tag=!hunter,tag=spec] slot.hotbar 0 allow 1
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=!speedrunner,tag=!hunter,tag=spec] slot.hotbar 1 air
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=!speedrunner,tag=!hunter,tag=spec] slot.hotbar 2 air
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=!speedrunner,tag=!hunter,tag=spec] slot.hotbar 3 air
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=!speedrunner,tag=!hunter,tag=spec] slot.hotbar 4 air
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=!speedrunner,tag=!hunter,tag=spec] slot.hotbar 5 air
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=!speedrunner,tag=!hunter,tag=spec] slot.hotbar 6 air
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=!speedrunner,tag=!hunter,tag=spec] slot.hotbar 7 air
execute @a[tag=host,scores={settings_state=2}] ~~~ replaceitem entity @a[tag=!speedrunner,tag=!hunter,tag=spec] slot.hotbar 8 air

execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ execute @a[tag=speedrunner,l=0,lm=0] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§b§lYou died! §r>> §cYou have been eliminated from the game."}]}
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ execute @a[tag=speedrunner,l=0,lm=0] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§b§lGame §r>> §cHunter(s) won the game!"}]}
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ execute @a[tag=speedrunner,l=0,lm=0] ~ ~ ~ title @a title §cGame ended
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ execute @a[tag=speedrunner,l=0,lm=0] ~ ~ ~ title @a[tag=speedrunner] subtitle §cYou lost!
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ execute @a[tag=speedrunner,l=0,lm=0] ~ ~ ~ title @a[tag=speedrunner] title 
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ execute @a[tag=speedrunner,l=0,lm=0] ~ ~ ~ title @a[tag=hunter] subtitle §eCongrats!
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ execute @a[tag=speedrunner,l=0,lm=0] ~ ~ ~ title @a[tag=hunter] title §eYou have won!
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ execute @a[tag=speedrunner,l=0,lm=0] ~ ~ ~ gamemode 2 @a
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ execute @a[tag=speedrunner,l=0,lm=0] ~ ~ ~ xp -32427l @a
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ execute @a[tag=speedrunner,l=0,lm=0] ~ ~ ~ execute @a[tag=host,scores={settings_state=2,speed_alive=1..,hunt_alive=1..}] ~~~ scoreboard players set @s settings_state 0
execute @a[tag=host,scores={settings_state=0}] ~~~ execute @a[tag=speedrunner,l=0,lm=0] ~ ~ ~ tag @a remove hunter
execute @a[tag=host,scores={settings_state=0}] ~~~ execute @a[tag=speedrunner,l=0,lm=0] ~ ~ ~ tag @a remove spec
execute @a[tag=host,scores={settings_state=0}] ~~~ execute @a[tag=speedrunner,l=0,lm=0] ~ ~ ~ tag @a remove speedrunner
execute @a[tag=host,scores={settings_state=0}] ~ ~ ~ scoreboard objectives setdisplay sidebar

execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..,timer=..0}] ~~~ tellraw @a {"rawtext":[{"text":"§b§lGame §r>> §eHunters ran out of time! Speedrunner won the game!"}]}
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..,timer=..0}] ~~~ title @a title §cGame ended
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..,timer=..0}] ~~~ title @a[tag=speedrunner] subtitle §eCongrats!
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..,timer=..0}] ~~~ title @a[tag=speedrunner] title §eYou have won!
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..,timer=..0}] ~~~ title @a[tag=hunter] subtitle §cYou lost!
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..,timer=..0}] ~~~ title @a[tag=hunter] title 
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..,timer=..0}] ~~~ gamemode 2 @a
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..,timer=..0}] ~~~ xp -32427l @a
execute @a[tag=host,scores={settings_state=2,hunt_alive=1..,timer=..0}] ~~~ tag @a remove hunter
execute @a[tag=host,scores={settings_state=2,speed_alive=1,timer=..0}] ~~~ tag @a remove speedrunner
execute @a[tag=host,scores={settings_state=2,speed_alive=0,hunt_alive=0,timer=..0}] ~~~ tag @a remove spec
execute @a[tag=host,scores={settings_state=2,speed_alive=0,hunt_alive=0,timer=..0}] ~~~ scoreboard players set @s settings_state 0
execute @a[tag=host,scores={settings_state=0}] ~ ~ ~ scoreboard objectives setdisplay sidebar

execute @a[tag=host,scores={settings_state=2,speed_alive=0,hunt_alive=1..}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§b§lGame §r>> §cSpeedrunner left the game! Hunter(s) won!"}]}
execute @a[tag=host,scores={settings_state=2,speed_alive=0,hunt_alive=1..}] ~ ~ ~ title @a title §cGame ended
execute @a[tag=host,scores={settings_state=2,speed_alive=0,hunt_alive=1..}] ~ ~ ~ title @a[tag=hunter] subtitle §eYou won!
execute @a[tag=host,scores={settings_state=2,speed_alive=0,hunt_alive=1..}] ~ ~ ~ title @a[tag=hunter] title §eCongrats!
execute @a[tag=host,scores={settings_state=2,speed_alive=0,hunt_alive=1..}] ~ ~ ~ gamemode 2 @a
execute @a[tag=host,scores={settings_state=2,speed_alive=0,hunt_alive=1..}] ~ ~ ~ xp -32427l @a
execute @a[tag=host,scores={settings_state=2,speed_alive=0,hunt_alive=1..}] ~ ~ ~ tag @a remove spec
execute @a[tag=host,scores={settings_state=2,speed_alive=0,hunt_alive=1..}] ~ ~ ~ tag @a remove speedrunner
execute @a[tag=host,scores={settings_state=2,speed_alive=0,hunt_alive=1..}] ~ ~ ~ scoreboard players set @s settings_state 0
execute @a[tag=host,scores={settings_state=0}] ~ ~ ~ scoreboard objectives setdisplay sidebar

execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=0}] ~ ~ ~ tellraw @a {"rawtext":[{"text":"§b§lGame §r>> §cAll hunters left the game! Speedrunner won!"}]}
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=0}] ~ ~ ~ title @a title §cGame ended
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=0}] ~ ~ ~ title @a[tag=speedrunner] subtitle §eYou won!
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=0}] ~ ~ ~ title @a[tag=speedrunner] title §eCongrats!
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=0}] ~ ~ ~ gamemode 2 @a
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=0}] ~ ~ ~ xp -32427l @a
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=0}] ~ ~ ~ tag @a remove spec
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=0}] ~ ~ ~ tag @a remove speedrunner
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=0}] ~ ~ ~ scoreboard players set @s settings_state 0
execute @a[tag=host,scores={settings_state=0}] ~ ~ ~ scoreboard objectives setdisplay sidebar



#rules
kill @e[type=xp_orb]
execute @a[tag=host,scores={settings_state=2,timer_enabled=1,timer=0..}] ~~~ scoreboard players remove @s timer 1
execute @a[tag=host,scores={settings_state=0}] ~~~ effect @a instant_health 1 255 true
execute @a[tag=host,scores={settings_state=1}] ~~~ effect @a instant_health 1 255 true
#something else
execute @a[tag=host,scores={settings_state=1}] ~~~ gamemode adventure @a
execute @a[tag=host,scores={settings_state=2}] ~~~ gamemode survival @a[tag=!spec]
#events for different time settings
execute @a[tag=host,scores={settings_state=2,settings_time=0,timer_enabled=1}] ~~~ function system/events/normal
execute @a[tag=host,scores={settings_state=2,settings_time=1,timer_enabled=1}] ~~~ function system/events/long
#Match End(since this is global why not put it here)
#if the last few players were all noob/pro and they could not kill each other for 20 mins
#one second = 20 ticks(usually)
execute @a[tag=host,scores={settings_state=2,timer=9000}] ~~~ tellraw @a {"rawtext":[{"text":"§eMatch End in 15 minutes!"}]}
execute @a[tag=host,scores={settings_state=2,timer=6000}] ~~~ tellraw @a {"rawtext":[{"text":"§eMatch End in 10 minutes!"}]}
execute @a[tag=host,scores={settings_state=2,timer=3000}] ~~~ tellraw @a {"rawtext":[{"text":"§eMatch End in 5 minutes!"}]}
execute @a[tag=host,scores={settings_state=2,timer=600}] ~~~ tellraw @a {"rawtext":[{"text":"§eMatch End in 1 minute!"}]}
execute @a[tag=host,scores={settings_state=2,timer=100}] ~~~ title @a subtitle §eMatch end in §l10
execute @a[tag=host,scores={settings_state=2,timer=100}] ~~~ title @a title §f
execute @a[tag=host,scores={settings_state=2,timer=90}] ~~~ title @a subtitle §eMatch End in §l9
execute @a[tag=host,scores={settings_state=2,timer=90}] ~~~ title @a title §f
execute @a[tag=host,scores={settings_state=2,timer=80}] ~~~ title @a subtitle §eMatch End in §l8
execute @a[tag=host,scores={settings_state=2,timer=80}] ~~~ title @a title §f
execute @a[tag=host,scores={settings_state=2,timer=70}] ~~~ title @a subtitle §eMatch End in §l7
execute @a[tag=host,scores={settings_state=2,timer=70}] ~~~ title @a title §f
execute @a[tag=host,scores={settings_state=2,timer=60}] ~~~ title @a subtitle §eMatch End in §l6
execute @a[tag=host,scores={settings_state=2,timer=60}] ~~~ title @a title §f
execute @a[tag=host,scores={settings_state=2,timer=50}] ~~~ title @a subtitle §eMatch End in §l5
execute @a[tag=host,scores={settings_state=2,timer=50}] ~~~ title @a title §f
execute @a[tag=host,scores={settings_state=2,timer=40}] ~~~ title @a subtitle §eMatch End in §l4
execute @a[tag=host,scores={settings_state=2,timer=40}] ~~~ title @a title §f
execute @a[tag=host,scores={settings_state=2,timer=30}] ~~~ title @a subtitle §eMatch End in §l3
execute @a[tag=host,scores={settings_state=2,timer=30}] ~~~ title @a title §f
execute @a[tag=host,scores={settings_state=2,timer=20}] ~~~ title @a subtitle §eMatch End in §l2
execute @a[tag=host,scores={settings_state=2,timer=20}] ~~~ title @a title §f
execute @a[tag=host,scores={settings_state=2,timer=10}] ~~~ title @a subtitle §eMatch End in §l1
execute @a[tag=host,scores={settings_state=2,timer=10}] ~~~ title @a title §f
