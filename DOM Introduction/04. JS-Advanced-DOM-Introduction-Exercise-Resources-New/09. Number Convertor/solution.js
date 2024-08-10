function solve() {
    // Add options to the "To" select menu
    const selectMenuTo = document.querySelector('#selectMenuTo');
    selectMenuTo.innerHTML = `
        <option value="binary">Binary</option>
        <option value="hexadecimal">Hexadecimal</option>
    `;

    // Add event listener to the convert button
    document.querySelector('button').addEventListener('click', convert);

    function convert() {
        const number = Number(document.querySelector('#input').value);
        const convertTo = selectMenuTo.value;
        let result;

        if (convertTo === 'binary') {
            result = number.toString(2);
        } else if (convertTo === 'hexadecimal') {
            result = number.toString(16).toUpperCase();
        }

        document.querySelector('#result').value = result;
    }
}