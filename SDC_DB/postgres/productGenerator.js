const fs = require('fs');
const path = require('path');
const faker = require('faker');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;


// //?Create products

const csvProductWriter = createCsvWriter({
  path: path.join(__dirname, 'products.csv'),
  header: [
    { id: 'product_id', title: 'product_id' },
  ]
});

const records = [];

for (let i = 0; i <= 10000000; i++) {
  let newRecord = {};
  newRecord.product_id = i;
  records.push(newRecord);
};

csvProductWriter.writeRecords(records)
  .then(() => {
    console.log('...Done');
  });
