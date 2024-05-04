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

## Add-On Codebase

- Migrated Terminator spawn event to Script API
- All the function files comments changed from "All rights reserved" to "Licensed under the GPL-3.0 License"
- Addon now requires Minecraft version 1.21.0 to run properly.
- Using `@minecraft/server` module from `1.6.0` to `1.10.0`
