const express = require('express');

const authRouter = require('./auth/routes');
const eventRouter = require('./event/routes');

const app = express();

app.use(express.json());

authRouter.routesConfig(app);
eventRouter.routesConfig(app);

app.get('/ping', (req, res) => {
    res.send({
        status: 'ok'
    })
})

module.exports = app