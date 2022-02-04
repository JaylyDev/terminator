# GameTest Commands
GameTest Commands is a new toolset available to players customize terminator's entity behavior.
It's dependent with GameTest Framework in Minecraft: Bedrock Edition.

## Infomation
-----

### Latest Versions

**GameTest Framework (Minecraft)**: 

Status | Version
-|-
Stable | <center>v1.16.210.05<br>v1.17.30.04<br>v1.18.10.20
Beta | <center>v1.18.20.23

**GameTest Commands (Add-on module)**: v0.4.35

-----
GameTest commands are still in development and it's experimental.
Documentation usually is updated to latest version.
To check what version of GameTest Commands you have installed, type the following in Minecraft chat:
```
#version module
```
If the version is the same as the documentation, this article is up to date.

If not, [Click here](https://github.com/JaylyDev/terminator/issues/new?assignees=&labels=bug&template=bug_report.md&title=GameTest%20Commands%20documentation%20is%20not%20up%20to%20date) to create a bug report.

## Commands
### #version
This command displays the version of Minecraft GameTest Framework and GameTest add-on module.

**Usage:** `#version <module: string>`

**Sub-commands:**

`#version gametest` - This command shows Minecraft Bedrock version that uses the according version of GameTest Framework.

`#version module` - This command shows the version of add-on gametest custom commands module. 

-----
### #summon
This command summons an entity along with multiple events added to the entity behavior.

**Usage:** `#summon <entity: string> <NBT Data: JSON object>`

**Example:** `#summon terminator { "nametag": "Terminator", "customskin": false }`

**Available entities** - The following list is entities that can be spawned with the `#summon` command:

Entity | Minecraft Identifier | #summon Identifier
-|-|-
Terminator | entity:terminator | terminator

**NBT Data** - The following table shows which entity can use NBT data:

### Entity: terminator

NBT Data | Variable type | Default value | Available Version
-|-|-|-
nametag | string | "Terminator" | Above v1.16.210
customskin | boolean | false | Above v1.16.210
bossbar | boolean | false | Above v1.16.210
invulnerable | boolean | false | Above v1.16.210
deathevent | boolean | true | Above v1.16.210
physics | boolean | true | Above v1.16.210
regeneration | boolean | true | Above v1.16.210
respawn | boolean | true | Above v1.16.210
breedable | boolean | false | Above v1.16.210
coords | object | ```{"x": "~", "y": "~", "z": "~"}``` | Above v1.18.10
skinmodel | string | "steve" | Above v1.16.210

-----
### #changeSkin
This command creates an UI popup and allows player to change skin for existing terminators
> This command is a test for new "mojang-minecraft-ui" GameTest Framework module

**Usage:** `#changeSkin`

> Available to 
> - Minecraft beta 1.18.20.21 or above
> - Add-on GameTest v0.4.35