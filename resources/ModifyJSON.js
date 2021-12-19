const path = require('path');
const fs = require('fs');

function ListFiles(dir, done) {
  var results = [];
  fs.readdir(dir, function (err, list) {
    if (err) return done(err);
    var i = 0;
    (function next() {
      var file = list[i++];
      if (!file) return done(null, results);
      file = path.resolve(dir, file);
      fs.stat(file, function (err, stat) {
        if (stat && stat.isDirectory()) {
          ListFiles(file, function (err, res) {
            results = results.concat(res);
            next();
          });
        } else { results.push(file); next(); };
      });
    })();
  });
};

/**
 * Escape string to unicode
 * @param {string} value 
 * @returns {string}
 */
 function escapeToUnicode(value) {
  for(var newString = '', i = 0, unicode; !isNaN(unicode = value.charCodeAt(i++));)
      newString += '\\u' + `0000${unicode.toString(16)}`.slice(-4);
  return newString;
};

/**
 * Validate JSON first. Obfuscate a whole json string
 * @param {string} value
 * @returns {string}
 */
 function obfuscateJSON(value) {
  const stringRegex = /"(?:"|.)*?"/gm;
  
  const syntaxArr = value.split(stringRegex), stringArr = `"${value}"`.split(stringRegex).slice(1, -1);
  
  let unicodeArr = [], obfuscated = '';
  stringArr.forEach(str => unicodeArr.push(`"${escapeToUnicode(str).replace(/\\u005c$/g, '\\')}"`));
  syntaxArr.map((value, index) => obfuscated += `${value}${unicodeArr[index] ? unicodeArr[index] : ''}`);
  obfuscated = obfuscated.replace(/\\u005c\\u006e/g, '\\n');

  return obfuscated;
};

var credit_msg = `/********************************************************\n+*   (c) JaylyMC. All rights reserved.                    *\n+*********************************************************/\n\n`;
// var inputDirectoryPath = `C:\\Users\\${require("os").userInfo().username}\\Documents\\GitHub\\terminator\\data`; // DO NOT ADD '\\' AT THE END OF THE VARIABLE
var inputDirectoryPath = `..\\${path.join(__dirname)}\\data`;
var outputDirectoryPath = `${path.join(__dirname)}\\ModifyJSON`; // DO NOT ADD '\\' AT THE END OF THE VARIABLE
var obfuscate = true;
var minify = true;
var show_credit = true; // Modify credit_msg if show_credit = true

ListFiles(inputDirectoryPath, function (err, files) {
  if (err) throw err;
  var extention = '.json';
  files.forEach(function (file) {
    var a = file.split('');
    var filename = [a[a.length - 5], a[a.length - 4], a[a.length - 3], a[a.length - 2], a[a.length - 1]].toString().replace(/,/g, '');
    if (filename.toLowerCase() == extention.toLowerCase()) {      
      console.log(`\x1b[32m${extention} file found \x1b[0m- ${file.replace(inputDirectoryPath, '')}`);
      if (minify == true) {  
        try {
          var content = JSON.stringify(JSON.parse(fs.readFileSync(`${file}`).toString().replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m)));
        } catch (err) {
          console.error(`\x1b[31mUnable to minify ${file.replace(inputDirectoryPath, '')}\x1b[0m`);
          console.error(err);
          var content = fs.readFileSync(`${file}`).toString().replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
        };
      } else {
        var content = fs.readFileSync(`${file}`).toString().replace(/\\"|"(?:\\"|[^"])*"|(\/\/.*|\/\*[\s\S]*?\*\/)/g, (m, g) => g ? "" : m);
      };
      var OutputFilepath = file.replace(inputDirectoryPath, outputDirectoryPath).split('\\');
      var OutputDirectoryPath = OutputFilepath.slice(0, -1).toString().replace(/,/g, '/');
      var OutputFilename = OutputFilepath.slice(OutputFilepath.length - 1, OutputFilepath.length - 0).toString().replace(/,/g, '\\');
      fs.mkdirSync(OutputDirectoryPath, { recursive: true });
      if (obfuscate == true) { content = obfuscateJSON(content); } else {};
      if (show_credit == true){ content = credit_msg + content; } else {};
      fs.writeFileSync(`${OutputDirectoryPath}\\${OutputFilename}`, content, function (err) {
        if (err) { return console.error(err); };
      });
    };
  });
});
