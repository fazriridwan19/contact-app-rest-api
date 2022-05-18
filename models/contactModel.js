const { connection } = require('../config/db');

const create = (body, callback) => {
    const query = 'INSERT INTO users (name, number, provider, region) VALUES (?, ?, ?, ?)';
    connection.query(
        query,
        [
            `${body.name}`,
            `${body.number}`,
            `${body.provider}`,
            `${body.region}`
        ],
        (error, results) => {
            if (error) {
                return callback(error); 
            }
            return callback(null, results);
        }    
    );
}

const read = callback => {
    const query = 'SELECT * FROM users';
    connection.query(
        query,
        (error, results) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    );
}

const readById = (id, callback) => {
    const query = 'SELECT * FROM users WHERE id = ?';
    connection.query(
        query,
        [`${id}`],
        (error, results) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    );
}

const updateById = (body, callback) => {
    const query = 'UPDATE users SET name = ?, number = ?, provider = ?, region = ? WHERE id = ?';
    connection.query(
        query,
        [
            `${body.name}`,
            `${body.number}`,
            `${body.provider}`,
            `${body.region}`,
            `${body.id}`
        ],
        (error, results) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    );
}

const deleteById = (id, callback) => {
    const query = 'DELETE FROM users WHERE id = ?';
    connection.query(
        query,
        [`${id}`],
        (error, results) => {
            if (error) {
                return callback(error);
            }
            return callback(null, results);
        }
    );
}
module.exports = { create, read, readById, updateById, deleteById };