import { copyFile as _copyFile, mkdir as _mkdir, rmdir as _rmdir, existsSync, promises } from 'fs';
import { resolve, join } from 'path';
import { promisify } from 'util';
const copyFile = promisify(_copyFile);
const mkdir = promisify(_mkdir);
const rmdir = promisify(_rmdir);

const comMojangPath = resolve(process.env.LOCALAPPDATA, 'Packages/Microsoft.MinecraftWindowsBeta_8wekyb3d8bbwe/LocalState/games/com.mojang');
const modDirectories = [
  {
    source: './assets/behavior_pack',
    destination: 'development_behavior_packs/terminator',
  },
  {
    source: './assets/resource_pack',
    destination: 'development_resource_packs/terminator',
  },
];

async function cleanInstallAssets() {
  for (const modDir of modDirectories) {
    const sourcePath = resolve(modDir.source);
    const destinationPath = resolve(comMojangPath, modDir.destination);

    try {
      // Check if development_*_pack folder exists
      if (existsSync(destinationPath)) {
        await deleteFolderRecursive(destinationPath);
        console.log(`Deleted existing folder: ${destinationPath}`);
      }
      await mkdir(destinationPath, { recursive: true });
    } catch (error) {
      console.error(`Error creating destination directory: ${error.message}`);
      return;
    }

    try {
      await copyFilesRecursively(sourcePath, destinationPath);
      console.log(`Assets from ${modDir.source} copied to ${modDir.destination}`);
    } catch (error) {
      console.error(`Error copying files: ${error.message}`);
    }
  }
}

/**
 * @param {string} folderPath
 */
async function deleteFolderRecursive(folderPath) {
  const entries = await promises.readdir(folderPath, { withFileTypes: true });

  for (const entry of entries) {
    const entryPath = join(folderPath, entry.name);

    if (entry.isDirectory()) {
      await deleteFolderRecursive(entryPath);
    } else {
      await promises.unlink(entryPath);
    }
  }

  await rmdir(folderPath);
}

/**
 * @param {string} source
 * @param {string} target
 */
async function copyFilesRecursively(source, target) {
  const entries = await promises.readdir(source, { withFileTypes: true });

  for (const entry of entries) {
    const sourcePath = join(source, entry.name);
    const targetPath = join(target, entry.name);

    if (entry.isDirectory()) {
      await mkdir(targetPath, { recursive: true });
      await copyFilesRecursively(sourcePath, targetPath);
    } else {
      await copyFile(sourcePath, targetPath);
    }
  }
}

cleanInstallAssets();
