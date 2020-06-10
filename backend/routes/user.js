const express = require('express');

const userController = require('../controller/userController');
const { registerRules, validator } = require('../middleware/validator');
const isAuth = require('../middleware/passport-setup');
const Router = express.Router();

Router.post('/register', registerRules(), validator, userController.register);
Router.post('/login', userController.login);
Router.get('/current', isAuth(), (req, res) => res.json({ user: req.user }));

module.exports = Router;
