const UserModel = require('../models/user.model');
const bcrypt = require('bcryptjs');


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

        res.status(500).json({
            connexion: 'connected',
        });

    } catch (err) {
        console.log('signin error in auth.controller : ', err);
        res.status(500).json({
            errorMessage: 'Server error',
        });
    }
};
