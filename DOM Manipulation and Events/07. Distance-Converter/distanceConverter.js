function attachEventsListeners() {
    const inputDistance = document.getElementById('inputDistance');
    const outputDistance = document.getElementById('outputDistance');
    const inputUnits = document.getElementById('inputUnits');
    const outputUnits = document.getElementById('outputUnits');
    const convertBtn = document.getElementById('convert');

    const ratesToMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    convertBtn.addEventListener('click', convert);

    function convert() {
        const inputValue = Number(inputDistance.value);
        const inputUnit = inputUnits.value;
        const outputUnit = outputUnits.value;

        const meters = inputValue * ratesToMeters[inputUnit];
        const result = meters / ratesToMeters[outputUnit];

        outputDistance.value = result;
    }
}