DROP DATABASE IF EXISTS gallery;

CREATE DATABASE gallery;

\c gallery;

DROP TABLE IF EXISTS products;

CREATE TABLE products(id  SERIAL PRIMARY KEY);

DROP TABLE IF EXISTS images;
CREATE TABLE images(
   id             SERIAL PRIMARY KEY,
   image_url      VARCHAR(255)
);

DROP TABLE IF EXISTS images_product;

CREATE TABLE images_product(
   reference_id   SERIAL PRIMARY KEY,
   product_id     INT,
   image_id       INT
);



-- SELECT a.image_url FROM images a INNER JOIN images_product b ON a.id = b.image_id WHERE b.product_id =2;



