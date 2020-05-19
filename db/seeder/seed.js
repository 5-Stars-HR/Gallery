const db = require('../index.js');
const { s3Images } = require('./imageData.js');

for (let i = 1; i <= 100; i += 1) {
  db.query('INSERT INTO products (product_id) VALUES (?)', [i]);
  db.query('INSERT INTO images (image_url) VALUES (?)', [`${s3Images[Math.floor(Math.random() * 20)]}`]);

  for (let k = 1; k < 15; k += 1) {
    db.query('INSERT INTO reference (prod_id, img_id) VALUES (?, ?)', [i, Math.floor(Math.random() * 20) + 1]);
  }
}
