const express = require('express');

// const Sentry = require('@sentry/node');
// const Tracing = require("@sentry/tracing");

const authRouter = require('./auth/routes');
const eventRouter = require('./event/routes');

const app = express();

app.use(express.json());

// Uncomment and use when sentry is integrated
// Sentry.init({
//     dsn: "",
//     integrations: [
//       new Sentry.Integrations.Http({ tracing: true }),
//       new Tracing.Integrations.Express({ app }),
//     ],
//     tracesSampleRate: 0.1,
// });
  
// app.use(Sentry.Handlers.requestHandler());
// app.use(Sentry.Handlers.tracingHandler());

// app.get("/debug-sentry", function mainHandler(req, res) {
//     throw new Error("My first Sentry error!");
// });

// app.use(Sentry.Handlers.errorHandler());

authRouter.routesConfig(app);
eventRouter.routesConfig(app);

// convert this to health status checking redis, db, etc 
// and move to a separate route file
app.get('/ping', (req, res) => {
    res.send({
        status: 'ok'
    })
})

module.exports = app