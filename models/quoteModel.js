const { connection } = require('../config/db2');

module.exports = {
    readQuotes: callback => {
        const query = 'SELECT * FROM quote';
        connection.query(
            query,
            (error, result) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, result);
            }
        );
    }
}