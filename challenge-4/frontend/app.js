// Demo data for alerts
const alerts = [
  { id: 'A101', status: 'Active', severity: 'High', createdAt: '2025-12-10', details: 'Suspicious transaction detected.' },
  { id: 'A102', status: 'Resolved', severity: 'Medium', createdAt: '2025-12-09', details: 'False positive, no action needed.' },
  { id: 'A103', status: 'Active', severity: 'Low', createdAt: '2025-12-08', details: 'Unusual login location.' }
];

function loadDashboard() {
  document.getElementById('total-alerts').textContent = alerts.length;
  document.getElementById('active-alerts').textContent = alerts.filter(a => a.status === 'Active').length;
  document.getElementById('resolved-alerts').textContent = alerts.filter(a => a.status === 'Resolved').length;
}

function loadAlertsTable() {
  const tbody = document.getElementById('alerts-table');
  tbody.innerHTML = '';
  alerts.forEach(alert => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${alert.id}</td>
      <td>${alert.status}</td>
      <td>${alert.severity}</td>
      <td>${alert.createdAt}</td>
      <td><button onclick="showDetail('${alert.id}')">View</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function showDetail(id) {
  const alert = alerts.find(a => a.id === id);
  if (!alert) return;
  document.getElementById('alert-detail-content').innerHTML = `
    <strong>ID:</strong> ${alert.id}<br>
    <strong>Status:</strong> ${alert.status}<br>
    <strong>Severity:</strong> ${alert.severity}<br>
    <strong>Created At:</strong> ${alert.createdAt}<br>
    <strong>Details:</strong> ${alert.details}
  `;
  document.getElementById('alert-detail').style.display = 'block';
}

function closeDetail() {
  document.getElementById('alert-detail').style.display = 'none';
}

window.onload = function() {
  loadDashboard();
  loadAlertsTable();
};
