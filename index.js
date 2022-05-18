require('dotenv').config();
const express = require('express');
const { connectWithRetry } = require('./config/db');
const contactRouter = require('./routes/contactRoute');
const quoteRouter = require('./routes/quoteRoute');

const app = express();
connectWithRetry();

app.use(express.json());

app.use('/api/v1/contacts', contactRouter);
app.use('/api/v1/quotes', quoteRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on http://192.168.137.128:${port}`));
