execute @a[tag=host,scores={players=2..}] ~~~ function system/mh_start
execute @a[tag=host,scores={players=..2}] ~~~ function system/playercount/mh_start_error

#This file will detect if 2+ players is here.
#If is, it will run function/system/mh_start.mcfunction
#for now, im building the core of the command