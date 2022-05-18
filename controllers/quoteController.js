const { readQuotes } = require("../models/quoteModel")

module.exports = {
    getQuotes: (req, res) => {
        readQuotes((err, results) => {
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
}