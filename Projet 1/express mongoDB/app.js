const express = require('express');
const app = express();
require('./models/dbconfig');
const postsRoutes = require('./routes/postsController');
const bodyParser = require('body-parser');
require('dotenv/config');
const mongoose = require('mongoose');
const cors = require('cors')

//Middlewares
mongoose.set('useFindAndModify', false);
app.use(bodyParser.json())
app.use(cors()); // cela permet de donner accès à tout le monde de notre API.
app.use('/posts', postsRoutes);


//Ecoute du server
app.listen(5500, () => {
    console.log('Le serveur est sur le port N°5500')
});


