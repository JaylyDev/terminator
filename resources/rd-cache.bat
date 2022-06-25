@echo off
REM This file is used to remove "compile-addon" and "ModifyJSON" directories
echo Removing "compile-addon" and "ModifyJSON" directories
setlocal
rd compile-addon /s /q
rd ModifyJSON /s /q

rd %localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\resource_packs\Terminator /s /q
rd %localappdata%\Packages\Microsoft.MinecraftUWP_8wekyb3d8bbwe\LocalState\games\com.mojang\behavior_packs\Terminator /s /q
