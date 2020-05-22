const fs = require('fs');
const path = require('path');
const faker = require('faker');

let imageSeed = ``;

const imageProduction = num => {

    for(let i = 0; i < num; i++) {
        let images_url = faker.image.imageUrl();

        imageSeed += `INSERT INTO images (id, image_url) VALUE ("${i}", "${images_url}"); \n`

    const filePath = path.join(__dirname, `../data/imageSeed${(i + 1) / 10}.txt`)
      fs.writeFile(filePath, imageSeed, (err) => {
        if (err) {
          console.log(err,`image seed write fail`);
        } else {
          productSeed = ``;
          console.log(`${i}, post success`);
        }
      });
    }
}

imageProduction(100);