const express = require('express');
const router  = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');
const {User} = require('../models');

router.put('/user/:id', authMiddleware, (req, res) => {
    const id = req.params.id

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const username = req.body.username;
    const email    = req.body.email;
    

    User.update({firstName, lastName, username, email }, { where: { id: id }, returning: true})
    .then(result => {
        res.send(result);
    })
    .catch(err =>
        console.log(err)
    )

})





module.exports = router;