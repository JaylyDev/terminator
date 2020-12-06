execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=hunter] actionbar Find and kill §c@a[tag=speedrunner]§r.


kill @e[type=item,name="Kompass"]
kill @e[type=item,name="Kompas"]
kill @e[type=item,name="Compass"]
kill @e[type=item,name="Kompas"]
kill @e[type=item,name="Πυξίδα"]
kill @e[type=item,name="Boussole"]
kill @e[type=item,name="Brújula"]
kill @e[type=item,name="Kompassi"]
kill @e[type=item,name="Brújula"]
kill @e[type=item,name="Компас"]
kill @e[type=item,name="Boussole"]
kill @e[type=item,name="Kompas"]
kill @e[type=item,name="コンパス"]
kill @e[type=item,name="Iránytű"]
kill @e[type=item,name="Bussola"]
kill @e[type=item,name="나침반"]
kill @e[type=item,name="Kompass"]
kill @e[type=item,name="Kompas"]
kill @e[type=item,name="Kompas"]
kill @e[type=item,name="Bússola"]
kill @e[type=item,name="Kompas"]
kill @e[type=item,name="Pusula"]
kill @e[type=item,name="Bússola"]
kill @e[type=item,name="Компас"]
kill @e[type=item,name="Компас"]
kill @e[type=item,name="Kompass"]
kill @e[type=item,name="指南針"]
kill @e[type=item,name="指南针"]


# +---------------------------+
# | UID | Mission             | comment/chat hints
# +---------------------------+
# |  1  | Obtain wood         | 
# |  2  | Obtain stone        | 
# |  3  | Obtain iron         | 25% chat hint: you can also use some buckets of lava to create a portal without using diamond pickaxes.
# |  4  | Obtain diamonds     | 
# |  5  | Get obsidian        | 
# |  6  | Make nether portal  | 
# |  7  | Find blaze          | 
# |  8  | Get blaze rod       | 
# | 20  | Find Ender man      | too lazy so i made the ID look like this
# | 21  | Get ender pearl     | 
# |  9  | Throw eye of ender  | chat hint: Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder amd the endeer pearl.
# | 10  | Locate stronghold   | 
# | 11  | Go to the end       | 
# | 12  | Defeat Ender Dragon | 
# +---------------------------+

execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner,scores={progress=1}] actionbar Obtain §eWood§r.
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner,scores={progress=2}] actionbar Mine §eStone§r.
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner,scores={progress=3}] actionbar Mine §eIron§r.
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner,scores={progress=4}] actionbar Mine §eDiamonds§r.
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner,scores={progress=5}] actionbar Obtain §eObsidian§r.
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner,scores={progress=6}] actionbar Build a §eNether Portal§r and enter it.
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner,scores={progress=7}] actionbar Find a §cblaze§r.
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner,scores={progress=8}] actionbar Kill the §cBlaze§r and get the §eBlaze Rod§r.
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner,scores={progress=20}] actionbar Find a §cEnderman§r.
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner,scores={progress=21}] actionbar Kill the §cEnderman§r and get the §ender pearl§r.
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner,scores={progress=9}] actionbar Throw §eThe Ender Pearl§r.
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner,scores={progress=10}] actionbar Keep throwing until you locate §eEnd Portal§r.
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner,scores={progress=11}] actionbar Go to §eThe End§r.
execute @a[tag=host,scores={settings_state=2}] ~~~ title @a[tag=speedrunner,scores={progress=12..15}] actionbar Kill §cEnder Dragon§r and go back to §eOverworld§r.

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Дънер от дъб",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Dubové poleno",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Kævle af egetræ",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Κούτσουρο βελανιδιάς",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Oak Log",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Oak Log",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Leño de roble",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronco de roble",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronc de chêne",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Eichenstamm",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tammipölkky",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronc de chêne",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronco di quercia",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tölgyrönk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="잘린 참나무",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Eiken stronk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Batang Ek",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="樫の丸太",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Eikestokk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Toro de Carvalho",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Kłoda dębowa",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tora de Carvalho",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Дубовое бревно",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Ekstock",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="橡树原木",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Meşe Kütüğü",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="橡樹原木",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Колода з дуба",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Dubové poleno",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Дънер от тъмен дъб",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Kævle af mørkt egetræ",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Κούτσουρο σκούρας βελανιδιάς",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Schwarzeichenstamm",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Dark Oak Log",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronco de roble oscuro",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronc de chêne noir",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Leño de roble oscuro",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronc de chêne noir",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Dark Oak Log",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Poleno tmavého dubu",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tumma tammipölkky",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Sötéttölgy-rönk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="黒樫の丸太",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Mørk eik-stokk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronco di rovere",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Donkereiken stronk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="잘린 짙은 참나무",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tora de Carvalho Escuro",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Бревно темного дуба",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Toro de Carvalho Escuro",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Poleno z tmavého duba",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Mörk ekstock",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Kłoda czarnego dębu",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Колода з темного дуба",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Batang Ek Gelap",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Koyu Meşe Kütüğü",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="深色橡树原木",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="黑橡樹原木",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Akáciové poleno",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Дънер от акация",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Kævle af akacietræ",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Akazienstamm",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Acacia Log",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Κούτσουρο ακακίας",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronco de acacia",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Leño de acacia",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Acacia Log",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Akasiapölkky",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronc d'acacia",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronc d'acacia",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Batang Akasia",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronco di acacia",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Akácrönk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="アカシアの丸太",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="잘린 아카시아나무",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Kłoda akacjowa",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Akasiestokk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tora de Acácia",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Акациевое бревно",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Acacia stronk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Toro de Acácia",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Колода з акації",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Agátové poleno",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="金合欢原木",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Akasya Kütüğü",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Akaciastock",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="相思樹原木",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Дънер от бреза",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Birkenstamm",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Kævle af birketræ",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Κούτσουρο σημύδας",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Birch Log",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronco de abedul",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Leño de abedul",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronc de bouleau",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Koivupölkky",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Birch Log",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronc de bouleau",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Nyírrönk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="樺の丸太",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronco di betulla",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Batang Betula",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Berken stronk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="잘린 자작나무",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Bjørkestokk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tora de Bétula",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Březové poleno",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Kłoda brzozowa",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Brezové poleno",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Toro de Bétula",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Березовое бревно",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Björkstock",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Huş Ağacı Kütüğü",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="桦树原木",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="樺樹原木",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Колода з берези",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Дънер от джунглата",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Sekvojové poleno",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Kævle af jungletræ",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Jungle Log",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Κούτσουρο ξύλου ζούγκλας",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tropenbaumstamm",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Jungle Log",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronco de la jungla",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronc de bois tropical",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Leño de la jungla",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronc de bois tropical",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Batang Rimba",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Trópusifa-rönk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Palmupölkky",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronco della giungla",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="잘린 정글나무",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="ジャングルの木の丸太",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Jungeltrestokk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Junglehouten stronk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Kłoda drzewa tropikalnego",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tora da Selva",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tropické poleno",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Toro da Selva",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Бревно тропического дерева",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Djungelstock",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Büyük Orman Kütüğü",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Колода з тропічного дерева",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="丛林原木",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="叢林原木",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Smrkové poleno",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Fichtenstamm",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Дънер от смърч",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Spruce Log",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Spruce Log",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Kævle af grantræ",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Leño de abeto",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Kuusipölkky",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronc d'épinette",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Fenyőrönk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronco de abeto",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Κούτσουρο ελάτου",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="トウヒの丸太",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronc de sapin",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Batang Spruce",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tronco di abete",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Granstokk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Sparren stronk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Tora de Abeto",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="잘린 전나무",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Kłoda świerkowa",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Toro de Abeto",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Granstock",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Сосновое бревно",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Çam Kütüğü",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Колода з хвойного дерева",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="Smrekové poleno",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="云杉原木",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=1}] ~~~ execute @e[type=item,name="杉樹原木",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 2

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Калдъръм",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Kamenné kostky",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Σκύρο",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Bruchstein",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Cobblestone",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Cobblestone",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Brosten",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Adoquín",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Adoquín",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Mukulakivi",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Pavé",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Batu Bulat",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Pierre taillée",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="丸石",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Ciottoli",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Zúzottkő",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Brostein",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="조약돌",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Bruk",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Pedregulho",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Булыжник",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Pedra Arredondada",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Kırık Taş",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Stavebný kameň",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="圆石",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Кругляк",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Kullersten",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="鵝卵石",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=2}] ~~~ execute @e[type=item,name="Keien",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 3

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Eisenerz",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Jernmalm",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Železná ruda",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Ορυκτός σίδηρος",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Iron Ore",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Желязна руда",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Rautamalmi",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Mineral de hierro",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Vasérc",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Minerai de fer",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Minerale di ferro",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="鉄鉱石",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="철광석",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Jernmalm",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Ruda żelaza",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Minerai de fer",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Mineral de hierro",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="IJzererts",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Bijih Besi",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Minério de Ferro",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Järnmalm",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Železná ruda",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Железная руда",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Залізна руда",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Demir Cevheri",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="鐵礦石",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="铁矿石",r=2] ~~~ tellraw @a {"rawtext":[{"text":"The speedrunner has completed 25% of the game!"}]}

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Železná ruda",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Jernmalm",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Eisenerz",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Iron Ore",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Ορυκτός σίδηρος",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Iron Ore",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Mineral de hierro",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Mineral de hierro",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Rautamalmi",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Minerai de fer",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Желязна руда",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Vasérc",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Minerale di ferro",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Bijih Besi",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="鉄鉱石",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="철광석",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="IJzererts",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Jernmalm",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Minerai de fer",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Minério de Ferro",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Ruda żelaza",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Minério de Ferro",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Železná ruda",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Железная руда",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Demir Cevheri",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Järnmalm",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Залізна руда",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="鐵礦石",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="铁矿石",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"You can also use some buckets of lava to create a portal without using diamond pickaxes."}]}

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Желязна руда",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Eisenerz",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Ορυκτός σίδηρος",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Iron Ore",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Mineral de hierro",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Iron Ore",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Minerai de fer",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Mineral de hierro",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Vasérc",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Minerai de fer",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Rautamalmi",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="철광석",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Minerale di ferro",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="IJzererts",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="鉄鉱石",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Minério de Ferro",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Jernmalm",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Bijih Besi",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Ruda żelaza",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Minério de Ferro",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Железная руда",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Demir Cevheri",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Železná ruda",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Järnmalm",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Залізна руда",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Železná ruda",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="Jernmalm",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="鐵礦石",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=3}] ~~~ execute @e[type=item,name="铁矿石",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 4



execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Диамант",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamant",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamant",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamant",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamond",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamante",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamante",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamond",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Timantti",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamant",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Gyémánt",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamant",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Berlian",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamante",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="ダイヤモンド",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamant",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamant",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diament",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamante",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamante",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="다이아몬드",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Διαμάντι",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Алмаз",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamant",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Elmas",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="钻石",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Алмаз",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="Diamant",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=4}] ~~~ execute @e[type=item,name="鑽石",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 5

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidián",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Οψιδιανός",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidian",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidian",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidian",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidiana",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidiana",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidiaani",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidienne",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Обсидиан",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidian",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidian",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="黒曜石",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidienne",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obszidián",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Ossidiana",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="흑요석",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Lavaglas",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidian",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidiana",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Обсидиан",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidián",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidian",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidiana",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsidiyen",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Обсидіан",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="黑曜石",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="黑曜石",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=5}] ~~~ execute @e[type=item,name="Obsydian",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 6

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=6}] ~~~ detect ~~~ portal 0 scoreboard players set @s progress 7
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=6}] ~~~ detect ~~~ portal 1 scoreboard players set @s progress 7
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=6}] ~~~ detect ~~~ portal 2 scoreboard players set @s progress 7
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=6}] ~~~ detect ~~~ portal 3 scoreboard players set @s progress 7
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=6}] ~~~ detect ~~~ portal 4 scoreboard players set @s progress 7

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=7}] ~~~ execute @e[type=blaze,r=5] ~~~ scoreboard players set @p[tag=speedrunner] progress 8

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Ohnivý prut",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Ράβδος φλόγας",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Lohenrute",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Blaze Rod",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Blaze Rod",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Пръчка на пламък",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Vara de llama",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Blazestav",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Vara de Blaze",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Bâton de Blaze",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Lieskatanko",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Bâton de blaze",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Tongkat Kobaran Api",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Verga di Blaze",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Lángrúd",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="ブレイズ ロッド",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="블레이즈 막대",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Blaze-staaf",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Blusserstav",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Varinha de Blaze",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Огненный стержень",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Płomienna różdżka",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Blaze Çubuğu",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Žiarivá tyč",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Flamstav",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Вогняний прут",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="烈焰棒",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="Vara Incandescente",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=8}] ~~~ execute @e[type=item,name="烈焰棒",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 20

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=20}] ~~~ execute @e[type=enderman,r=5] ~~~ scoreboard players set @p[tag=speedrunner] progress 21

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perla z enderu",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Μαργαριτάρι του Τελειωτή",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Перла от пагубник",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Ender Pearl",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Ender Pearl",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perla de Ender",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perla de Ender",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Äärenhelmi",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perle de l'Ender",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perle de l'Ender",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Bevégzőgyöngy",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Mutiara Ender",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perla di Ender",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="エンダーパール",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Enderperle",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Enderparel",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perła Kresu",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="엔더 진주",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perla z konca sveta",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Pérola do End",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Pérola de Ender",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Жемчуг Края",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Ender İncisi",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Enderpärla",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="末影珍珠",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Ender-perle",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Enderperle",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="終界珍珠",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Перлина Ендеру",r=2] ~~~ tellraw @p[tag=speedrunner] {"rawtext":[{"text":"Craft blaze powder using the blaze rod, and craft the eye of ender using the blaze powder and the ender pearl."}]}

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Ender-perle",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Перла от пагубник",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perla z enderu",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Ender Pearl",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Ender Pearl",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perla de Ender",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perla de Ender",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perle de l'Ender",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Μαργαριτάρι του Τελειωτή",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Äärenhelmi",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Bevégzőgyöngy",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Mutiara Ender",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Enderperle",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perle de l'Ender",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perla di Ender",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Enderperle",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Enderparel",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perła Kresu",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Pérola do End",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Pérola de Ender",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Жемчуг Края",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Enderpärla",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="엔더 진주",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Ender İncisi",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Перлина Ендеру",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="末影珍珠",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="Perla z konca sveta",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="エンダーパール",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=21}] ~~~ execute @e[type=item,name="終界珍珠",r=2] ~~~ scoreboard players set @p[tag=speedrunner] progress 9

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=9}] ~~~ execute @e[type=eye_of_ender_signal] ~~~ scoreboard players set @p[tag=speedrunner] progress 10

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=10}] ~~~ detect ~~-0.01~ end_portal_frame 0 scoreboard players set @s progress 11

execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=11}] ~~~ detect ~~-0.01~ end_portal 0 scoreboard players set @s progress 12
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=12}] ~~~ detect ~~-0.01~ end_stone 0 scoreboard players set @s progress 13
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=13}] ~~~ detect ~~-0.01~ end_portal 0 scoreboard players set @s progress 14
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=14}] ~~~ detect ~ 0 ~ air 0 scoreboard players set @s progress 15
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=15}] ~~~ execute @a[tag=host,scores={settings_state=2}] ~ ~ ~ scoreboard players set @s timer 1
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=speedrunner,scores={progress=15}] ~~~ scoreboard players set @s progress 0

#alive player counter 
execute @s[tag=host] ~~~ scoreboard players set @a[tag=host] players 0
execute @s[tag=host] ~~~ scoreboard players set @a[tag=host] speed_alive 0
execute @s[tag=host] ~~~ scoreboard players set @a[tag=host] hunt_alive 0
execute @s[tag=host] ~~~ scoreboard players set @a[tag=host] track_count 0
scoreboard players set @a counter 1
execute @s[tag=host] ~~~ scoreboard players set @a[tag=speedrunner] speedcount 1
execute @s[tag=host] ~~~ scoreboard players set @a[tag=hunter] huntcount 1
execute @s[tag=host] ~~~ scoreboard players set @a[tag=track] trackcount 1

