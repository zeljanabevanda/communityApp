const express  = require('express');
const router   = express.Router();
const bcrypt   = require('bcrypt-nodejs');
const jwt      = require('jsonwebtoken');
const {User} = require('../models');

router.post('/login', (req, res) => {
    //console.log(req.body) 
    let password = req.body.password; 
    let username = req.body.username;
    console.log('logion')
    User.login(req).then((user) => {
        res.send(user)
    });
});

module.exports = router;