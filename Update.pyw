# Copyright (c) JaylyDev.  All rights reserved.
# Copyrights licensed under the MIT License.
# See the accompanying LICENSE (https://github.com/JaylyDev/JaylyTerminal/blob/master/LICENSE) file for terms.

# THIS FILE IS USED FOR ADDON DEVELOPMENT

#functions import
import os
import getpass
import tkinter
from distutils.dir_util import copy_tree
from distutils.dir_util import remove_tree
from distutils import log
from tkinter import messagebox
from os import system as cmd
        
def jt_dircopy_exe(fromDirectory, toDirectory, logEnabled):
    try:
        if logEnabled == True:
            print(log.set_verbosity(log.INFO))
            print(log.set_threshold(log.INFO))
            copy_tree(fromDirectory, toDirectory)
        else:
            copy_tree(fromDirectory, toDirectory)
    except Exception as Error:
        if logEnabled == True:
            print("Error: " + str(Error))
        else:
            root = tkinter.Tk()
            root.withdraw()
            messagebox.showerror("Manhunt Update", "Error: " + str(Error))

def restart_minecraft():
    root = tkinter.Tk()
    root.withdraw()
    # Restart Minecraft
    RestartMC = messagebox.askyesno(title="Manhunt Update", message="Do you want to restart Minecraft to apply changes?", icon = "warning")
    DisplayDirectory = messagebox.askyesno(title="Manhunt Update", message="Do you want to reveal the directory in File Explorer?")
    if RestartMC == True:
        try:
            cmd("taskkill /f /IM Minecraft.Windows.exe")
        except:
            pass
        try:
            cmd("explorer.exe shell:appsFolder\Microsoft.MinecraftUWP_8wekyb3d8bbwe!App")
        except Exception as Error:
            messagebox.showerror("Manhunt Updates", Error)
    # Reveal in File Explorer
    if DisplayDirectory == True:
            cmd("explorer.exe " + toDirectory)
    else:
        pass
        
username = getpass.getuser()
fromDirectory = "C:\\Users\\" + username + "\\Documents\\GitHub\\manhunt"
toDirectory = "C:\\Users\\" + username + "\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\behavior_packs\\MinecraftM (1)"
logEnabled = False

cmd("rd " + toDirectory + " /s /q")
cmd("md \"" + toDirectory + "\"")
jt_dircopy_exe(fromDirectory, toDirectory, logEnabled)
restart_minecraft()
