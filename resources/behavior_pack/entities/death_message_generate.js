const fs = require('fs');
const path = require('path');

function main(id, source, mcid) {
  var requires_other_family = {
    'anvil': false, 
    'attack': true, 
    'block_explosion': false, 
    'charging': false, 
    'contact': false, 
    'drowning': false, 
    'entity_attack': true, 
    'entity_explosion': false, 
    'fall': false,
    'falling_block': false, 
    'fire': false, 
    'fire_tick': false, 
    'fireworks': false, 
    'fly_into_wall': false, 
    'freezing': false, 
    'lava': false, 
    'lightning': false, 
    'magic': false, 
    'magma': false, 
    'override': false, 
    'piston': false, 
    'projectile': true, 
    'stalactite': false, 
    'stalagmite': false, 
    'starve': false, 
    'suffocation': false, 
    'suicide': false, 
    'temperature': false, 
    'thorns': true, 
    'void': false, 
    'wither': false, 
    'all': false
  };

  var type_family = JSON.parse(fs.readFileSync(path.join(__dirname, '/type_family.json')).toString())['minecraft:entity']['components']['minecraft:type_family']['family'];
  if (requires_other_family[`${source}`] == true) {
    var event = `{"${id}:${source}": { "sequence": []}}`;
    event = JSON.parse(event);
    for (let i = 0; i < type_family.length; i++) {
      event[`${id}:${source}`]['sequence'].push({ "filters": { "all_of": [{ "test": "has_tag", "subject": "self", "operator": "!=", "value": "terminatordeathrequest" }, { "test": "is_family", "subject": "other", "operator": "==", "value": `${type_family[i]}` }] }, "run_command": { "command": [`tellraw @a {\"rawtext\":[{\"translate\":\"${mcid}\",\"with\":{\"rawtext\":[{\"selector\":\"@s\"},{\"text\":\"${type_family[i]}\"}]}},{\"translate\":\"message.entity.respawn.generic\"}]}`] } }, { "filters": { "all_of": [{ "test": "has_tag", "subject": "self", "operator": "==", "value": "terminatordeathrequest" }, { "test": "is_family", "subject": "other", "operator": "==", "value": `${type_family[i]}` }] }, "run_command": { "command": [`tellraw @a {\"rawtext\":[{\"translate\":\"${mcid}\",\"with\":{\"rawtext\":[{\"selector\":\"@s\"},{\"text\":\"${type_family[i]}\"}]}}]}`] } })
    };
    event = JSON.stringify(event).slice(1,-1) + ',\n';
  } else {
    var event = `"${id}:${source}": { 
  "sequence": [
    { 
      "filters": { "test": "has_tag", "subject": "self", "operator": "!=", "value": "terminatordeathrequest" },
      "run_command": { "command": [ "tellraw @a {\\"rawtext\\":[{\\"translate\\":\\"${mcid}\\",\\"with\\":{\\"rawtext\\":[{\\"selector\\":\\"@s\\"}]}},{\\"translate\\":\\"message.entity.respawn.generic\\"}]}" ]}
    },
    { 
      "filters": { "test": "has_tag", "subject":"self", "operator":"==", "value": "terminatordeathrequest" },
      "run_command": { "command": [ "tellraw @a {\\"rawtext\\":[{\\"translate\\":\\"${mcid}\\",\\"with\\":{\\"rawtext\\":[{\\"selector\\":\\"@s\\"}]}}]}" ]}
    }
  ]
},
`;
  }; 
  return event;
};

var death_source = [
  'anvil',
  'attack',
  'block_explosion',
  'charging',
  'contact',
  'drowning',
  'entity_attack',
  'entity_explosion',
  'fall',
  'falling_block',
  'fire',
  'fire_tick',
  'fireworks',
  'fly_into_wall',
  'freezing',
  'lava',
  'lightning',
  'magic',
  'magma',
  'override',
  'piston',
  'projectile',
  'stalactite',
  'stalagmite',
  'starve',
  'suffocation',
  'suicide',
  'temperature',
  'thorns',
  'void',
  'wither',
  'all'
];

var minecraft_death_id = {
  'anvil': 'death.attack.anvil', // verified
  'attack': 'death.attack.mob', // verified
  'block_explosion': 'death.attack.explosion', // verified
  'charging': 'death.attack.generic', // unverified
  'contact': 'death.attack.cactus', // verified
  'drowning': 'death.attack.drown', // verified
  'entity_attack': 'death.attack.mob', // verified
  'entity_explosion': 'death.attack.explosion', // verified
  'fall': 'death.fell.accident.generic', // verified
  'falling_block': 'death.attack.fallingblock', // verified
  'fire': 'death.attack.inFire', // verified
  'fire_tick': 'death.attack.onFire', // verified
  'fireworks': 'death.attack.fireworks', // verified
  'fly_into_wall': 'death.attack.flyIntoWall', // unverified
  'freezing': 'death.attack.freeze', // verified
  'lava': 'death.attack.lava', // verified
  'lightning': 'death.attack.lightningBolt', // verified
  'magic': 'death.attack.magic', // verified
  'magma': 'death.attack.magma', // unverified
  'override': 'death.attack.generic', // unverified
  'piston': 'death.attack.generic', // unverified
  'projectile': 'death.attack.arrow', // {'arrow': 'death.attack.arrow', 'trident': 'death.attack.trident'} verified
  'stalactite': 'death.attack.stalactite', // verified
  'stalagmite': 'death.attack.stalagmite', // verified
  'starve': 'death.attack.starve', // cannot verify cause mobs dont have hunger bar
  'suffocation': 'death.attack.inWall', // verified
  'suicide': 'death.attack.generic', // unverified
  'temperature': 'death.attack.freeze', // verified
  'thorns': 'death.attack.thorns', // verified
  'void': 'death.attack.outOfWorld', // verified
  'wither': 'death.attack.wither', // unverified
  'all': 'death.attack.generic' // unverified
};

var death_source_id = 'death_message';

var datetime = Date.now();

for (let a = 0; a < death_source.length; a++) {
  fs.appendFileSync(path.join(__dirname, `/death_message_${datetime}.json`), main(death_source_id, death_source[a], minecraft_death_id[death_source[a]]), function (err) {
    if (err) { return console.error(err); };
  });
  console.log(main(death_source_id, death_source[a], minecraft_death_id[death_source[a]]));
};