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

def jt_dirdelete(current_path):
    print("You have requested to delete directory \"" + str(current_path) + "\"")
#    dirdelete_alert = input("Are you sure? (yes/no): ").lower()
    dirdelete_alert = "yes"
    if dirdelete_alert == "yes":
        try:
            print(log.set_verbosity(log.INFO))
            print(log.set_threshold(log.INFO))
            remove_tree(current_path)
        except Exception as Error:
            root = tkinter.Tk()
            root.withdraw()
            messagebox.showerror("Manhunt Update", "Error: " + Error)
    elif dirdelete_alert == "no":
        print("Decline request.")
    else:
        print("Invalid input, decline request.")
        
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
            pass

def restart_minecraft():
    root = tkinter.Tk()
    root.withdraw()
    MsgBox = messagebox.askyesno(title="Manhunt Update", message="Do you want to restart Minecraft to apply changes?", icon = "warning")
    if MsgBox == True:
        try:
            cmd("taskkill /f /IM Minecraft.Windows.exe")
        except:
            pass
        cmd("explorer.exe shell:appsFolder\Microsoft.MinecraftUWP_8wekyb3d8bbwe!App")
        if DisplayDirectory == True:
            cmd("explorer.exe " + toDirectory)
        else:
            pass
    else:
        messagebox.showinfo("Manhunt Update", "Cancelled restarting Minecraft")
        root.destroy()
        
username = getpass.getuser()
fromDirectory = "C:\\Users\\" + username + "\\Documents\\GitHub\\manhunt"
toDirectory = "C:\\Users\\" + username + "\\AppData\\Local\\Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang\\behavior_packs\\MinecraftM"
logEnabled = True
DisplayDirectory = False

jt_dirdelete(toDirectory)
jt_dircopy_exe(fromDirectory, toDirectory, logEnabled)
restart_minecraft()
