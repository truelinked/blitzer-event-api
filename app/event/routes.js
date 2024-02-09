const EventController = require('./controllers/event.controller');
const VerificationMiddleware = require('../auth/controllers/auth.controller').verifyAuth;

exports.routesConfig = function (app) {
    app.post('/events', [
        VerificationMiddleware,
        EventController.insert
    ]);
    app.get('/events/:eventId', [
        EventController.getById
    ]);
};