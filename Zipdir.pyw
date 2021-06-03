# Copyright (c) JaylyDev.  All rights reserved.
# Copyrights licensed under the MIT License.
# See the accompanying LICENSE (https://github.com/JaylyDev/JaylyTerminal/blob/master/LICENSE) file for terms.

# THIS FILE IS USED FOR ADDON DEVELOPMENT

#functions import
import os
import inspect
import zipfile

def jt_zipdir_execution(output_filename, source_dir): # Credit to https://stackoverflow.com/a/17080988
    global zipname
    relroot = os.path.abspath(os.path.join(source_dir, os.pardir))
    with zipfile.ZipFile(output_filename, "w", zipfile.ZIP_DEFLATED) as zip:
        for root, dirs, files in os.walk(source_dir):
            # add directory (needed for empty dirs)
            zip.write(root, os.path.relpath(root, relroot))
            for file in files:
                filename = os.path.join(root, file)
                if filename == output_filename:
                    pass
                else:
                    if os.path.isfile(filename): # regular files only
                        arcname = os.path.join(os.path.relpath(root, relroot), file)
                        zip.write(filename, arcname)

current_path = inspect.getfile(inspect.currentframe()) #Current directory
current_filename = os.path.basename(__file__)
current_path = str(current_path).replace("\\" + str(current_filename), "")
jt_zipdir_execution("manhunt.mcpack", current_path)