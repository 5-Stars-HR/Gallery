const supertest = require('supertest');
const app = require('../../server/server.js');
const db = require('../../db/index.js');

const request = supertest(app);

describe('Testing images GET Request', () => {
  afterAll(async (done) => {
    db.end();
    done();
  });

  it('Should get images of a product', async (done) => {
    const productImage = [
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/19.jpg',
        product_id: 10,
        image_id: 13,
        reference_id: 127,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/8.jpg',
        product_id: 10,
        image_id: 7,
        reference_id: 128,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/18.jpg',
        product_id: 10,
        image_id: 10,
        reference_id: 129,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/5.jpg',
        product_id: 10,
        image_id: 9,
        reference_id: 130,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/18.jpg',
        product_id: 10,
        image_id: 11,
        reference_id: 131,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/17.jpg',
        product_id: 10,
        image_id: 8,
        reference_id: 132,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/18.jpg',
        product_id: 10,
        image_id: 10,
        reference_id: 133,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/19.jpg',
        product_id: 10,
        image_id: 13,
        reference_id: 134,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/16.jpg',
        product_id: 10,
        image_id: 4,
        reference_id: 135,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/2.jpg',
        product_id: 10,
        image_id: 5,
        reference_id: 136,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/20.jpg',
        product_id: 10,
        image_id: 17,
        reference_id: 137,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/6.jpg',
        product_id: 10,
        image_id: 1,
        reference_id: 138,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/11.jpg',
        product_id: 10,
        image_id: 18,
        reference_id: 139,
      },
      {
        image_url: 'https://legogallery.s3-us-west-1.amazonaws.com/18.jpg',
        product_id: 10,
        image_id: 10,
        reference_id: 140,
      },
    ];

    const response = await request.get(
      `/api/images/${productImage[0].product_id}`,
    );

    expect(response.statusCode).toEqual(200);
    expect(response.body).toEqual(productImage);
    expect(response.body.length).toEqual(14);

    done();
  });

  it('should respond with a 404 product id does not exist', async (done) => {
    const response = await request.get('/api/images/null');
    expect(response.statusCode).toEqual(404);
    done();
  });
});
