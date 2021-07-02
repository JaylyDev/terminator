# Copyright (c) JaylyDev.  All rights reserved.
# Copyrights licensed under the MIT License.
# This file is a modified version of a copy of a program "JaylyTerminal" by JaylyDev.
# See the accompanying LICENSE (https://github.com/JaylyDev/JaylyTerminal/blob/master/LICENSE) file for terms.
# THIS FILE IS USED FOR ADDON DEVELOPMENT
version_0_min = [0, 0, 0]
version_0_max = [0, 0, 77]

#functions import
import getpass
import tkinter
from distutils.dir_util import copy_tree
from distutils import log
from tkinter import messagebox
from os import system as run
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

def restart_minecraft():
    cd = 0
    root = tkinter.Tk()
    root.withdraw()
    RestartMC = messagebox.askyesno(title="Terminator Update", message="Do you want to restart Minecraft to apply changes?", icon = "warning") # Restart Minecraft
    DisplayDirectory = messagebox.askyesno(title="Terminator Update", message="Do you want to reveal the directory in File Explorer?")
    if RestartMC == True:
        try: run("taskkill /f /IM Minecraft.Windows.exe"); start = default_timer(); duration = 0
        except: pass
        while duration <= 5:
            duration = default_timer() - start
    #        if 2.1 > duration >= 2:
    #            try: run("explorer.exe shell:appsFolder\Microsoft.MinecraftUWP_8wekyb3d8bbwe!App")
    #            except Exception as Error: print(Error)
    #        elif 3.7 > duration >= 3.5:
    #            try: run("taskkill /f /IM Minecraft.Windows.exe")
     #           except Exception as Error: print(Error)
            if duration >= 4.9:
                try: run("explorer.exe shell:appsFolder\Microsoft.MinecraftUWP_8wekyb3d8bbwe!App")
                except Exception as Error: print(Error)
    # Reveal in File Explorer
    if DisplayDirectory == True:
        run("explorer.exe " + toDirectory_rp)
        run("explorer.exe " + toDirectory_bp)
    else: pass

username = getpass.getuser()
fromDirectory_rp = "C:\\Users\\" + username + "\\Documents\\GitHub\\manhunt\\RP"
toDirectory_rp = "C:\\Users\\" + username + "\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\resource_packs\\MinecraftM"
fromDirectory_bp = "C:\\Users\\" + username + "\\Documents\\GitHub\\manhunt\\BP"
toDirectory_bp = "C:\\Users\\" + username + "\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\behavior_packs\\MinecraftM"
logEnabled = False

run("rd " + toDirectory_rp + " /s /q")
run("rd " + toDirectory_bp + " /s /q")
run("md \"" + toDirectory_rp + "\"")
run("md \"" + toDirectory_bp + "\"")
jt_dircopy_exe(fromDirectory_rp, toDirectory_rp, logEnabled)
jt_dircopy_exe(fromDirectory_bp, toDirectory_bp, logEnabled)
restart_minecraft()
