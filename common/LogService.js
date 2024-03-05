const winston = require('winston');
const { log } = require('../config');

// Define logger configuration
const logger = winston.createLogger({
  level: log.level,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(), // Log to the console
    new winston.transports.File({ filename: 'error.log', level: 'error' }) // Log errors to a file
  ]
});

// Middleware function for logging HTTP requests
const requestLogger = (req, res, next) => {
  logger.info(`${req.method} ${req.originalUrl}`, { body: req.body, query: req.query });
  next();
};

module.exports = { logger, requestLogger };
