const express = require('express');
const router = express.Router();
const Post = require('../models/Post');


router.get('/', (req,res) => {
    res.send('We are on post Tab');
});


router.post('/', (req,res)=> {
    console.log(req.body);
});

// On exporte les routes ci-dessus dans le app.js
module.exports = router;