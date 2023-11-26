# Copyright (c) JaylyDev.  All rights reserved.
# Copyrights licensed under the MIT License.
# This file is a modified version of a copy of a program "JaylyTerminal" by JaylyDev.
# See the accompanying LICENSE (https://github.com/JaylyDev/JaylyTerminal/blob/master/LICENSE) file for terms.
# THIS FILE IS USED FOR ADDON DEVELOPMENT

#functions import
import getpass
from importlib.resources import Package
import tkinter
from distutils.dir_util import copy_tree
from distutils import log
from tkinter import messagebox
from os import system as run
from timeit import default_timer
        
def jt_dircopy_exe(fromDirectory, toDirectory, logEnabled, PackageName):
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
            messagebox.showerror(PackageName, "Error: " + str(Error))

username = getpass.getuser()
fromDirectory_rp = ".\\resources\\ModifyJSON\\resource_pack"
fromDirectory_bp = ".\\resources\\ModifyJSON\\behavior_pack"
logEnabled = False
PackageName = "Package Update"

root = tkinter.Tk()
root.withdraw()
locate = messagebox.askyesno(title=PackageName, message="Press 'Yes' to save to Minecraft\nPress 'No' to cancel process")
if locate == True:
    try:
        run(".\\resources\\rd-cache.bat")
        run("node .\\resources\\ModifyJSON.js")

        toDirectory_rp = "C:\\Users\\" + username + "\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_resource_packs\\Terminator"
        toDirectory_bp = "C:\\Users\\" + username + "\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\development_behavior_packs\\Terminator"
        appid = "shell:appsFolder\Microsoft.MinecraftUWP_8wekyb3d8bbwe!App"
        appname = "Minecraft.Windows.exe"
        run("rd \"" + toDirectory_rp + "\" /s /q")
        run("rd \"" + toDirectory_bp + "\" /s /q")
        run("md \"" + toDirectory_rp + "\"")
        run("md \"" + toDirectory_bp + "\"")
        jt_dircopy_exe(fromDirectory_rp, toDirectory_rp, logEnabled, PackageName)
        jt_dircopy_exe(fromDirectory_bp, toDirectory_bp, logEnabled, PackageName)
    except Exception as Error:
        messagebox.showerror(PackageName, "Error: " + str(Error))
else:
    exit