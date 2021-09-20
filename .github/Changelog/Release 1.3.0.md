# Release 1.3.0.50
> Release Date: 19/9/2021

Offical release for Minecraft Terminator v1.3.0

## Download:
[Terminator v1.3.0 (linkvertise)](https://file-link.net/329333/mcrobot)

## New features
This category shows things that added from the last release
- Added "AdvancedBuilding" module into animation controller

  > "AdvancedBuilding" module is not used at all in current version of add-on

  > I left cache files there just so people who found those could experiment it

  > The folder has been set to read-only

  > For more info check "README.txt" on "BP/animation_controllers/AdvancedBuilding"

- Updated Terminator's **building module** from v1 to v2 (Build 186)
- Updated Terminator's **break blocks module** from v1 to v2
- **Added various combat method** to terminator
- Added an event that allows terminator to make a nether portal (WIP)
  
  > Since this event is not possible to be executed by the terminator automatically, this requires players to execute it for the terminator.
  
  > Execute this command `/event entity @e[family=terminator] terminator:make_nether_portal` to execute this event for terminator

- Added various animations to terminator's property
- Added `/function terminator/nodeathevent`: This summons the terminator that excludes death event
- Added `/function terminator/changelog`: This shows terminator add-on changelog
- Added components related to the association with the terminator and powder snow
- Terminator now avoids TNTs and creepers
- Terminator can now walk in lava
- Terminator can now path from air
- Terminator now avoid lava and flowing lava

### Combat Changelog
In order for the terminator to use different kinds of combat, they need to pick up the weapon in order to switch combat mechanic.
- Added crossbow into terminator's combat method
  Terminator is now able to use crossbow to shoot arrows
- Added bow into terminator's combat method
  Terminator is now able to use bow to shoot arrows
- Added shield to terminator's combat method

   The shield disables damage cause by:
   - Block explosion
   - Entity attack
   - Entity explosion
   - Projectile

- Speed multiplier for melee combat has been increased to 130%
- Terminator's attack damage has been decreased from 3 damage to 1
- Added crossbow to list of items terminator wants
- Added trident ranged and melee combat into terminator's combat method

## Changes
This category shows things that existed in previous versions that's modified from the last release
- Changed terminator's movement speed from 0.4-0.5 to 0.4317
- Decreased terminator's health from 100hp to 40hp
- Removed doors and trapdoors from terminator's breakable blocks list
- Bossbar range has decreased from 1024 to 64 blocks radius
- Improved terminator's escape pathfinding
- Modified Terminator's generic pathfinding
- Terminator now attacks tamed wolfs that doesn't have the invisibility effect
- Modified `/function terminator/changelog` format
- Fix a bug related to `/function terminator/kit/*` commands
- Minimum Engine Version has been updated from 1.16.100 to 1.17.0
  Terminator add-on now uses a more recent version of Minecraft.
- Modified Terminator's sitting environment
  Terminator now leaves rideable entities (boat & minecart) when their target is player or iron golem
- Changed terminator spawning loot table
- Terminator is now able to track players within a 2048 blocks radius
- Players now can only feed terminator that does not have full health or a target

## Bug fixes
<!-- Compare v1.2.23 to v1.3.0 -->
Following bugs have been fixed in this version of add-on:
- Variable 'variable.dummytime' is now handled when terminator's respawn event starts

  [Molang][error]-Error: unhandled request for unknown variable 'variable.dummytime'

  Bug occurs from v1.1.7 to v1.2.23 and v1.2.100

- Terminator spawning sound effect can now only hear by nearby players

  Terminator spawning sound effect was heard all over the world

  Bug occurs from v1.1.0 to v1.2.23 and v1.2.100

- Removed "speed_multiplier" and "ranged_fov" from ranged attack

  Ranged attack is broken

<!-- Compare beta v1.2.11 to v1.2.23 -->
- Entities no longer get damaged by the particles happened in the respawn event

  Bug occurs from v1.1.7 to v1.2.11

- Fixed terminator's building issues
- Fixed terminator's environment sensor
- Fixed terminator's target AI behaviours

## Installations:
This Add-On is released for Minecraft version 1.17, but there is a chance of it being compatible for Minecraft version 1.16.100+

When you're installing this Add-On in Minecraft 1.17, these are the experimentals options required to be activated.

![image](https://media.discordapp.net/attachments/571487722934370314/865864657171644446/requirement.png)

> Starting from Minecraft Beta 1.17.30.21, you need to enable "Experimental Molang Features" in experimental section in game settings for the add-on to function properly.