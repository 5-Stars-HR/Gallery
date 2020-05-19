const { getProduct } = require('./model.js');

const getProductImages = (id, callback) => {
  getProduct(id, (error, results) => {
    if (error) {
      callback(error);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  getProductImages,
};
