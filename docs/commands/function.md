<!--
This documentation is a fork of @bigguy69420 documentation <https://github.com/bigguy69420/terminator/blob/e965e3461fac7de1449eb138af05c9c6879c7dca/docs/commands/function.md>
Modified by @JaylyDev <https://github.com/JaylyDev/terminator>
-->
# Function Commands
Function commands allows players to run lists of commands using files in .mcfunction extension.

Available to Minecraft: Bedrock Edition v1.8.0 or above.

## Infomation
**Latest Version:** 1.0.29 (23/1/2022)

`/function` command does not accept additional JSON Object format of NBT data input.

For more infomation please check [**GameTest commands**](https://github.com/JaylyDev/terminator/blob/main/docs/commands/gametest.md) article

## Commands
### /function player/kit/
**Definition:** This command module gives player armor and weapons to target

**Example:** `/function player/kit/chainmail`
Command | Armor | Weapon
-|-|-
chainmail | chailmail armor | stone sword
diamond | diamond armor | diamond sword
golden | golden armor | golden sword
iron | iron armor | iron sword
leather | leather armor | wooden sword
netherite | netherite armor | netherite sword

----
### /function terminator
This command summons a terminator with default properities

----
### /function terminator/debug/commands/death_detect/NoRespawnDev
This command summons a terminator with "terminator:dev:death_reason" component group
> This description needs more infomation

----
### /function terminator/debug/commands/tellraw/death_message
This executes terminator to display every death message
> This description needs more infomation

----
### /function terminator/debug/components/break_blocks
This command checks if entity component `minecraft:break_blocks` is attached to all terminators

----
### /function terminator/debug/components/move_to_block
This command checks if entity component `minecraft:move_to_block` is attached to all terminators

----
### /function terminator/kit/
**Definition:** The commands in the module summons a terminator with armor and weapons and give all existing terminators armor and weapons

**Example:** `/function terminator/kit/chainmail`
Command | Armor | Weapon
-|-|-
chainmail | chailmail armor | stone sword
diamond | diamond armor | diamond sword
golden | golden armor | golden sword
iron | iron armor | iron sword
leather | leather armor | wooden sword
netherite | netherite armor | netherite sword

----
### /function terminator/nbt
> This category is an older version of GameTest commands, each command summons a terminator with one "NBT data" input only.

> For an updated version, please check [**GameTest commands**](https://github.com/JaylyDev/terminator/blob/main/docs/commands/gametest.md) article

**customskin** - summons a terminator with custom skin

**enableBossbar** - summons a terminator with boss bar enabled
![85E51C9D-EAC9-43D8-B86F-713C87F6083B](https://user-images.githubusercontent.com/91819282/151036028-cf8ebbac-4624-4ff1-9924-58931a516c1d.jpeg)

**invulnerable** - summons an invulnerable terminator
> This command description needs more detail

**nodeathevent** - summons a terminator with death event disabled

**nophysics** - summons a terminator without physics

**noregen** - summons a terminator without regeneration
> This command description needs more detail

**norespawn** - summons a terminator with one life only

----
### /function changelog
Changelog of the add-on

----
### /function killall
Kills all terminator without respawning

---
