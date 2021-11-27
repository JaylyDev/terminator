from google_translate import translate

words = [", but they respawned!"];

from_lang = "English"

to_lang = [
  'en', ## English (US)
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
]

translate(my_phrase, from_lang, to_lang)
