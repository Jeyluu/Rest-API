const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/node-api",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        if(!err) 
        console.log('Vous etes conneté à MongoDb');

        else 
        console.log('Erreur de connection:' + err)
    }
)
