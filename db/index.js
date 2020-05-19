const mysql = require('mysql');

const mysqlConfig = {
  host: '54.215.111.162',
  user: 'root',
  password: '',
  database: 'gallery',
};
const connection = mysql.createConnection(mysqlConfig);
module.exports = connection;
