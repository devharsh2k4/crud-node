const mongoose = require("mongoose")
const express = require('express')
const Product = require('./models/product.model');


const app = express()


app.use(express.json());

app.get('/', function (req, res) {
    res.send('Root')
    console.log("/ called");
})

app.get('/api/products', async (req, res,) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.get('/api/products/:id', async (req, res) => {
    try {
const {id} = req.params;
const product = await Product.findById(id);
res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



mongoose.connect("mongodb+srv://devharsh2k4:qNW37OpvGj87xHL4@cruddb.uljq7gc.mongodb.net/node-api?retryWrites=true&w=majority&appName=CrudDB")
    .then(() => {
        console.log("connected to database");

    })
    .catch(() => {
        console.log("Connection Failed");
    })

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})  