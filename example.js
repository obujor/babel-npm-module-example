import Developer from './src/developer.js';

var developer = new Developer('Alex', '??');

developer.sayWhoAmI();

async function asyncFun () {
  var value = await Promise
    .resolve(1)
    .then(x => x * 3)
    .then(x => x + 5)
    .then(x => x / 2);
  return value;
}
asyncFun().then(x => console.log(`x: ${x}`));