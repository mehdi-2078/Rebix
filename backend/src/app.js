require('dotenv/config')

const logger = require('morgan')
const express = require('express');
const compression = require('compression')
const createError = require('http-errors')
const {allRoutes} = require("./routes/index.route");
const mongoose = require("mongoose");
const cors = require("cors");


const {NODE_ENV} = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/todolist')
    .then(() => {
            console.log("Database is connected");
        },
        (err) => {
            console.log("There is problem while connecting database " + err);
        });
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors())

// app.use(compression(configs.compressionConfig));

app.use(allRoutes)


app.listen('3000', () => {
    console.log('listening on http://localhost:3000')
})