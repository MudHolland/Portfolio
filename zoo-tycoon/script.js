let money = 100;
let selectedBuilding = '';
let visitors = 0;
let parkingSpaces = 0;
let revenueInterval;
let giraffePen = [];
let gridSize = 10;

document.addEventListener('DOMContentLoaded', () => {
    initializeGrid();
    startRevenueTimer();
});

function initializeGrid() {
    const grid = document.getElementById('grid');
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.dataset.x = i;
            cell.dataset.y = j;
            if (i === 0 && j === 0) {
                cell.style.backgroundColor = 'black';
            }
            cell.addEventListener('click', () => placeBuilding(i, j));
            grid.appendChild(cell);
        }
    }
}

function selectBuilding(building) {
    selectedBuilding = building;
}

function placeBuilding(x, y) {
    const cell = document.querySelector(`#grid .cell[data-x="${x}"][data-y="${y}"]`);
    if (selectedBuilding === 'giraffe' && money >= 10) {
        if (giraffePen.length < 9) {
            cell.style.backgroundColor = 'yellow';
            giraffePen.push(cell);
            money -= 10;
            if (giraffePen.length === 9) {
                displayGiraffeText();
                visitors += 20;
                updateMoneyDisplay();
            }
        }
    } else if (selectedBuilding === 'path') {
        cell.style.backgroundColor = 'grey';
    } else if (selectedBuilding === 'parking') {
        cell.style.backgroundColor = 'lightgrey';
        parkingSpaces += 10;
    }
}

function displayGiraffeText() {
    const middleCell = giraffePen[Math.floor(giraffePen.length / 2)];
    const giraffeText = document.createElement('div');
    giraffeText.classList.add('giraffe-text');
    giraffeText.innerText = 'Giraffe';
    middleCell.appendChild(giraffeText);
}

function updateMoneyDisplay() {
    document.getElementById('money').innerText = `Money: $${money}`;
}

function startRevenueTimer() {
    revenueInterval = setInterval(() => {
        const revenue = Math.min(visitors, parkingSpaces);
        money += revenue;
        updateMoneyDisplay();
    }, 10000); // 10 seconds
}
