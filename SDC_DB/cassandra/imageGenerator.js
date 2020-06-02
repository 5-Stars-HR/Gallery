const fs = require('fs');
const path = require('path');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


//?create images for products

// let j = 1;
// let counter = 0;
// while(j){
//   let i = 10000000;
//   let file = fs.createWriteStream(`./imageSeed${j}.csv`);
//   let image = faker.image.imageUrl();
//   while(i) {
//       file.write(
//       counter++ + ',' +
//         image + 
//       '\n');
//     i--;
//   }
//   file.end();
//   j--;
// }

const imageSetMaker = (numComboItems) => {
  const imageSet = new Set();
  while (imageSet.size < numComboItems) {
    imageSet.add(Math.floor(Math.random() * 1000000));
  }
  return Array.from(imageSet).sort( (a, b) => (
    a-b
  ));
};


const csvWriter = createCsvWriter({
  path: path.join(__dirname, 'images.csv'),
  header: [
    { id: 'image_id', title: 'image_id' },
    { id: 'product_id', title: 'product_id' },
    { id: 'image_url', title: 'image_url' },
  ]
});

const writeToCSV = (start, end) => {
  
  const image_products_array = [];
  // i must match the number of products in the database!
  let referenceCounter = start;
  for (let i = start; i <= end; i++) {
    let imageSet = imageSetMaker(10);
    let image = faker.image.imageUrl();
    for (imageId of imageSet) {
      let newRecord = {};
      newRecord.image_id = imageId;
      newRecord.product_id = i;
      newRecord.image_url = image;
      image_products_array.push(newRecord);
      // console.log(image_products_array, 'Records Array to write');
      referenceCounter += 1;
    }
  };

  csvWriter.writeRecords(image_products_array)
    .then(() => {
      console.log(`${start} to ${end}...Done!`);
    });
};

writeToCSV(0, 1000000);

// const records = [];
// let counter = 0;
// for (let i = 0; i <= 10000000; i++) {
//   let image = faker.image.imageUrl();
//   let newRecord = {};
//   newRecord.image_id = i;
//   newRecord.product_id = i;
//   newRecord.image_url = image;
//   records.push(newRecord);
// };

// csvProductWriter.writeRecords(records)
// .then(() => {
//   console.log('...Done');
// });

console.log('finished seeding images');







// process.exit();