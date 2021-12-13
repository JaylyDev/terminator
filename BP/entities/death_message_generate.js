function main(id, source, mcid) {
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
},`;
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

var minecraft_death_id = [
  'death.attack.anvil',
  'death.attack.mob',
  'death.attack.explosion',
  'death.attack.generic',
  'death.attack.generic',
  'death.attack.drown',
  'death.attack.mob',
  'death.attack.explosion',
  'death.fell.accident.generic',
  'death.attack.fallingblock',
  'death.attack.inFire',
  'death.attack.onFire',
  'death.attack.fireworks',
  'death.attack.flyIntoWall',
  'death.attack.freeze',
  'death.attack.lava',
  'death.attack.lightningBolt',
  'death.attack.magic',
  'death.attack.magma',
  'death.attack.generic',
  'death.attack.generic',
  'death.attack.arrow',
  'death.attack.stalactite',
  'death.attack.stalagmite',
  'death.attack.starve',
  'death.attack.inWall',
  'death.attack.generic',
  'death.attack.freeze',
  'death.attack.thorns',
  'death.attack.outOfWorld',
  'death.attack.wither',
  'death.attack.generic'
];

var death_source_id = 'death_message';

for (let a = 0; a < death_source.length; a++) { console.log(main(death_source_id, death_source[a], minecraft_death_id[a])); };