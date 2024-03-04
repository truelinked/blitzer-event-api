// const client = require('../../../common/services/redis.service').client;
// const airflow = require('../../../common/services/airflow.service').client;

const { Event } = require('../models/event.models')

exports.insert = async function (req, res) {
    // TODO: This will have the detail event POST request
    const { visitorId, requestId, events } = req.body;

    // Create a new event document
    const newEvent = new Event({
        visitorId,
        requestId,
        events,
    });

    try {
        await newEvent.save();
        res.status(201).json({ message: 'Event stored successfully' });
        // Send the event to airflow
        // airflow.send(req.body);
    } catch (err) {
        console.error('Error storing event:', err);
        res.status(500).json({ error: 'Failed to store event' });
    }
}

exports.getById = function (req, res) {
    res.json({
        message: "Get event"
    });
}