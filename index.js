//Variables declared
const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

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

app.get('/dog', (req, res) => {
    res.send('CuJo!')
})

app.listen(3000, () => {
    console.log("APP IS LISTENING! ON PORT 3000")
})