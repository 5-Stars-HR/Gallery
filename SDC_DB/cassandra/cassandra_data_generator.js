const fs = require('fs');
const path = require('path');
const faker = require('faker');
const {Client} = require('cassandra-driver');




let imageSeed = ``;

const imageProduction = num => {
    
    for(let i = 0; i < num; i++) {
        let images_url = faker.image.imageUrl();
//?const createReviewQuery = 'INSERT INTO reviews (product_id, username, is_verified, review_text, score, found_helpful, title, review_date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)';
        const query = `INSERT INTO images (id, image_url) VALUES ($1,$2)`;
        const data = [i, images_url];
        // imageSeed += `INSERT INTO images (id, image_url) VALUE ("${i}", "${images_url}"); \n`
        
        //?require postgres
        //?open a query connection
        //?insert the image seed 
        //?check to make sure you dont error out.
        connection.query(query, data, (err,data) => {
            if(err) {
                console.log(err);
            } 
        })

    // const filePath = path.join(__dirname, `../data/imageSeed$.txt`)
    //   fs.writeFile(filePath, imageSeed, (err) => {
    //     if (err) {
    //       console.log(err,`image seed write fail`);
    //     } else {
    //       productSeed = ``;
    //       console.log(`${i}, post success`);
    //     }
    //   });
    }
}

imageProduction(100);

process.exit();