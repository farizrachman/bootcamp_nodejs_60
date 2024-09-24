const fs = require('fs');

const fileName = 'data.txt';

fs.readFile(fileName, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});