const jwt = require('jsonwebtoken');



const authMiddleware = (req, res, next) => {
    const token = req.headers.token;
    console.log(req.headers.token);
    jwt.verify(token, 'secret', (err, decoded) => {
        console.log(decoded, 'decoded');
        if (decoded) {
            next();
        } else {
            res.send('token nije valjan');
        }
    })
    next();
}

module.exports= authMiddleware