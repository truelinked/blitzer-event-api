const express = require('express');

const connectDB = require('../common/DatabaseService');

// const Sentry = require('@sentry/node');
// const Tracing = require("@sentry/tracing");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Connect to the database
connectDB();
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

const authRouter = require('./routes/AuthRoutes');
const eventRouter = require('./routes/EventRoutes');

// app.use('/api/auth', authRouter);
// app.use('/api/events', eventRouter);

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