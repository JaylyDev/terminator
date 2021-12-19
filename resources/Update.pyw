# Copyright (c) JaylyDev.  All rights reserved.
# Copyrights licensed under the MIT License.
# This file is a modified version of a copy of a program "JaylyTerminal" by JaylyDev.
# See the accompanying LICENSE (https://github.com/JaylyDev/JaylyTerminal/blob/master/LICENSE) file for terms.
# THIS FILE IS USED FOR ADDON DEVELOPMENT

#functions import
import getpass
import tkinter
from distutils.dir_util import copy_tree
from distutils import log
from tkinter import messagebox
from tkinter import filedialog
from os import fsdecode, system as run
from timeit import default_timer
        
def jt_dircopy_exe(fromDirectory, toDirectory, logEnabled):
    try:
        if logEnabled == True:
            print(log.set_verbosity(log.INFO))
            print(log.set_threshold(log.INFO))
            copy_tree(fromDirectory, toDirectory)
        else: copy_tree(fromDirectory, toDirectory)
    except Exception as Error:
        if logEnabled == True: print("Error: " + str(Error))
        else:
            root = tkinter.Tk()
            root.withdraw()
            messagebox.showerror("Terminator Update", "Error: " + str(Error))

def restart_minecraft(appid, appname):
    cd = 0
    root = tkinter.Tk()
    root.withdraw()
##    RestartMC = messagebox.askyesno(title="Terminator Update", message="Do you want to restart Minecraft to apply changes?", icon = "warning") # Restart Minecraft
##    DisplayDirectory = messagebox.askyesno(title="Terminator Update", message="Do you want to reveal the directory in File Explorer?")
    RestartMC = True
    DisplayDirectory = False
    if RestartMC == True:
        try:
            if location == "client":
                run("taskkill /f /IM " + appname)
                start = default_timer()
                duration = 0
        except: pass
        while duration <= 5:
            duration = default_timer() - start
            if duration >= 5:
                try:
                    if location == "client":
                        run("explorer.exe " + appid)
                except Exception as Error: print(Error)
    # Reveal in File Explorer
    if DisplayDirectory == True:
        run("explorer.exe " + toDirectory_rp)
        run("explorer.exe " + toDirectory_bp)
    else: pass

username = getpass.getuser()
fromDirectory_rp = "C:\\Users\\" + username + "\\Documents\\GitHub\\terminator\\data\\resource_pack"
fromDirectory_bp = "C:\\Users\\" + username + "\\Documents\\GitHub\\terminator\\data\\behavior_pack"
requested = False
logEnabled = False

while requested == False:
    root = tkinter.Tk()
    root.withdraw()
    locate = messagebox.askyesnocancel(title="Terminator Update", message="Press 'Yes' to save to Minecraft\nPress 'No' to save to Server\nPress 'Cancel' to cancel process")
    if locate == True:
        location = "client"
    if locate == False:
        location = "server"
    else: exit

    try:
        if location == "client":
            toDirectory_rp = "C:\\Users\\" + username + "\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\resource_packs\\Terminator"
            toDirectory_bp = "C:\\Users\\" + username + "\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\behavior_packs\\Terminator"
            appid = "shell:appsFolder\Microsoft.MinecraftUWP_8wekyb3d8bbwe!App"
            appname = "Minecraft.Windows.exe"
            requested = True
        elif location == "server":
            toDirectory_rp = "D:\\Bedrock Servers\\Bedrock Testing\\worlds\\Terminator\\resource_packs\\Terminator"
            toDirectory_bp = "D:\\Bedrock Servers\\Bedrock Testing\\worlds\\Terminator\\behavior_packs\\Terminator"
            appid = ""
            appname = ""
            requested = True
    except: pass

run("rd \"" + toDirectory_rp + "\" /s /q")
run("rd \"" + toDirectory_bp + "\" /s /q")
run("md \"" + toDirectory_rp + "\"")
run("md \"" + toDirectory_bp + "\"")
jt_dircopy_exe(fromDirectory_rp, toDirectory_rp, logEnabled)
jt_dircopy_exe(fromDirectory_bp, toDirectory_bp, logEnabled)