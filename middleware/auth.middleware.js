const { check, validationResult } = require('express-validator');

exports.checkSignupData = [
    check('username').not().isEmpty().trim().withMessage('champ obligatoire'),
    check('email').isEmail().normalizeEmail().withMessage('email invalid'),
    check('password')
        .isLength({ min: 4 })
        .withMessage('mot de passe trop court (4 caractères minimum)'),
];

exports.checkSigninData = [
    check('email').isEmail().normalizeEmail().withMessage('email invalide'),
    check('password')
        .isLength({ min: 4 })
        .withMessage('mot de passe trop court (4 caractères minimum)'),
];

exports.validatorResult = (req, res, next) => {
    const result = validationResult(req);
    const noError = !validationResult(req).isEmpty();
    if (noError) {
        const Error = result.array()[0].msg;
        return res.status(400).json({
            errorMessage: Error,
        });
    }
    next();
};