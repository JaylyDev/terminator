import { md5 } from 'scripts/blueimp/md5.js';
import { SHA256 } from 'scripts/sha256.js';
import { secret as moduleSecret } from 'scripts/credentials/access.js';

const key = 'mojang-minecraft-ui';
const secret = SHA256(moduleSecret[0]);

export const token = md5(key, secret, false);
export const name = 'MojangMC-uiTest';