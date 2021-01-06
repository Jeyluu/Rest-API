const express = require('express');
const router = express.Router();
const ObjectID = require('mongoose').Types.ObjectId;

const { PostsModel } = require('../models/postsModel');

router.get('/', (req,res) => {
    PostsModel.find((err, docs) => {
        if(!err) res.send(docs);
        else console.log("Erreur de récupération des données");
    })
});

//créer
router.post('/', (req,res) => {
    
    const newRecord = new PostsModel({
        auteur: req.body.auteur,
        message: req.body.message
    });

    newRecord.save((err, docs) => {
        if(!err) res.send(docs);
        else console.log('erreur encore une fois afin de créer la nouvelle donnée:' + err);
    })
});


//update
router.put("/:id", (req,res) => {
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID inconnue:' + req.params.id)

    const updateRecord = {
        auteur: req.body.auteur,
        message: req.body.message
    };

    PostsModel.findByIdAndUpdate(
        req.params.id,
        {$set: updateRecord},
        {new:true},
        (err,docs) => {
            if(!err) res.send(docs), console.log('La mise à jour à parfaitement été réalisée');
            else console.log("Erreur de mise à jour:" + err)
        }
    )
})

router.delete("/:id", (req,res) => {
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID inconnue:' + req.params.id)

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err,docs) => {
            if (!err) res.send(docs), console.log('Vous avez bien effacé le commantaire');
            else console.log('Un problème esr survenu lors de la tentative de suppression du commentaire' + err);
        }
    )
});

module.exports = router