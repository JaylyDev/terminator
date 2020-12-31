tag @r[tag=!launch,c=0] add launch
scoreboard objectives add launch dummy
execute @a[tag=launch] ~ ~ ~ scoreboard players set @s launch 0
execute @a[tag=launch,scores={launch=0}] ~ ~ ~ tag @s add host
execute @a[tag=launch,scores={launch=0}] ~ ~ ~ function launcher/loadcmd
execute @a[tag=launch,scores={launch=0}] ~ ~ ~ tag @s add host
execute @a[tag=launch,scores={launch=0}] ~ ~ ~ scoreboard players set @s launch 1
execute @a[tag=launch,scores={launch=1}] ~ ~ ~ tag @a remove launch