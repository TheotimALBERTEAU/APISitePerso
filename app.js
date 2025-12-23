require('dotenv').config();const createError = require('http-errors');

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const skillRouter = require('./routes/skills-route');

const app = express();

const connectDB = require("./db/connectDB");

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/skills', skillRouter);

connectDB()

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

module.exports = app;
