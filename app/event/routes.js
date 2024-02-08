const EventController = require('./controllers/event.controller');

exports.routesConfig = function (app) {
    app.post('/events', [
        EventController.insert
    ]);
    app.get('/events/:eventId', [
        EventController.getById
    ]);
};