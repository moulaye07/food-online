const UserModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: './config/.env' })



exports.signup = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user) {
            return res.status(400).json({
                errorMessage: 'cet email existe déjà',
            });
        }

        const newUser = new UserModel();

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(password, salt);
        newUser.username = username;
        newUser.email = email;
        await newUser.save();

        res.status(200).json({
            successMessage: 'Bravo !!! vous êtes inscrit avec success. Veullez vous connecter.',
        });
    } catch (err) {
        console.log('signup error in auth.controller : ', err);
        res.status(500).json({
            errorMessage: 'Server error',
        });
    }

};

exports.signin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(400).json({
                errorMessage: 'identifiants inconnus',
            });
        }

        const compare = await bcrypt.compare(password, user.password);
        if (!compare) {
            return res.status(400).json({
                errorMessage: 'identifiants inconnus',
            });
        }

        const payload = {
            user: {
                _id: user._id,
            },
        };

        jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: parseInt(process.env.JWT_EXPIRE) }, (err, token) => {
            if (err) console.log('jwt error: ', err);
            const { _id, username, email, role } = user;

            res.json({
                token,
                user: { _id, username, email, role },
            });
        });

    } catch (err) {
        console.log('signin error in auth.controller : ', err);
        res.status(500).json({
            errorMessage: 'Server error',
        });
    }
};
