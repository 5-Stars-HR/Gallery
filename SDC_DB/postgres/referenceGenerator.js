const fs = require('fs');
const path = require('path');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

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
    // must specify new name for file to prevent overwriting
    path: path.join(__dirname, 'references.csv'),
    header: [
      { id: 'reference_id', title: 'reference_id' },
      { id: 'product_id', title: 'product_id' },
      { id: 'image_id', title: 'image_id' }
    ]
  });
  
  
  const writeToCSV = (start, end) => {
  
    const recordsArray = [];
    // i must match the number of products in the database!
    let referenceCounter = start;
    for (let i = start; i <= end; i++) {
      let imageSet = imageSetMaker(10);
      for (imageId of imageSet) {
        let newRecord = {};
        newRecord.reference_id = referenceCounter;
        newRecord.product_id = i;
        newRecord.image_id = imageId;
        recordsArray.push(newRecord);
        // console.log(recordsArray, 'Records Array to write');
        referenceCounter += 1;
      }
    };
  
    csvWriter.writeRecords(recordsArray)
      .then(() => {
        console.log(`${start} to ${end}...Done!`);
      });
  };
  
  writeToCSV(0, 1000000);