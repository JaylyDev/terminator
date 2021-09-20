/********************************************************
+*   (c) JaylyMC. All rights reserved.                    *
+*********************************************************/

var fs = require('fs');
var path = require('path');

function get_line(filename, line_no, callback) {
  var stream = fs.createReadStream(filename, {
    flags: 'r',
    encoding: 'utf-8',
    fd: null,
    mode: 0666,
    bufferSize: 64 * 1024
  });

  var fileData = '';
  stream.on('data', function (data) {
    fileData += data;

    var lines = fileData.split("\n");

    if (lines.length >= +line_no) {
      stream.destroy();
      callback(null, lines[+line_no]);
    }
  });

  stream.on('error', function () {
    callback('Error', null);
  });

  stream.on('end', function () {
    callback('File end reached without finding line', null);
  });

};

function animateScript(block, entities_json) {
  var terminator = JSON.parse(entities_json);

  var ab_animates = terminator['minecraft:entity'].description.scripts.animate;
  var ab_animate_forward = `terminator.advanced_building.${block}.forward`;
  var ab_animate_vertical = `terminator.advanced_building.${block}.vertical.up`;
  var ab_animate_suffocate = `terminator.advanced_building.${block}.suffocation.up`;

  var ab_animation_forward = `controller.animation.terminator.advanced_building.${block}.forward`;
  var ab_animation_vertical = `controller.animation.terminator.advanced_building.${block}.vertical.up`;
  var ab_animation_suffocate = `controller.animation.terminator.advanced_building.${block}.suffocation.up`;

  /*
  terminator['minecraft:entity'].description.scripts.animate.push(`${ab_animates}`, `${ab_animate_forward}`,`${ab_animate_vertical}`, `${ab_animate_suffocate}`);
  terminator['minecraft:entity'].description.animations[`${ab_animate_forward}`] = `${ab_animation_forward}`;
  terminator['minecraft:entity'].description.animations[`${ab_animate_vertical}`] = `${ab_animation_vertical}`;
  terminator['minecraft:entity'].description.animations[`${ab_animate_suffocate}`] = `${ab_animation_suffocate}`;
  */

  var animate_output = `"${ab_animate_forward}",\n"${ab_animate_vertical}",\n"${ab_animate_suffocate}",\n`;
  var animation_output = `"${ab_animate_forward}": "${ab_animation_forward}",\n"${ab_animate_vertical}": "${ab_animation_vertical}",\n"${ab_animate_suffocate}": "${ab_animation_suffocate}",\n`;

  fs.appendFile(`${path.join(__dirname, '/animate.json')}`, `${animate_output}`, function (err) {
    if (err) return console.log(err);
  });
  fs.appendFile(`${path.join(__dirname, '/animation.json')}`, `${animation_output}`, function (err) {
    if (err) return console.log(err);
  });
};

function writejson(block, json_data) {
  const json_output = `${json_data}`.replace(/minecraft:block/g, `${block}`);
  fs.writeFile(`${path.join(__dirname, `blocks/ab.${block}.json`)}`, `${json_output}`, function (err) {
    if (err) return console.log(err);
  });
  fs.readFile(`${path.join(__dirname, '/terminator.json.download')}`, 'utf8', function (err, data) {
    if (err) return console.log(err);
    animateScript(block, data)
  });
};

// Start of the program

fs.writeFile(`${path.join(__dirname, '/animate.json')}`, '', function (err) {
  if (err) return console.log(err);
});
fs.writeFile(`${path.join(__dirname, '/animation.json')}`, '', function (err) {
  if (err) return console.log(err);
});

var count = 0;
var lines = 519;
while (count <= (lines - 2)) {
  count += 1;
  get_line(`${path.join(__dirname, '/blocks.wlist')}`, count, function (err, line) {
    if (err) return console.log(err);
    console.log('The line: ' + line);
    line = line.replace('\r', '').replace('\n', '');
    fs.readFile(`${path.join(__dirname, '/ab.json.download')}`, 'utf8', function (err, data) {
      if (err) return console.log(err);
      writejson(line, data);
    });
  });
};