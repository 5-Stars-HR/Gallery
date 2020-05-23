DROP KEYSPACE IF EXISTS gallery;
CREATE KEYSPACE gallery;

USE gallery;

CREATE TABLE products (
  id uuid,
  PRIMARY KEY(id)
);

CREATE TABLE images (
    id uuid,
    product_id uuid,
    image_url TEXT,
    PRIMARY KEY(product_id, id)
);

