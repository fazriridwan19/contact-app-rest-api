var mysql      = require('mysql');
var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT
});
const connectWithRetry = () => {
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting ' + err.stack);
            setTimeout(connectWithRetry, 5000);
        } else {
            console.log('Succesfully connect to database');
        }
    });
}

module.exports = {connection, connectWithRetry};