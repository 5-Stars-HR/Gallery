const db = require('../db/index.js');

const getProduct = (id, callback) => {
  const query = `SELECT image_url, product_id, image_id, reference_id FROM images INNER
   JOIN reference ON image_id = reference.img_id INNER JOIN
   products ON product_id = reference.prod_id WHERE prod_id =${id}`;

  db.query(query, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getProduct,
};
