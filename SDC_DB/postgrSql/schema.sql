DROP DATABASE IF EXISTS gallery;

CREATE DATABASE gallery;

\c gallery;

DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS images;

CREATE TABLE products(
   id  SERIAL PRIMARY KEY AUTO_INCREMENT
);

CREATE TABLE images(
   id             SERIAL PRIMARY KEY AUTO_INCREMENT,
   image_url       VARCHAR(255)
);

CREATE TABLE reference(
   reference_id   SERIAL PRIMARY KEY AUTO_INCREMENT,
   product_id     INT,
   image_id       INT
);