document.getElementById("addButton").addEventListener("click", addPoints);

function addPoints() {
    const name = document.getElementById("name").value.trim();
    const points = parseInt(document.getElementById("points").value);

    if (name && !isNaN(points)) {
        const existingData =
JSON.parse(localStorage.getItem("pointsData")) || {};
        existingData[name] = (existingData[name] || 0) + points;
        localStorage.setItem("pointsData", JSON.stringify(existingData));
        document.getElementById("name").value = '';
        document.getElementById("points").value = '';
        renderTable();
    } else {
        alert("Please enter a valid name and points.");
    }
}

function renderTable() {
    const pointsTableBody =
document.getElementById("pointsTable").getElementsByTagName("tbody")[0];
    pointsTableBody.innerHTML = '';
    const pointsData = JSON.parse(localStorage.getItem("pointsData")) || {};

    for (const [name, totalPoints] of Object.entries(pointsData)) {
        const row = pointsTableBody.insertRow();
        const nameCell = row.insertCell(0);
        const pointsCell = row.insertCell(1);
        nameCell.textContent = name;
        pointsCell.textContent = totalPoints;
    }
}

// Load data on page load
window.onload = renderTable;