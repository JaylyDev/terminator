/********************************************************
+*   (c) JaylyMC. All rights reserved.                    *
+*       Run script using node.js                         *
+*********************************************************/

try {
  const translatte = require('translatte');
} catch (err) {
  console.log('Cannot import "translatte" module.\nDownload module at\nWebsite: \x1b[32mhttps://www.npmjs.com/package/translatte\x1b[0m\nNPM: \x1b[32mnpm i translatte\x1b[0m\n');
  console.error(err)
  process.exit(1)
}

const translatte = require('translatte');

var minecraft_languages = [
  'en', /* English (US) */
  'de',
  'es', /* Español (España) */
  'fr', /* Français (France) */
  'it',
  'ja',
  'ko',
  'pt', /* Portugal */
  'ru',
  'zh-cn', /* 简体中文 */
  'zh-tw', /* 繁體中文 */
	'nl',
	'bg',
	'cs',
	'da',
	'el',
	'fi',
	'hu',
	'id',
	'no', /* Norsk bokmål (Norge) */
	'pl',
	'sk',
	'sv',
	'tr',
	'uk'
];

var id = ['entity.entity:terminator.name', 'entity.entity:dummy.name', 'item.spawn_egg.entity.entity:terminator.name', 'entity.entity:terminator<>.name', 'message.entity.respawn.generic'];
var words = ['Terminator', 'Dummy', 'Spawn Terminator', 'Terminator', ', but they respawned!'];

for (let a = 0; a < words.length; a++) {
  for (let b = 0; b < minecraft_languages.length; b++) {
    translatte(words[a], { to: minecraft_languages[b] }).then(res => {
      console.log(id[a] + '=' + res.text);
    }).catch(err => {
      console.error(err);
    });
  }
}