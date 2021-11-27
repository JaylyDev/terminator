""" Don't have node installed so I worked in py """
from google_translate import translate

words = [", but they respawned!"];

from_lang = "English"

to_lang = [ "English", "English", "German", "Spanish", "Spanish", "French", "French", "Italian", "Japanese", "Korean", "Portuguese", "Portugese", "Russian", "Chinese", "Chinese", "Dutch", "Bulgarian", "Czech", "Danish", "Greek", "Finnish", "Hungarian", "Indonesian", "Norwegian", "Polish", "Slovak", "Swedish", "Turkish", "Ukrainian" ]

for x in words:
  for y in to_lang:
    print(translate(my_phrase[x], from_lang, to_lang[y]))
