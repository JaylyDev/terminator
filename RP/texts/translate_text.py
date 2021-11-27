""" Don't have node installed so I worked in py """
from google_translate import translate

id = ["message.entity.respawn.generic"]

words = [", but they respawned!"]

from_lang = "English"

to_lang = [ "English", "English", "German", "Spanish", "Spanish", "French", "French", "Italian", "Japanese", "Korean", "Portuguese", "Portugese", "Russian", "Chinese", "Chinese", "Dutch", "Bulgarian", "Czech", "Danish", "Greek", "Finnish", "Hungarian", "Indonesian", "Norwegian", "Polish", "Slovak", "Swedish", "Turkish", "Ukrainian" ]

mcLangId = [ "en_US", "en_GB", "de_DE", "es_ES", "es_MX", "fr_FR", "fr_CA", "it_IT", "ja_JP", "ko_KR", "pt_BR", "pt_PT", "ru_RU", "zh_CN", "zh_TW", "nl_NL", "bg_BG", "cs_CZ", "da_DK", "el_GR", "fi_FI", "hu_HU", "id_ID", "nb_NO", "pl_PL", "sk_SK", "sv_SE", "tr_TR", "uk_UA" ]

for x in words:
  for y in to_lang:
    content = translate(my_phrase[x], from_lang, to_lang[y])
    file = open(f"{mcLandId[y]}.lang", "a")
    file.write(f"{id[x]}={content}\n")
    file.close()
