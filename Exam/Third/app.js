// Базов URL за API заявките
const baseUrl = 'http://localhost:3030/jsonstore/matches';

// DOM елементи
const loadButton = document.getElementById('load-matches');
const addButton = document.getElementById('add-match');
const editButton = document.getElementById('edit-match');
const list = document.getElementById('list');
const form = document.querySelector('form');

// Функция за зареждане на мачовете
async function loadMatches() {
    try {
        const response = await fetch(baseUrl);
        const data = await response.json();
        list.innerHTML = '';
        Object.values(data).forEach(match => {
            list.appendChild(createMatchElement(match));
        });
    } catch (error) {
        console.error('Error loading matches:', error);
    }
}

// Функция за създаване на HTML елемент за мач
function createMatchElement(match) {
    const li = document.createElement('li');
    li.className = 'match';
    li.innerHTML = `
        <div class="info">
            <p>${match.host}</p>
            <p>${match.score}</p>
            <p>${match.guest}</p>
        </div>
        <div class="btn-wrapper">
            <button class="change-btn">Change</button>
            <button class="delete-btn">Delete</button>
        </div>
    `;
    li.querySelector('.change-btn').addEventListener('click', () => populateForm(match));
    li.querySelector('.delete-btn').addEventListener('click', () => deleteMatch(match._id));
    return li;
}

// Функция за добавяне на нов мач
async function addMatch(event) {
    event.preventDefault();
    const host = document.getElementById('host').value;
    const score = document.getElementById('score').value;
    const guest = document.getElementById('guest').value;

    try {
        await fetch(baseUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ host, score, guest })
        });
        loadMatches();
        form.reset();
    } catch (error) {
        console.error('Error adding match:', error);
    }
}

// Функция за попълване на формата за редактиране
function populateForm(match) {
    document.getElementById('host').value = match.host;
    document.getElementById('score').value = match.score;
    document.getElementById('guest').value = match.guest;
    editButton.disabled = false;
    addButton.disabled = true;
    editButton.onclick = () => editMatch(match._id);
}

// Функция за редактиране на мач
async function editMatch(id) {
    const host = document.getElementById('host').value;
    const score = document.getElementById('score').value;
    const guest = document.getElementById('guest').value;

    try {
        await fetch(`${baseUrl}/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ host, score, guest })
        });
        loadMatches();
        form.reset();
        editButton.disabled = true;
        addButton.disabled = false;
    } catch (error) {
        console.error('Error editing match:', error);
    }
}

// Функция за изтриване на мач
async function deleteMatch(id) {
    try {
        await fetch(`${baseUrl}/${id}`, { method: 'DELETE' });
        loadMatches();
    } catch (error) {
        console.error('Error deleting match:', error);
    }
}

// Добавяне на event listeners
loadButton.addEventListener('click', loadMatches);
addButton.addEventListener('click', addMatch);

// Инициализация
loadMatches();