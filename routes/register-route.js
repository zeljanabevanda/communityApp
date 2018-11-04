const express  = require('express');
const router   = express.Router();
const bcrypt   = require('bcrypt-nodejs');
const {User} = require('../models');

router.post('/register', (req, res) => {
    let password = req.body.password;
    //korisnicko ime nije zauzeto, nastavi!
    User.findOne({ where: {username: req.body.username} }).then(user => {
        console.log(user, 'postoji')
        if(!user) {
            bcrypt.hash(password, null, null, function(err, hash) {
                req.body.password = hash;
                res.send(req.body)
                User.create(req.body).then(() => {
                    console.log('spremč')
                })
            });
        
        }
        
        // project will be the first entry of the Projects table with the title 'aProject' || null
      })
   

   
    
    
}) 

module.exports = router;