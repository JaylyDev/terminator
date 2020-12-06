execute @a[tag=host,scores={settings_state=2}] ~~~ tellraw @a {"rawtext":[{"text":"§b§lGame §r>> §eSpeedrunner killed the Ender Dragon! Speedrunner won!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a title §cGame ended
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner] subtitle §eCongrats!
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner] title §eYou have won!
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=hunter] subtitle §cYou lost!
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=hunter] title 
execute @a[tag=host,scores={settings_state=2}] ~~~ gamemode 2 @a
execute @a[tag=host,scores={settings_state=2}] ~~~ xp -32427l @a
execute @a[tag=host,scores={settings_state=2}] ~~~ tag @a remove hunter
execute @a[tag=host,scores={settings_state=2}] ~~~ tag @a remove speedrunner
execute @a[tag=host,scores={settings_state=2}] ~~~ tag @a remove spec
execute @a[tag=host,scores={settings_state=2}] ~~~ scoreboard players set @s settings_state 0
execute @a[tag=host,scores={settings_state=0}] ~ ~ ~ scoreboard objectives setdisplay sidebar