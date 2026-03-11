require('dotenv').config();const createError = require('http-errors');

const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const skillRouter = require('./routes/skills-route');
const projectRouter = require('./routes/projects-route');
const experiencesRouter = require('./routes/experience-route');
const educationRouter = require('./routes/education-route');

const app = express();

const connectDB = require("./db/connectDB");

const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: "Trop de requêtes, réessaie plus tard."
});

app.use(limiter);

app.use(cors())

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/skills', skillRouter);
app.use('/projects', projectRouter);
app.use('/experiences', experiencesRouter);
app.use('/education', educationRouter);

connectDB()

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
    console.log(`Listening on port ${port}`);
})

module.exports = app;
