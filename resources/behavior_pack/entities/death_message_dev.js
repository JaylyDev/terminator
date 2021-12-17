function main(id, source) {
  var event = `"${id}:dev:${source}": { "run_command": { "command": [ "tellraw @a {\\"rawtext\\":[{\\"text\\":\\"${id}:dev:${source}\\"}]}" ]}},`;
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

var death_source_id = 'death_message';

for (let a = 0; a < death_source.length; a++) { console.log(main(death_source_id, death_source[a])); };