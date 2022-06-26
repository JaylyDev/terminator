const path = require('path');
const fs = require('fs');
const crypto = require("crypto");

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

var inputDirectoryPath = path.join(`${__dirname}\\ModifyJSON`);
var outputDirectoryPath = path.join(`${__dirname}\\compile-addon`);
var ignoreFilenames = ['manifest', 'languages', 'language_names', 'contents', 'pack_icon', 'LICENSE', 'README', 'custom', 'en_US', 'en_GB', 'de_DE', 'es_ES', 'es_MX', 'fr_FR', 'fr_CA', 'it_IT', 'ja_JP', 'ko_KR', 'pt_BR', 'pt_PT', 'ru_RU', 'zh_CN', 'zh_TW', 'nl_NL', 'bg_BG', 'cs_CZ', 'da_DK', 'el_GR', 'fi_FI', 'hu_HU', 'id_ID', 'nb_NO', 'pl_PL', 'sk_SK', 'sv_SE', 'tr_TR', 'uk_UA', 'alex', 'cape_custom', 'cape_invisible', 'steve'];

ListFiles(inputDirectoryPath, function (err, files) {
  if (err) throw err;
  var extention = '.json';
  files.forEach(function (file) {
    var a = file.split('');
    var filename = [a[a.length - 5], a[a.length - 4], a[a.length - 3], a[a.length - 2], a[a.length - 1]].toString().replace(/,/g, '');
    if (filename.toLowerCase() == extention.toLowerCase()) {
      console.log(`\x1b[32m${extention} file found \x1b[0m- ${file.replace(inputDirectoryPath, '')}`);
      var content = fs.readFileSync(`${file}`);
      var type = file.replace(inputDirectoryPath, '').split("\\")[1];
      var OutputFilepath = file.replace(inputDirectoryPath, `${outputDirectoryPath}\\${type}`).split('\\');
      var FileOutputDirectoryPath = OutputFilepath.slice(0, -1).toString().replace(/,/g, '/');
      if (ignoreFilenames.includes(String(OutputFilepath.slice(OutputFilepath.length - 1, OutputFilepath.length - 0).toString().replace(/,/g, '\\').replace(/.json/g, ''))) == false) {
        var OutputFilename = crypto.createHash('md5').update(OutputFilepath.slice(OutputFilepath.length - 1, OutputFilepath.length - 0).toString().replace(/,/g, '\\').replace(/.json/g, '')).digest("hex");
        OutputFilename = OutputFilename.replace('df14c2f0c0cf63c4b3b1662f119fb826', 'language_names').replace('f3e334d42863e8250c7d03efefbfd387', 'languages');
      } else {
        var OutputFilename = OutputFilepath.slice(OutputFilepath.length - 1, OutputFilepath.length - 0).toString().replace(/,/g, '\\').replace(/.json/g, '');
      };
      fs.mkdirSync(FileOutputDirectoryPath, { recursive: true });
      fs.writeFileSync(`${FileOutputDirectoryPath}\\${OutputFilename}.json`, content, function (err) {
        if (err) { return console.error(err); };
      });
    } else {
      console.log(`\x1b[32mOther type of file found \x1b[0m- ${file.replace(inputDirectoryPath, '')}`);
      var content = fs.readFileSync(`${file}`);
      var type = file.replace(inputDirectoryPath, '').split("\\")[1];
      var OutputFilepath = file.replace(inputDirectoryPath, `${outputDirectoryPath}\\${type}`).split('\\');
      var getExtension = OutputFilepath.slice(OutputFilepath.length - 1, OutputFilepath.length - 0).toString().split('.').pop().toString();
      var FileOutputDirectoryPath = OutputFilepath.slice(0, -1).toString().replace(/,/g, '/');
      if ((ignoreFilenames.includes(String(OutputFilepath.slice(OutputFilepath.length - 1, OutputFilepath.length - 0).toString().replace(/,/g, '\\').replace(`.${getExtension}`, ''))) == false) && (getExtension != 'js') && (getExtension != 'mcfunction')) {
        var OutputFilename = crypto.createHash('md5').update(OutputFilepath.slice(OutputFilepath.length - 1, OutputFilepath.length - 0).toString().replace(/,/g, '\\').replace(`.${getExtension}`, '')).digest("hex");
      } else {
        var OutputFilename = OutputFilepath.slice(OutputFilepath.length - 1, OutputFilepath.length - 0).toString().replace(/,/g, '\\').replace(`.${getExtension}`, '');
      };
      fs.mkdirSync(FileOutputDirectoryPath, { recursive: true });
      fs.writeFileSync(`${FileOutputDirectoryPath}\\${OutputFilename}.${getExtension}`, content, function (err) {
        if (err) { return console.error(err); };
      });
    };
  });
});