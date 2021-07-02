scoreboard objectives add players dummy
tag @s add user
execute @a ~ ~ ~ execute @a[tag=user] ~ ~ ~ scoreboard players set @s players 0
execute @a ~ ~ ~ execute @a[tag=user] ~ ~ ~ scoreboard players add @s players 1
execute @s[tag=user,tag=!verified,scores={players=..1}] ~~~ function launcher/setup