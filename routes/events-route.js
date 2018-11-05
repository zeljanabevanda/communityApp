const express  = require('express');
const router   = express.Router();
const bcrypt   = require('bcrypt-nodejs');
const jwt      = require('jsonwebtoken');
const {Event} = require('../models');


router.post("/events", (req, res) => {
    console.log("radi", req.body)
    Event.create(req.body).then(event => {
        res.send(event)
    })
    
    const id = req.params.id;

    const title       = req.body.title;
    const description = req.body.description;
    const startingAt  = req.body.startingAt;
    const endingAt    = req.body.endingAt;

    Event.update({title, description,startingAt,endingAt}, {where: {id: id}, returning: true})
    .then(result => {
        console.log('radiiii');
    })
})

router.delete("/events/:id", (req,res) => {
    const id = req.params.id;

    Event.destroy({where: {id: id} }).then(() => {
        res.send("uspjesno")
    })
})


module.exports = router;