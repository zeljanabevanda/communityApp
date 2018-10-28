const express  = require('express');
const router   = express.Router();
const bcrypt   = require('bcrypt-nodejs');
const jwt      = require('jsonwebtoken');
const {User} = require('../models');

router.post('/login', (req, res) => {
    //console.log(req.body) 
    let password = req.body.password; 
    let username = req.body.username;
        User.findOne({where: {
            username: username
        }}).then(user => {
            console.log(user)
            if(user) {
                bcrypt.compare(password, user.password, function(err, result) {
                    console.log(result, 'passw');
                    //ako je password valjan generirati token i vrtatiti korisniku podatke
                    if(result) {
                        jwt.sign(JSON.stringify(user.id), 'secret', (err, token) => {
                            const userObj = user.dataValues;
                            userObj.token = token;
                            res.send(userObj);
                        });
                        
                    } else {
                        res.send('lozinka nije valjana');
                    }
                    
                    // res == true
                
                  
            })  
            }
        })
     
    .catch(error => {
        // error;    
    }); 
    
    
})

module.exports = router;