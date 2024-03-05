const axios = require('axios');

const { airflow: { url } } = require('../config');

const triggerDag = async (dagId, dagPayload) => {
    try {
        const payload = {
            dag_id: dagId,
            task_id: dagPayload.taskId,
            execution_date: dagPayload.executionDate
        }
        const response = await axios.post(`${url}/dags/${dagId}/dagRuns`, payload);
        return response.data;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    triggerDag
}

