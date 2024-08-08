function search() {
    const searchText = document.getElementById('searchText').value.toLowerCase();
    const towns = document.getElementById('towns').getElementsByTagName('li');
    const result = document.getElementById('result');
    let matches = 0;

    // Clear previous results
    for (let town of towns) {
        town.style.fontWeight = 'normal';
        town.style.textDecoration = 'none';
    }

    // Perform new search
    for (let town of towns) {
        if (town.textContent.toLowerCase().includes(searchText) && searchText !== '') {
            town.style.fontWeight = 'bold';
            town.style.textDecoration = 'underline';
            matches++;
        }
    }

    // Display result
    result.textContent = `${matches} matches found`;
}