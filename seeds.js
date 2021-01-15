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

    //const p = new Product({
        //name: 'Ruby Grapefruit',
        //price: 1.99,
        //category: 'fruit'
    //})
    //p.save().then(p => {
        //console.log(p)
    //})
        //.catch(e => {
        //    console.log(e)
        //})

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Peach',
        price: 2.00,
        category: 'fruit'
    },
    {
        name: 'Milk',
        price: 3.00,
        category: 'dairy'
    },
    {
        name: 'Spicy Tortilla Chips',
        price: 2.50,
        category: 'snack'
    }

]   

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })