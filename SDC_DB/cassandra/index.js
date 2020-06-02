const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['127.0.0.1'],
  keyspace: 'gallery',
  localDataCenter: 'datacenter1',
});

client.connect();

module.exports = {
    getProduct: async (productId, cb) => {
        const productQuery = 'SELECT * FROM images WHERE product_id = ?';
        const product_id = [productId];
        let images = await client.execute(productQuery,product_id, {prepare:true})
            if(images.rows[0]){
                console.log(images.rows);
            }
            cb(null, images);
    }
}

async function read() {
    client.connect().then(function () {
      console.log('Connected to cluster with %d host(s): %j', client.hosts.length, client.hosts.keys());
      client.hosts.forEach(function (host) {
   console.log(host.address, host.datacenter, host.rack);
});

    });
}

read();


// dsbulk load -url /Users/sumitlal/Desktop/SDC/Gallery/SDC_DB/postgres/imageSeed1.csv -k galley -t images -h '127.0.0.1:9042' -header false
// module.exports = client;