execute @a ~ ~ ~ execute @a[tag=host] ~ ~ ~ scoreboard players add @s players 1
execute @a ~ ~ ~ execute @a[tag=host] ~ ~ ~ scoreboard players set @s players 0
gamemode a @a[tag=!"game_is_running"]
effect @a instant_health 60 255 true