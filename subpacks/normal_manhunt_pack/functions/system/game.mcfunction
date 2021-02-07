execute @a[tag=host,scores={settings_state=0}] ~ ~ ~ xp -32427l @a
execute @a[tag=host,scores={settings_state=0}] ~ ~ ~ tag @a remove spec
execute @a[tag=host,scores={settings_state=0}] ~ ~ ~ tag @a remove hunter
execute @a[tag=host,scores={settings_state=0}] ~ ~ ~ tag @a remove speedrunner
execute @a[tag=host,scores={settings_state=1,players=..1}] ~~~ title @a actionbar §eYou need at least 2 players to start the game
execute @a[tag=host,scores={settings_state=1,players=2..}] ~~~ title @a actionbar §eStart the game by executing §b/function start
execute @a[tag=host,scores={settings_state=1}] ~~~ effect @a weakness 1 255 true
execute @a[tag=host,scores={settings_state=1}] ~~~ effect @a saturation 1 255 true

#spectating
execute @a[tag=spec] ~ ~ ~ function spec
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=!speedrunner,tag=!hunter,tag=!spec] ~ ~ ~ tellraw @s {"rawtext":[{"text":"§b§lGame §r>> §aYou are spectating the match, please do not leave until the match ends."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=!speedrunner,tag=!hunter,tag=!spec] ~ ~ ~ ability @s mayfly true
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=!speedrunner,tag=!hunter,tag=!spec] ~ ~ ~ gamemode a @s
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=!speedrunner,tag=!hunter,tag=!spec] ~ ~ ~ tp @s @r[tag=!spec]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=!speedrunner,tag=!hunter,tag=!spec] ~ ~ ~ tag @s add spec
execute @a[tag=host,scores={settings_state=2}] ~~~ clear @a[tag=!speedrunner,tag=!hunter,tag=spec]

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

execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ tellraw @a {"rawtext":[{"text":"§b§lGame §r>> §eHunters ran out of time! Speedrunner won the game!"}]}
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ title @a title §cGame ended
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ title @a[tag=speedrunner] subtitle §eCongrats!
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ title @a[tag=speedrunner] title §eYou have won!
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ title @a[tag=hunter] subtitle §cYou lost!
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ title @a[tag=hunter] title 
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ gamemode 2 @a
execute @a[tag=host,scores={settings_state=2,speed_alive=1,hunt_alive=1..}] ~~~ xp -32427l @a
execute @a[tag=host,scores={settings_state=2,hunt_alive=1..}] ~~~ tag @a remove hunter
execute @a[tag=host,scores={settings_state=2,speed_alive=1}] ~~~ tag @a remove speedrunner
execute @a[tag=host,scores={settings_state=2,speed_alive=0,hunt_alive=0}] ~~~ tag @a remove spec
execute @a[tag=host,scores={settings_state=2,speed_alive=0,hunt_alive=0}] ~~~ scoreboard players set @s settings_state 0
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

kill @e[type=xp_orb]
execute @a[tag=host,scores={settings_state=0}] ~~~ effect @a instant_health 1 255 true
execute @a[tag=host,scores={settings_state=1}] ~~~ effect @a instant_health 1 255 true
#something else
execute @a[tag=host,scores={settings_state=1}] ~~~ gamemode adventure @a
execute @a[tag=host,scores={settings_state=2}] ~~~ gamemode survival @a[tag=!spec]