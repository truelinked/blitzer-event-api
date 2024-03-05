const EventController = require('../controllers/EventController');
const VerificationMiddleware = require('../controllers/AuthController').verifyAuth;

exports.routesConfig = function (app) {
    app.post('/events', [
        VerificationMiddleware,
        EventController.insert
    ]);
    app.get('/events/:eventId', [
        EventController.getById
    ]);
};