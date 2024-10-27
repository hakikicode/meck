import numpy as np

# Example patient data: (age, blood pressure, cholesterol, glucose level)
data = np.array([[65, 180, 220, 160], [50, 150, 160, 130]])

# Set thresholds for flagging anomalies
bp_threshold = 140  # Blood Pressure
chol_threshold = 200  # Cholesterol
glucose_threshold = 150  # Glucose level

def flag_anomalies(patient_data):
    flagged = []
    for patient in patient_data:
        anomalies = []
        age, bp, chol, glucose = patient
        if bp > bp_threshold:
            anomalies.append('High Blood Pressure')
        if chol > chol_threshold:
            anomalies.append('High Cholesterol')
        if glucose > glucose_threshold:
            anomalies.append('High Glucose')
        if anomalies:
            flagged.append({"age": age, "anomalies": anomalies})
    return flagged

# Example output
print(flag_anomalies(data))
