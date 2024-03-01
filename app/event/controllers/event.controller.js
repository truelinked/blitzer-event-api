const client = require('../../../common/services/redis.service').client;
const airflow = require('../../../common/services/airflow.service').client;

exports.insert = async function (req, res) {
    // TODO: This will have the detail event POST request

    // Send the event to airflow
    // airflow.send(req.body);
    res.json({
        message: "Insert event"
    });
}

exports.getById = function (req, res) {
    res.json({
        message: "Get event"
    });
}