const AuthController = require('../controllers/AuthController');

exports.routesConfig = function (app) {
    app.post('/auth', [
        AuthController.verifyAuth
    ]);
};