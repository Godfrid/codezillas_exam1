// 5.9. Írj programot, mely az általad bevitt kulcs-érték párokat, melynek számossága dinamikus, json fájlba írja ki. (10p) */
// Nem jo de mar kozeledtem.

const fs = require('fs');
const readlineSync = require('readline-sync');

const SaveObject = (object) => {
  fs.writeFileSync('object.json', JSON.stringify(object));
};

let i = 0;
let object = {};

while (true) {
  let answers = ['Add value', 'Save'];
  let index = readlineSync.keyInSelect(answers, '', {cancel: 'Quit'});
  if (index === 0) {
    object[i] = readlineSync.question('Give a key:');
    object[i] = readlineSync.question('Give a value:');
    i++;
    continue;
  }
  if (index === 1) {
    SaveObject(object);
    continue;
  } else {
    break;
  }
}
