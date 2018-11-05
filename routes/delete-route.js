const express  = require('express');
const router   = express.Router();
const bcrypt   = require('bcrypt-nodejs');
const jwt      = require('jsonwebtoken');
const {Event} = require('../models');

router.delete('/delete/:id', (req, res) => {
    console.log("radi", req.body)
  

         
   
})
    

module.exports = router;