const { create, read, readById, updateById, deleteById } = require('../models/contactModel');

const addNewContact = (req, res) => {
    create(req.body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                status: 'Failed',
                message: 'Connection error'
            });
        }
        return res.status(200).json({
            status: 'Success',
            message: 'Add new number succesfully',
            info: results
        });
    });
}

const getContacts = (req, res) => {
    read((err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        if (results.length === 0) {
            return res.json({
                status: 'Failed',
                message: 'Data unavailable',
            });
        }
        return res.json({
            status: 'Success',
            data: results
        });
    });
}

const getContactById = (req, res) => {
    const id = req.params.id;
    readById(id, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        if (results.length === 0) {
            return res.json({
                status: 'Failed',
                message: 'Data does not exist',
            });
        }
        return res.json({
            status: 'Success',
            data: results
        });
    });
}

const setContact = (req, res) => {
    updateById(req.body, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({
                status: 'Failed',
                message: 'Connection error'
            });
        }
        if (results.changedRows === 0) {
            return res.json({
                status: 'Failed',
                message: 'Data does not exist',
            });
        }
        return res.status(200).json({
            status: 'Success',
            message: 'Data succesfully updated',
            info: results
        });
    });
}

const deleteContact = (req, res) => {
    const id = req.params.id;
    deleteById(id, (err, results) => {
        if (err) {
            console.log(err);
            return;
        }
        if (results.affectedRows !== 1) {
            return res.json({
                status: 'Failed',
                message: 'Data does not exist',
            });
        }
        return res.json({
            status: 'Success',
            message: 'Data successfully deleted',
            info: results
        });
    });
}

module.exports = { addNewContact, getContacts, getContactById, setContact, deleteContact };