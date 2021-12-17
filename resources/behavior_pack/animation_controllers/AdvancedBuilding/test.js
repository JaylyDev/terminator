// me testing json. why are you here
const animals = ['pigs', 'goats', 'sheep'];
const count = animals.push('cows');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

const humanname = { 'true': 'a', 'false': 'b' };
humanname['nature'] = false;
console.log(humanname)
