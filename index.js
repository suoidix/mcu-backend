/*
    Imports
*/
const express = require('express');
const app = express();
require('dotenv').config();
const connectToMongoDB = require("./db/mongodb");
const logger = require("morgan");
// Prevent CORS issues
const cors = require('cors');

// Update corsOptions to have ALL origins given access
const corsOptions = {
    origin: "*",
    optionSuccessStatus: 200
}

/*
    Middleware
*/
app.use(cors(corsOptions));
app.use(logger('dev'));
// This will read from data properly
app.use(express.urlencoded({ extended: false }));
// This will read JSON properly
app.use(express.json());

/*
    Routes
*/
const McuRouter = require("./routes/mcuRouter")
app.use("/api", McuRouter);

/*
    Server Listening
*/
const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`);

    connectToMongoDB()
})