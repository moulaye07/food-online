const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');
const categoryRoutes = require('./routes/category.routes');
const app = express();

app.use(express.json());

const corsOptions = {
    origin: process.env.CLIENT_URL,
    credentials: true,
    'allowedHeaders': ['sessionId', 'Content-type'],
    'exposedHeaders': ['sessionId'],
    'methods': 'GET, HEAD, PUT, PATCH, POST, DELETE',
    'preflightContinue': false
}

app.use(cors(corsOptions));



app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);


mongoose.connect(process.env.MONGO_DB_URL, (err) => {
    if (!err) console.log("connected");
    else console.log("error");
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});