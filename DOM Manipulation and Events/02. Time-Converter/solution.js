function attachEventsListeners() {
    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const daysBtn = document.getElementById('daysBtn');
    const hoursBtn = document.getElementById('hoursBtn');
    const minutesBtn = document.getElementById('minutesBtn');
    const secondsBtn = document.getElementById('secondsBtn');

    daysBtn.addEventListener('click', () => convert('days'));
    hoursBtn.addEventListener('click', () => convert('hours'));
    minutesBtn.addEventListener('click', () => convert('minutes'));
    secondsBtn.addEventListener('click', () => convert('seconds'));

    function convert(unit) {
        let days = 0;
        switch(unit) {
            case 'days':
                days = Number(daysInput.value);
                break;
            case 'hours':
                days = Number(hoursInput.value) / 24;
                break;
            case 'minutes':
                days = Number(minutesInput.value) / 1440;
                break;
            case 'seconds':
                days = Number(secondsInput.value) / 86400;
                break;
        }

        daysInput.value = days;
        hoursInput.value = days * 24;
        minutesInput.value = days * 1440;
        secondsInput.value = days * 86400;
    }
}