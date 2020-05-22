DROP DATABASE IF EXISTS gallery;

CREATE DATABASE gallery;

\c gallery;

DROP TABLE IF EXISTS products;

CREATE TABLE products(
   id  SERIAL PRIMARY KEY AUTO_INCREMENT
);

DROP TABLE IF EXISTS images;
CREATE TABLE images(
   id             SERIAL PRIMARY KEY AUTO_INCREMENT,
   image_url      VARCHAR(255)
);

DROP TABLE IF EXISTS images_product;

CREATE TABLE images_product(
   reference_id   SERIAL PRIMARY KEY AUTO_INCREMENT,
   product_id     INT,
   image_id       INT
);