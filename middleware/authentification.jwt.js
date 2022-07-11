const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './config/.env' })

exports.authentification = (req, res, next) => {
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            errorMessage: 'No token',
        });
    }

    try {
        const decoded = jwt.verify(token, parseInt(process.env.JWT_SECRET));

        req.user = decoded.user;

        next();
    } catch (err) {
        console.log('jwt error: ', err);
        res.status(401).json({
            errorMessage: 'Invalid token',
        });
    }
};