/********************************************************
+*   (c) JaylyMC. All rights reserved.                    *
+*       Run script using node.js                         *
+*********************************************************/

const fs = require('fs');
const path = require('path');

// reset 'terminator.break.v2.json'
// get file and turn into string
var content = fs.readFileSync(path.join(__dirname, '/terminator.break.v2.json.download')).toString();

// remove json comments
try {
  var result = content.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
} catch (err) {
  console.err(err);
  var result = content;
};

// turns var to json
var controller = JSON.parse(result);

// get terminator.json and turn into string
var data = fs.readFileSync(path.join(__dirname, '../entities/terminator.json')).toString();

// remove json comments
try {
  var minecraft_json = data.replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
} catch (err) {
  console.err(err);
  var minecraft_json = data;
};

// turns var to json
var terminator = JSON.parse(minecraft_json);

// get array of "breakable_blocks"
var blocks = terminator['minecraft:entity'].component_groups['terminator:break_blocks.v2']['minecraft:break_blocks'].breakable_blocks

// string for 'break_blocks_on_entry_message' & location for 'on_entry'
var break_blocks_on_entry_message = '/fill ~ ~ ~ ~ ~1 ~ air 0 replace '
var on_entry = controller.animation_controllers['controller.animation.terminator.break_blocks_backup'].states.running_state.on_entry

// write code
for (let i = 0; i < blocks.length; i++) {
  block = blocks[i];
  block_result = break_blocks_on_entry_message + block;
  on_entry.push(block_result)
}

// write file
var json_result = JSON.stringify(controller, null, 2)

var jaylymc_credit = '/********************************************************\n+*   (c) JaylyMC. All rights reserved.                    *\n+*********************************************************/\n\n'

fs.writeFile(path.join(__dirname, '/terminator.break.v2.json'), jaylymc_credit + json_result, function (err) {
  if (err) { return console.error(err); };
  console.log('Saved!');
});