document.addEventListener('DOMContentLoaded', () => {
    const role = localStorage.getItem('role');
    loadRecords(role);
});

function loadRecords(role) {
    const publicAddress = '0x123456';  // Example patient address
    fetch(`/api/getRecord/${publicAddress}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('records').innerText = JSON.stringify(data, null, 2);
        });
}

function addRecord() {
    const publicAddress = '0x123456';  // Example patient address
    const record = {
        bloodPressure: prompt('Enter Blood Pressure:'),
        cholesterol: prompt('Enter Cholesterol:'),
        glucose: prompt('Enter Glucose:')
    };

    fetch('/api/addRecord', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ publicAddress, record })
    })
    .then(response => response.json())
    .then(data => {
        alert('Record added successfully');
        console.log(data.flaggedIssues);
        loadRecords();
    });
}
