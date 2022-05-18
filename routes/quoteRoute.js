const { getQuotes } = require('../controllers/quoteController');

const router = require('express').Router();

router.get('/', getQuotes);

module.exports = router;