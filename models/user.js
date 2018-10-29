const bcrypt   = require('bcrypt-nodejs');
const jwt      = require('jsonwebtoken');

'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    username: DataTypes.STRING
  }, {});
  User.login = (req) => {
    return new Promise((resolve, reject) => {
      let password = req.body.password; 
      let username = req.body.username;
      console.log(req.body, 'USERNAME')
      User.findOne({where: {
        username: username
    }}).then(user => {
        console.log(user, 'USER')
        if(user) {
            bcrypt.compare(password, user.password, function(err, result) {
                console.log(result, 'passw');
                //ako je password valjan generirati token i vrtatiti korisniku podatke
                if(result) {
                    jwt.sign(JSON.stringify(user.id), 'secret', (err, token) => {
                        const userObj = user.dataValues;
                        userObj.token = token;
                        resolve(userObj);
                    });
                    
                } else {
                    reject();
                }
                
                // res == true
            
              
        })  
        }
    })
    
    .catch(error => {
    // error;    
    });
    })
  
  }
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};


