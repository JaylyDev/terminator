import { md5 } from '../blueimp/md5.js';
import { SHA256 } from '../sha256.js';
import { secret as moduleSecret } from './access.js';

const key = 'mojang-minecraft-ui';
const secret = SHA256(moduleSecret[0]);

export const token = md5(key, secret, false);
export const name = 'MojangMC-uiTest';