//Variables declared
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

//MongoDB Connection
mongoose.connect('mongodb://localhost:27017/eShop', {useNewUrlParser: true})
    .then(() => {
        console.log("MONGO WE STILL LOVE YOU CONN OPEN")
    })
    .catch(err => {
        console.log("HOUSTON COMMS BROKE")
        console.log(err)
    })

//App setup/Page Routing
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/products', async (req, res) => {
    const products = await Product.find({})
    res.render('products/index', { products })
})

app.get('/products/new', (req, res) => {
    res.render('products/new')
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/show', { product })
}) 

//server setup
app.listen(3000, () => {
    console.log("APP IS LISTENING! ON PORT 3000")
})