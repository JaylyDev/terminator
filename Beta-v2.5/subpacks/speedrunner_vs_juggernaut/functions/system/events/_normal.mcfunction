#gp
execute @s[tag=host,scores={settings_state=2,settings_warmup=0,timer=17999}] ~~~ tellraw @a {"rawtext":[{"text":"§ePVP has been turned on."}]}
execute @s[tag=host,scores={settings_state=2,settings_warmup=0,timer=17999}] ~~~ gamerule pvp true
execute @s[tag=host,scores={settings_state=2,settings_warmup=0,timer=17700}] ~~~ gamerule falldamage true

execute @s[tag=host,scores={settings_state=2,settings_warmup=1,timer=17999}] ~~~ tellraw @a {"rawtext":[{"text":"§ePVP will be turned on in §c1§e minute!"}]}
execute @s[tag=host,scores={settings_state=2,settings_warmup=1,timer=17400}] ~~~ tellraw @a {"rawtext":[{"text":"§ePVP has been turned on."}]}
execute @s[tag=host,scores={settings_state=2,settings_warmup=1,timer=17400}] ~~~ gamerule pvp true
execute @s[tag=host,scores={settings_state=2,settings_warmup=1,timer=17400}] ~~~ gamerule falldamage true

#heal
execute @s[tag=host,scores={settings_state=2,settings_healing=1,timer=17400}] ~~~ effect @a saturation 1 255 true
execute @s[tag=host,scores={settings_state=2,settings_healing=1,timer=17400}] ~~~ effect @a instant_health 1 255 true
execute @s[tag=host,scores={settings_state=2,settings_healing=1,timer=17400}] ~~~ tellraw @a {"rawtext":[{"text":"§aEveryone has been healed!"}]}

execute @s[tag=host,scores={settings_state=2,settings_healing=1,timer=12000}] ~~~ effect @a saturation 1 255 true
execute @s[tag=host,scores={settings_state=2,settings_healing=1,timer=12000}] ~~~ effect @a instant_health 1 255 true
execute @s[tag=host,scores={settings_state=2,settings_healing=1,timer=12000}] ~~~ tellraw @a {"rawtext":[{"text":"§aEveryone has been healed!"}]}

execute @s[tag=host,scores={settings_state=2,settings_healing=1,timer=6000}] ~~~ effect @a saturation 1 255 true
execute @s[tag=host,scores={settings_state=2,settings_healing=1,timer=6000}] ~~~ effect @a instant_health 1 255 true
execute @s[tag=host,scores={settings_state=2,settings_healing=1,timer=6000}] ~~~ tellraw @a {"rawtext":[{"text":"§aEveryone has been healed!"}]}

execute @s[tag=host,scores={settings_state=2,settings_healing=1,timer=2400}] ~~~ effect @a saturation 1 255 true
execute @s[tag=host,scores={settings_state=2,settings_healing=1,timer=2400}] ~~~ effect @a instant_health 1 255 true
execute @s[tag=host,scores={settings_state=2,settings_healing=1,timer=2400}] ~~~ tellraw @a {"rawtext":[{"text":"§aEveryone has been healed!\n§cThis is the final heal of this game."}]}

#display
execute @s[tag=host,scores={settings_state=2,timer=17400}] ~~~ scoreboard players set "§f " display -1
execute @s[tag=host,scores={settings_state=2,timer=17400}] ~~~ scoreboard players set "Match End in" display -2

execute @s[tag=host,scores={settings_state=2,timer=17400}] ~~~ scoreboard players set "§a28 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=16800}] ~~~ scoreboard players reset "§a28 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=16800}] ~~~ scoreboard players set "§a27 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=16200}] ~~~ scoreboard players reset "§a27 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=16200}] ~~~ scoreboard players set "§a26 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=15600}] ~~~ scoreboard players reset "§a26 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=15600}] ~~~ scoreboard players set "§a25 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=15000}] ~~~ scoreboard players reset "§a25 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=15000}] ~~~ scoreboard players set "§a24 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=14400}] ~~~ scoreboard players reset "§a24 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=14400}] ~~~ scoreboard players set "§a23 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=13800}] ~~~ scoreboard players reset "§a23 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=13800}] ~~~ scoreboard players set "§a22 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=13200}] ~~~ scoreboard players reset "§a22 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=13200}] ~~~ scoreboard players set "§a21 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=12600}] ~~~ scoreboard players reset "§a21 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=12600}] ~~~ scoreboard players set "§a20 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=12000}] ~~~ scoreboard players reset "§a20 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=12000}] ~~~ scoreboard players set "§a19 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=11400}] ~~~ scoreboard players reset "§a19 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=11400}] ~~~ scoreboard players set "§a18 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=10800}] ~~~ scoreboard players reset "§a18 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=10800}] ~~~ scoreboard players set "§a17 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=10200}] ~~~ scoreboard players reset "§a17 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=10200}] ~~~ scoreboard players set "§a16 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=9600}] ~~~ scoreboard players reset "§a16 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=9600}] ~~~ scoreboard players set "§a15 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=9000}] ~~~ scoreboard players reset "§a15 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=9000}] ~~~ scoreboard players set "§a14 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=8400}] ~~~ scoreboard players reset "§a14 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=8400}] ~~~ scoreboard players set "§a13 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=7800}] ~~~ scoreboard players reset "§a13 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=7800}] ~~~ scoreboard players set "§a12 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=7200}] ~~~ scoreboard players reset "§a12 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=7200}] ~~~ scoreboard players set "§a11 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=6600}] ~~~ scoreboard players reset "§a11 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=6600}] ~~~ scoreboard players set "§a10 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=6000}] ~~~ scoreboard players reset "§a10 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=6000}] ~~~ scoreboard players set "§a9 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=5400}] ~~~ scoreboard players reset "§a9 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=5400}] ~~~ scoreboard players set "§a8 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=4800}] ~~~ scoreboard players reset "§a8 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=4800}] ~~~ scoreboard players set "§a7 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=4200}] ~~~ scoreboard players reset "§a7 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=4200}] ~~~ scoreboard players set "§a6 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=3600}] ~~~ scoreboard players reset "§a6 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=3600}] ~~~ scoreboard players set "§a5 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=3000}] ~~~ scoreboard players reset "§a5 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=3000}] ~~~ scoreboard players set "§a4 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=2400}] ~~~ scoreboard players reset "§a4 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=2400}] ~~~ scoreboard players set "§a3 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=1800}] ~~~ scoreboard players reset "§a3 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=1800}] ~~~ scoreboard players set "§a2 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=1200}] ~~~ scoreboard players reset "§a2 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=1200}] ~~~ scoreboard players set "§a1 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=600}] ~~~ scoreboard players reset "§a1 minutes!" display
execute @s[tag=host,scores={settings_state=2,timer=600}] ~~~ scoreboard players set "§a0 minutes!" display -3
execute @s[tag=host,scores={settings_state=2,timer=0}] ~~~ scoreboard players reset "§a0 minutes!" display


execute @s[tag=host,scores={settings_state=2,timer=0}] ~~~ scoreboard players reset "Match end in" display