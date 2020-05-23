## CRUD API

### Get images info
  * GET `/api/images/:id`

**Path Parameters:**
  * `id` image id

**Success Status Code:** `200`

**Returns:** JSON

```json
    {
      "id": "Number",
      "image_url": "String"
    }
```

### Add image
  * POST `/api/images`

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "product_id": "Number",
      "image_url" : "String"      
    }
```


### Update image info
  * PUT `/api/images/:id`

**Path Parameters:**
  * `id` image id

**Success Status Code:** `204`

**Request Body**: Expects JSON with any of the following keys (include only keys to be updated)

```json
    {
      "product_id": "Number",
      "image_url" : "String"  
    }
```

### Delete image
  * DELETE `/api/images/:id`

**Path Parameters:**
  * `id` image id

**Success Status Code:** `204`

```