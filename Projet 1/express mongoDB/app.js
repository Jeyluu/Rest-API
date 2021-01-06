const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

//Middlewares : fonction qui execute quand les routes sont ciblées (app.use)
app.use(bodyParser.json());


//importation  routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//routes
app.get('/', (req,res) => {
    res.send('we are on home')
});


//connection à DB
mongoose.connect(
    process.env.DB_CONNECTION,
{ useNewUrlParser: true },
() => {
    console.log('Vous êtes connecté à mongoDb')
})

//Ecoute du server
app.listen(3000);


