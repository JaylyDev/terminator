execute @s[tag=host,scores={settings_state=2}] ~~~ title @a[tag=hunter] actionbar Find and kill §c@a[tag=speedrunner]§r.

kill @e[type=item,name="Kompass"]
kill @e[type=item,name="Kompas"]
kill @e[type=item,name="Compass"]
kill @e[type=item,name="Kompas"]
kill @e[type=item,name="Πυξίδα"]
kill @e[type=item,name="Boussole"]
kill @e[type=item,name="Brújula"]
kill @e[type=item,name="Kompassi"]
kill @e[type=item,name="Brújula"]
kill @e[type=item,name="Компас"]
kill @e[type=item,name="Boussole"]
kill @e[type=item,name="Kompas"]
kill @e[type=item,name="コンパス"]
kill @e[type=item,name="Iránytű"]
kill @e[type=item,name="Bussola"]
kill @e[type=item,name="나침반"]
kill @e[type=item,name="Kompass"]
kill @e[type=item,name="Kompas"]
kill @e[type=item,name="Kompas"]
kill @e[type=item,name="Bússola"]
kill @e[type=item,name="Kompas"]
kill @e[type=item,name="Pusula"]
kill @e[type=item,name="Bússola"]
kill @e[type=item,name="Компас"]
kill @e[type=item,name="Компас"]
kill @e[type=item,name="Kompass"]
kill @e[type=item,name="指南針"]
kill @e[type=item,name="指南针"]

#alive player counter 
execute @s[tag=host] ~~~ scoreboard players set @a[tag=host] players 0
execute @s[tag=host] ~~~ scoreboard players set @a[tag=host] speed_alive 0
execute @s[tag=host] ~~~ scoreboard players set @a[tag=host] hunt_alive 0
execute @s[tag=host] ~~~ scoreboard players set @a[tag=host] track_count 0
scoreboard players set @a counter 1
execute @s[tag=host] ~~~ scoreboard players set @a[tag=speedrunner] speedcount 1
execute @s[tag=host] ~~~ scoreboard players set @a[tag=hunter] huntcount 1
execute @s[tag=host] ~~~ scoreboard players set @a[tag=track] trackcount 1

execute @s[tag=host] ~~~ execute @a ~~~ scoreboard players operation @a[tag=host] players += @s counter
execute @s[tag=host,scores={settings_state=1}] ~~~ scoreboard players operation  "§aJoined: " display = @a[tag=host] players
execute @s[tag=host,scores={settings_state=2}] ~~~ scoreboard players reset "§aJoined: " display
#speedrunner counter
execute @s[tag=host] ~~~ scoreboard players operation @a[tag=host] speed_alive += @a[tag=speedrunner] speedcount
execute @s[tag=host] ~~~ scoreboard players operation @a[tag=host] hunt_alive += @a[tag=hunter] huntcount
execute @s[tag=host] ~~~ scoreboard players operation @a[tag=host] track_count += @a[tag=track] trackcount
execute @s[tag=host,scores={settings_state=2}] ~~~ scoreboard players operation  "§bSpeedrunner: " display = @a[tag=host] speed_alive
execute @s[tag=host,scores={settings_state=2}] ~~~ scoreboard players operation  "§cHunters: " display = @a[tag=host] hunt_alive
execute @s[tag=host,scores={settings_state=1}] ~~~ scoreboard players reset "§bSpeedrunner: " display
execute @s[tag=host,scores={settings_state=1}] ~~~ scoreboard players reset "§cHunters: " display
    
#spec
execute @s[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~ ~ ~ tag @s remove speedrunner
execute @s[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~ ~ ~ tag @s remove hunter
execute @s[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~ ~ ~ title @a[tag=spec] actionbar §e§lSpectating
execute @s[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~ ~ ~ gamemode a @s
xp -100l @a[tag=!Speedrunner,tag=!Hunter,tag=spec]
effect @a[tag=!Speedrunner,tag=!Hunter,tag=spec] invisibility 1 255 true
effect @a[tag=!Speedrunner,tag=!Hunter,tag=spec] weakness 1 255 true
effect @a[tag=!Speedrunner,tag=!Hunter,tag=spec] fire_resistance 1 255 true
effect @a[tag=!Speedrunner,tag=!Hunter,tag=spec] water_breathing 1 255 true
effect @a[tag=!Speedrunner,tag=!Hunter,tag=spec] regeneration 1 255 true

ability @a[tag=spec,tag=!fly] mayfly true
tag @a[tag=spec,tag=!fly] add fly