execute @s[tag=host] ~~~ execute @a ~~~ scoreboard players operation @a[tag=host] players += @s counter
execute @s[tag=host,scores={settings_state=1}] ~~~ scoreboard players operation  "§aJoined: " display = @a[tag=host] players
execute @s[tag=host,scores={settings_state=2}] ~~~ scoreboard players reset "§aJoined: " display
#speedrunner counter
execute @s[tag=host] ~~~ scoreboard players operation @a[tag=host] speed_alive += @a[tag=speedrunner] speedcount
execute @s[tag=host] ~~~ scoreboard players operation @a[tag=host] hunt_alive += @a[tag=hunter] huntcount
execute @s[tag=host] ~~~ scoreboard players operation @a[tag=host] track_count += @a[tag=track] trackcount
execute @s[tag=host,scores={settings_state=2}] ~~~ scoreboard players operation  "§bSpeedrunner: " display = @a[tag=host] speed_alive
execute @s[tag=host,scores={settings_state=2}] ~~~ scoreboard players operation  "§cHunters: " display = @a[tag=host] hunt_alive
execute @s[tag=host,scores={settings_state=1}] ~~~ scoreboard players reset "§bSpeedrunner: " display
execute @s[tag=host,scores={settings_state=1}] ~~~ scoreboard players reset "§cHunters: " display
#spec
execute @s[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~ ~ ~ tag @s remove speedrunner
execute @s[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~ ~ ~ tag @s remove hunter
execute @s[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~ ~ ~ title @a[tag=spec] actionbar §e§lSpectating
execute @s[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~ ~ ~ gamemode a @s
xp -100l @a[tag=!Speedrunner,tag=!Hunter,tag=spec]
effect @a[tag=!Speedrunner,tag=!Hunter,tag=spec] invisibility 1 255 true
effect @a[tag=!Speedrunner,tag=!Hunter,tag=spec] weakness 1 255 true
effect @a[tag=!Speedrunner,tag=!Hunter,tag=spec] fire_resistance 1 255 true
effect @a[tag=!Speedrunner,tag=!Hunter,tag=spec] water_breathing 1 255 true
effect @a[tag=!Speedrunner,tag=!Hunter,tag=spec] regeneration 1 255 true

#compass tp to speedrunner
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Povolit"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Разрешаване"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Tillad"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Erlauben"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Allow"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Έγκριση"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Allow"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Permitir"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Salli"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Autoriser"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Autoriser"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Engedélyezés"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Bolehkan"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Consenti"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="許可"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="허용"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Tillat"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Toestaan"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Zezwól"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Permitir"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Permitir"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Разрешить"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Povoliť"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="İzin ver"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Дозволити"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Tillåt"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="允许"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Permitir"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="允許"] ~~~ tellraw @p[tag=spec] {"rawtext":[{"text":"§e§lTeleported to the speedrunner."}]} 
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Povolit"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Разрешаване"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Tillad"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Erlauben"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Allow"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Έγκριση"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Allow"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Permitir"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Salli"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Autoriser"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Autoriser"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Engedélyezés"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Bolehkan"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Consenti"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="許可"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="허용"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Tillat"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Toestaan"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Zezwól"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Permitir"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Permitir"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Разрешить"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Povoliť"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="İzin ver"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Дозволити"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Tillåt"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="允许"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="Permitir"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ execute @a[tag=spec] ~~~ execute @e[type=item,name="允許"] ~~~ tp @p[tag=spec] @r[tag=speedrunner]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Разрешаване"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Tillad"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Erlauben"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Povolit"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Έγκριση"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Allow"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Allow"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Permitir"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Permitir"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Salli"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Autoriser"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Autoriser"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Engedélyezés"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Bolehkan"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Consenti"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="許可"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="허용"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Tillat"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Zezwól"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Toestaan"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Permitir"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Permitir"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Разрешить"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Povoliť"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Tillåt"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="İzin ver"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="Дозволити"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="允许"]
execute @a[tag=host,scores={settings_state=2}] ~~~ kill @e[type=item,name="允許"]


#settings for the roles
#runner
execute @a[tag=host,scores={settings_state=2}] ~~~ enchant @a[tag=speedrunner] sharpness 1
execute @a[tag=host,scores={settings_state=2}] ~~~ enchant @a[tag=speedrunner] efficiency 1

ability @a[tag=spec,tag=!fly] mayfly true
tag @a[tag=spec,tag=!fly] add fly