const express = require('express')
const app = express();
const cors = require('cors');
const route = require('./routes')
const mongoose = require("mongoose");
require('dotenv').config({ path: './config.env' })

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    allowedHeaders: ["sessionId", "Content-Type"],
    exposedHeaders: ["sessionId"],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
};


mongoose
    .connect(process.env.db_Host, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));

app.use(cors(corsOptions));

app.use(express.json());
app.use('/api', route);



app.listen(5000, console
    .log('server is running in port 5000'))

