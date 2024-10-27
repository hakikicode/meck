function flagAnomalies(record) {
    const anomalies = [];
    const { bloodPressure, cholesterol, glucose } = record;

    if (bloodPressure > 140) {
        anomalies.push('High Blood Pressure');
    }
    if (cholesterol > 200) {
        anomalies.push('High Cholesterol');
    }
    if (glucose > 150) {
        anomalies.push('High Glucose');
    }

    return anomalies;
}

module.exports = { flagAnomalies };
