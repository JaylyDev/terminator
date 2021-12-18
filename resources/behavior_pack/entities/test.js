const fs = require('fs');
const path = require('path');

console.log(JSON.parse(fs.readFileSync(path.join(__dirname, '/type_family.json')).toString())['minecraft:type_family']['family'])