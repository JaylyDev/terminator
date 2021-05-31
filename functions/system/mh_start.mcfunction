#Assign players roles
tag @s add speedrunner
tag @a[tag=!speedrunner] add hunter
tag @a add "game_is_running"

#introduction to the game
tellraw @a {"rawtext":[{"text":"§6§lMinecraft Manhunt"}]}
tellraw @a {"rawtext":[{"text":"―――――――――――――――――"}]}
tellraw @a {"rawtext":[{"text":"§b§lThe Speedrunner's goal §r§bis to beat Minecraft"}]}
tellraw @a {"rawtext":[{"text":"§bIf they beat Minecraft before killed by hunter(s), the speedrunner wins. If the speedrunner died, they lose."}]}
tellraw @a {"rawtext":[{"text":"―――――――――――――――――"}]}
tellraw @a {"rawtext":[{"text":"§c§lThe Hunter's goal §r§cis to kill the speedrunner before they beat Minecraft."}]}
tellraw @a {"rawtext":[{"text":"§cHunters have a working compass to track the speedrunner in the overworld."}]}
tellraw @a {"rawtext":[{"text":"§cHunters also have unlimited life and they won't lose their compass."}]}

gamemode s @a