@echo off
REM This file is used to remove "compile-addon" and "ModifyJSON" directories
echo You're about to remove "compile-addon" and "ModifyJSON" directories
pause
setlocal
rd compile-addon /s /q
rd ModifyJSON /s /q