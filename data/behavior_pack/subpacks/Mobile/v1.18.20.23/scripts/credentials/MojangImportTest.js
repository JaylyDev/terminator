import { md5 } from 'scripts/blueimp/md5.js';
import { SHA256 } from 'scripts/sha256.js';
import { secret as moduleSecret } from 'scripts/credentials/access.js';

const key = 'mojang-gametest-framework';
const secret = SHA256(moduleSecret[3]);

export const token = md5(key, secret, false);
export const name = 'MojangMC-importTest';