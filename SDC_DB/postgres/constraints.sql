ALTER TABLE images_product
  ADD CONSTRAINT product_id FOREIGN KEY (product_id) REFERENCES products (id);

ALTER TABLE images_product
  ADD CONSTRAINT image_id FOREIGN KEY (image_id) REFERENCES images (id);