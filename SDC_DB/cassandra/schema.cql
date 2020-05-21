DROP KEYSPACE IF EXISTS gallery;
CREATE KEYSPACE gallery;

USE gallery;

CREATE TABLE products (
  id INT,
  PRIMARY KEY(id)
);

CREATE TABLE images (
    id INT,
    image_url TEXT
);

CREATE TABLE reference (
    reference_id INT,
    product_id INT,
    image_id INT
    PRIMARY KEY(reference_id)
);