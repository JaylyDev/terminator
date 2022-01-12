import { World, Commands } from "mojang-minecraft";
let prefix = "#";

World.events.beforeChat.subscribe((data) => {
  let playerName = data.sender.name ?? data.sender.nameTag;
  if (data.message.substring(0, 1) == prefix) {
    data.cancel = true;
    console.log(`[${Date()}] <${playerName}> ${data.message}`);
    var command = data.message.substring(1).spilt(' ');
    if (command[0] == 'summon') {
      const defaultNBTsettings = {
        "respawn": true,
        "customskin": false,
        "bossbar": false,
        "respawnevent": true,
        "physics": true,
        "invulenerable": false,
        "name": "Terminator",
        "position": { "x": "~", "y": "~", "z": "~" }
      };
      /* // Uncomment this comment once command.js supports multiple entities
      const availableEntities = ['terminator'];
      if (availableEntities.includes(command[1]))
      */ 
      if (command[1] == 'terminator') {
        try {
          var entitynbt = JSON.parse(command[2])
        } catch {
          var entitynbt = defaultNBTsettings;
        };
        World.events.tick.subscribe(() => {
          World.events.entityCreate.subscribe((entityData) => {
            if (entityData.entity.id === "entity:terminator") {
              try {
                if (entitynbt['respawn'] == false) {
                  entityData.entity.triggerEvent('terminator:disable_respawn')
                };
              } catch (err) { console.log(err) };
              try {
                if (entitynbt['customskin'] == true) {
                  entityData.entity.triggerEvent('terminator:enable_custom_skin')
                };
              } catch (err) { console.log(err) };
              try {
                if (entitynbt['bossbar'] == true) {
                  entityData.entity.triggerEvent('terminator:enable_bossbar')
                };
              } catch (err) { console.log(err) };
              try {
                if (entitynbt['respawnevent'] == false) {
                  entityData.entity.triggerEvent('terminator:disable_respawn_event')
                };
              } catch (err) { console.log(err) };
              try {
                if (entitynbt['physics'] == false) {
                  entityData.entity.triggerEvent('terminator:disable_physics')
                };
              } catch (err) { console.log(err) };
              try {
                if (entitynbt['invulenerable'] == true) {
                  entityData.entity.triggerEvent('terminator:enable_invulnerable')
                };
              } catch (err) { console.log(err) };
              try {
                if (entitynbt['name'] != defaultNBTsettings['name']) {
                  let entityName = entitynbt['name'];
                  entityData.entity.nameTag = `${entityName}`;
                };
              } catch (err) { console.log(err) };
            };
          });
        });
        try {
          if (entitynbt['position'] != defaultNBTsettings['position']) {
            var position = `${entitynbt['position']['x']} ${entitynbt['position']['y']} ${entitynbt['position']['z']}`
          } else var position = `${defaultNBTsettings['position']['x']} ${defaultNBTsettings['position']['y']} ${defaultNBTsettings['position']['z']}`;
        } catch (err) { console.log(err) };
        try { Commands.run(`execute ${playerName} ~~~ `) } catch (err) { console.log(err) };
        World.events.tick.unsubscribe(() => {});
      } else {
        Commands.run(`tellraw ${playerName} {"rawtext":[{"text":"[§cTerminator§r] Error - This command only supports [${availableEntities}]."}]}`, World.getDimension('overworld'));
      };
    } else {
      Commands.run(`tellraw ${playerName} {"rawtext":[{"text":"[§cTerminator§r] Unknown terminator command."}]}`, World.getDimension('overworld'));
    };
  }
});
