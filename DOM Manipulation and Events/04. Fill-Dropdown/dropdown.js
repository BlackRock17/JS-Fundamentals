function addItem() {
    // Получаваме референции към input полетата и select елемента
    const newItemText = document.getElementById('newItemText');
    const newItemValue = document.getElementById('newItemValue');
    const menu = document.getElementById('menu');

    // Проверяваме дали и двете полета имат стойности
    if (newItemText.value && newItemValue.value) {
        // Създаваме нов option елемент
        const option = document.createElement('option');
        
        // Задаваме текста и стойността на новия option
        option.textContent = newItemText.value;
        option.value = newItemValue.value;

        // Добавяме новия option към select елемента
        menu.appendChild(option);

        // Изчистваме стойностите на input полетата
        newItemText.value = '';
        newItemValue.value = '';
    }
}