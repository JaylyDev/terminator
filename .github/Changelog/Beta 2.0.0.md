# 2.0.0-beta

Once again, I'm rewriting this add-on so it works in latest versions of Minecraft - The 1.21 Update, I mean the Tricky Trials Update. This update includes the codebase of the add-on migrating from JSON to TypeScript, tons of bug fixes, and experimental features! Sounds impressive? Let's dive in.

## Terminator Repository

- Added eslint configuration for Minecraft linting.
- Scripting codebase now migrated to TypeScript.
- Updated all the links related to support Discord server and more.
- Using `Node.gitignore` and `Python.gitignore` template.
- Removed `destruc7i0n.vscode-bedrock-definitions` vscode extension.
- Added new build and deploy tasks locally for vscode.
- Renamed the 'data' folder to 'assets' folder to suit the workflow condition.
- Removed useless junk files.
- Added new CI workflows

## Add-On Codebase

- Migrated Terminator spawn event to Script API
- All the function files comments changed from "All rights reserved" to "Licensed under the GPL-3.0 License"
- Using `@minecraft/server` module from `1.6.0` to `1.9.0`
- Converted all mark_variant related to entity properties.
- Rewrite sitting behavior to TypeScript.
- Converted some animation controller commands to TypeScript via scriptevent.
- Converted building and breaking blocks source to TypeScript via scriptevent.

## Engine Changes

- Add-On now no longer requires experiments to run.
- Addon now requires Minecraft version 1.20.70 or above to run properly.
- Fix a bug where addon can be applied to Global Resources.
- Converted `glow_squid` family to `squid`

## Function Commands Changes

- Fixed invalid command syntax which caused add-on not being to run properly.
- Function commands are being deprecated in v2.0.0, and it will be replaced by script forms which will be released in future v2.0.0 beta updates.

## Terminator Entity Changes

- Fix a bug where terminator unable to bridge towards northwest direction.
- Updated terminator to leave chest boats.
- Updated unbreakable blocks list so terminator cannot break blocks with blast resistance of 100 or above, which includes the following:
  - Barrier
  - Light Block
  - Bedrock
  - Command Block
  - End Gateway
  - End Portal
  - End Portal Frame
  - Jigsaw
  - Structure Block
  - Water
  - Lava
  - Flowing Lava
  - Flowing Water
  - Air
- Add-On now detects death causes and broadcast death messages added from 1.20.
