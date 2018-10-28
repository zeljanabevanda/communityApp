const express = require('express');
const router  = express.Router();
const authMiddleware = require('../middlewares/auth-middleware');


router.get('/profile/:id', authMiddleware, (req, res) => {
    db.one({
        text: 'SELECT * FROM users WHERE id = $1', // can also be a QueryFile object
        values: [req.params.id]
    })
    .then(user => {
        res.send(user)
        console.log(user)
    })
    .catch(error => {
        res.send('user not found')
    });

})



module.exports = router;