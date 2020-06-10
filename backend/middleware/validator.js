const { check, validationResult } = require('express-validator');

exports.registerRules = () => [
	check('email', 'this field is required ! ').notEmpty(),
	check('email', 'this field should be a valid email').isEmail(),
	check('password', 'this field require a 4 character at minimum').isLength({ min: 4 }),
];
exports.validator = (req, res, next) => {
	const err = validationResult(req);
	err.isEmpty() ? next() : res.status(400).json({ err: err.array() });
};
