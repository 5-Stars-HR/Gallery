const fs = require('fs');
const path = require('path');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


//?create images for products

let j = 1;
let counter = 0;
while(j){
  let i = 10000000;
  let file = fs.createWriteStream(`./imageSeed${j}.csv`);
  let image = faker.image.imageUrl();
  while(i) {
      file.write(
      counter++ + ',' +
        image + 
      '\n');
    i--;
  }
  file.end();
  j--;
}
console.log('finished seeding images');


  





// process.exit();