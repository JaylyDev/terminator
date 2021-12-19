/********************************************************
+*   (c) JaylyMC. All rights reserved.                    *
+*       Run script using node.js                         *
+*********************************************************/

try {
  const translatte = require('translatte');
} catch (err) {
  console.log('\x1b[34mCannot import "translatte" module.\nDownload module at\nWebsite: \x1b[32mhttps://www.npmjs.com/package/translatte\x1b[0m\n\x1b[34mNPM: \x1b[32mnpm i translatte\x1b[0m\n');
  console.error(err)
  process.exit(1)
}

const translatte = require('translatte');
const fs = require('fs');
const path = require('path');

const minecraft_languages = [
  'en', /* English (US) */
  'en', /* English (UK) */
  'de',
  'es', /* Español (España) */
  'es', /* Español (Mexico) */
  'fr', /* Français (France) */
  'fr', /* Français (Candad) */
  'it',
  'ja',
  'ko',
  'pt', /* Portugal (Brazilian) */
  'pt', /* Portugal (European) */
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

const mcLangId = [
  "en_US",
  "en_GB",
  "de_DE",
  "es_ES",
  "es_MX",
  "fr_FR",
  "fr_CA",
  "it_IT",
  "ja_JP",
  "ko_KR",
  "pt_BR",
  "pt_PT",
  "ru_RU",
  "zh_CN",
  "zh_TW",
	"nl_NL",
	"bg_BG",
	"cs_CZ",
	"da_DK",
	"el_GR",
	"fi_FI",
	"hu_HU",
	"id_ID",
	"nb_NO",
	"pl_PL",
	"sk_SK",
	"sv_SE",
	"tr_TR",
	"uk_UA"
];

const id = ['entity.entity:terminator.name', 'entity.entity:dummy.name', 'item.spawn_egg.entity.entity:terminator.name', 'entity.entity:terminator<>.name', 'message.entity.respawn.generic', 'entity.player.name'];
const words = ['Terminator', 'Dummy', 'Spawn Terminator', 'Terminator', ', but they respawned!', 'Player'];

var scriptExecuteTimeStamp = Date.now();

dir = path.join(__dirname, '/results');

try {
  fs.rmdirSync(dir, { recursive: true });
  console.log(`${dir} is deleted!`);
} catch (err) {
  console.error(`Error while deleting ${dir}.`);
};

try {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log("Directory is created.");
  } else {
    console.log("Directory already exists.");
  }
} catch (err) {
  console.log(err);
};

for (let a = 0; a < words.length; a++) {
  for (let b = 0; b < minecraft_languages.length; b++) {
    setTimeout(() => {
      translatte(words[a], { to: minecraft_languages[b] }).then(res => {
        var value = id[a] + '=' + res.text + '\n';
        console.log(id[a] + '=' + res.text);
        fs.appendFileSync(path.join(__dirname, `/results/${mcLangId[b]}.lang`), value, function (err) {
          if (err) { return console.error(err); };
        });
      }).catch(err => {
        console.error('Error (',words[a], minecraft_languages[b], ') ', err);
        var value = Date() + ' - Error (' + words[a] + '_' + minecraft_languages[b] + ') ' + JSON.stringify(err) + '\n';
        fs.appendFileSync(path.join(__dirname, `/results/${scriptExecuteTimeStamp}.log`), value, function (err) {
          if (err) { return console.error(err); };
        });
      });
    }, b * 2000);
  };
};