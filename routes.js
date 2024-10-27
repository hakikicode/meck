const express = require('express');
const router = express.Router();
const { flagAnomalies } = require('./ai');

// Dummy data for medical records
let medicalRecords = {};

// Endpoint for adding a new medical record
router.post('/addRecord', (req, res) => {
    const { publicAddress, record } = req.body;
    if (!medicalRecords[publicAddress]) {
        medicalRecords[publicAddress] = [];
    }
    medicalRecords[publicAddress].push(record);

    // AI analysis for health insights
    const flaggedIssues = flagAnomalies(record);
    res.json({ message: 'Record added successfully', flaggedIssues });
});

// Endpoint for getting medical records by public address
router.get('/getRecord/:address', (req, res) => {
    const { address } = req.params;
    const records = medicalRecords[address] || [];
    res.json(records);
});

module.exports = router;
