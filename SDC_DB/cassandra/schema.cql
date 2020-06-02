DROP KEYSPACE IF EXISTS gallery;
CREATE KEYSPACE IF NOT EXISTS gallery WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : 1};

USE gallery;

CREATE TABLE products (
  product_id bigint,
  PRIMARY KEY(product_id)
);

CREATE TABLE images (
    image_id bigint,
    product_id bigint,
    image_url TEXT,
    PRIMARY KEY(product_id, image_id)
);

