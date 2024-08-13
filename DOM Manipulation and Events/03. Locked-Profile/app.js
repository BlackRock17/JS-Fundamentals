function lockedProfile() {
    // Получаваме всички бутони "Show more"
    const buttons = document.querySelectorAll('.profile button');
    
    // Добавяме слушател за събитие 'click' към всеки бутон
    buttons.forEach(button => {
        button.addEventListener('click', toggleProfile);
    });

    function toggleProfile(e) {
        // Получаваме родителския елемент (div.profile) на кликнатия бутон
        const profile = e.target.parentElement;
        
        // Проверяваме дали профилът е отключен
        const isUnlocked = profile.querySelector('input[type="radio"][value="unlock"]').checked;
        
        if (isUnlocked) {
            // Намираме скритите полета
            const hiddenFields = profile.querySelector('div[id$="HiddenFields"]');
            
            // Проверяваме текущото състояние на бутона
            if (e.target.textContent === 'Show more') {
                // Показваме скритите полета
                hiddenFields.style.display = 'block';
                e.target.textContent = 'Hide it';
            } else {
                // Скриваме полетата
                hiddenFields.style.display = 'none';
                e.target.textContent = 'Show more';
            }
        }
    }
}