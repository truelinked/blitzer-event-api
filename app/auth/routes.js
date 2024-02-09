const AuthController = require('./controllers/auth.controller');

exports.routesConfig = function (app) {
    app.post('/auth', [
        AuthController.verifyAuth
    ]);
};