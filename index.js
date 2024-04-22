const mongoose = require("mongoose")
const express = require('express')
const productRoute = require("./routes/product.route.js");


const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/api/products", productRoute);


app.get('/', function (req, res) {
    res.send('Root')
    console.log("/ called");
})


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