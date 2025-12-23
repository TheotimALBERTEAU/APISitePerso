require('dotenv').config();const createError = require('http-errors');

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const skillRouter = require('./routes/skills-route');
const projectRouter = require('./routes/projects-route');

const app = express();

const connectDB = require("./db/connectDB");

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/skills', skillRouter);
app.use('/projects', projectRouter)

connectDB()

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on port ${port}`);
})

module.exports = app;
