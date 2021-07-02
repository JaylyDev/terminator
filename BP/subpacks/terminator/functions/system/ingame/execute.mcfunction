gamemode survival @a[tag=game_is_running,m=!survival,tag=!dev]
scoreboard players add @a[scores={compass_cd=1..}] compass_cd -1
execute @a[tag=host] ~ ~ ~ scoreboard players set @s terminators 0
execute @e[type=entity:terminator] ~ ~ ~ execute @a[tag=host] ~ ~ ~ scoreboard players add @s terminators 1
execute @a[tag=host] ~ ~ ~ scoreboard players set @s speedrunners 0
execute @a[tag=speedrunner] ~ ~ ~ execute @a[tag=host] ~ ~ ~ scoreboard players add @s speedrunners 1
execute @a[tag=host,tag=game_is_running] ~ ~ ~ tag @e[type=entity:terminator] add game_is_running
execute @a[tag=host,tag=game_is_running,scores={terminators=..0}] ~ ~ ~ summon entity:terminator ~ ~ ~
effect @e[type=entity:terminator] regeneration 1 255 true
effect @a[tag=spectate] invisibility 10 255 true
execute @a[tag=spectate] ~~~ function system/ingame/speedrunnerdeath