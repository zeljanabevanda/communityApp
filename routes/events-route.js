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
})


module.exports = router;