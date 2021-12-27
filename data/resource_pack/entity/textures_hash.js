const fs = require('fs');
const path = require('path');

var filename = 'terminator.entity.json';
var entity = JSON.parse(fs.readFileSync(path.join(`${__dirname}/${filename}`)).toString().replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m))
var textures = entity['minecraft:client_entity']['description']['textures'];
var assignment = ['steve', 'alex', 'steve_xmas', 'alex_xmas'];
for (let index = 0; index < assignment.length; index++) {
  var value = textures[assignment[index]];
  var imagename = value.toString().split('/').pop();
  var result = require('crypto').createHash('md5').update(imagename).digest("hex");
  textures[assignment[index]] = value.toString().replace(imagename, '') + result;
};/*
fs.mkdirSync(path.join(`${__dirname}\\..\\..\\..\\resources\\ModifyJSON\\resource_pack\\entity`), {recursive: true})
fs.writeFileSync(path.join(`${__dirname}\\..\\..\\..\\resources\\ModifyJSON\\resource_pack\\entity\\${filename}`), JSON.stringify(entity, null, 2))
*/
const credit = `/********************************************************
+*   (c) JaylyMC. All rights reserved.                    *
+*********************************************************/

// use this file if addon filenames is going to be modified

`;
fs.writeFileSync(path.join(`${__dirname}/${filename.replace('terminator', 'terminator_imagehash')}`), credit + JSON.stringify(entity, null, 2))
