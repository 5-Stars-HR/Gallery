require('newrelic');
const path = require('path');
const express = require('express');
const cache = require('express-cache-controller');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cassandraDB = require('../index.js');




const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/',(req,res) => {
  res.send('test');
});
app.get('/products/', (req, res) => {
  // res.send('hthththththh')
  console.log('hit')
  const id = Math.ceil(Math.random() * 10000000);
  console.log(id);
  cassandraDB.getProduct(id, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      console.log(result)
      res.status(200).send(result);
    }
    res.end();
  })

})

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});