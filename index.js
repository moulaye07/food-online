const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env' })

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_DB_URL, (err) => {
    if (!err) console.log("connected");
    else console.log("error");
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});