file = open("template.txt", "r")
list_of_lines = file.readlines()
line_count = 875
index = 0
while True:
  cooldown_timer = 0
  while cooldown_timer < 300:
    cooldown_timer += 1
  try:
    content = list_of_lines[index]
    content = content.replace("give @s[scores={random_item=}]", "give @s[scores={random_item=" + str(index) + "}]")
    content = content.replace("\n", "")
    print(content)
    index += 1
  except: pass