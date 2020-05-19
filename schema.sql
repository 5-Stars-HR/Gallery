DROP DATABASE IF EXISTS gallery;

CREATE DATABASE gallery;

USE gallery;

CREATE TABLE products (
  product_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY ( product_id )
);

CREATE TABLE images (
  image_id INT NOT NULL AUTO_INCREMENT,
  image_url VARCHAR(255),
  PRIMARY KEY ( image_id )
);

CREATE TABLE reference (
  reference_id INT NOT NULL AUTO_INCREMENT,
  prod_id INT NOT NULL,
  img_id INT,
  PRIMARY KEY (reference_id)
);