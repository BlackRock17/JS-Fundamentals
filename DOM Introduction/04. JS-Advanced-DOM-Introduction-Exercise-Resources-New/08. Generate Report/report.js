function generateReport() {
    const checkboxes = Array.from(document.querySelectorAll('thead input'));
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    const output = document.getElementById('output');
    
    const selectedColumns = checkboxes
        .map((checkbox, index) => checkbox.checked ? index : null)
        .filter(index => index !== null);
    
    const headers = Array.from(document.querySelectorAll('thead th'))
        .filter((_, index) => selectedColumns.includes(index))
        .map(th => th.textContent.trim().toLowerCase());

    const report = rows.map(row => {
        const rowData = {};
        selectedColumns.forEach((colIndex, index) => {
            rowData[headers[index]] = row.children[colIndex].textContent.trim();
        });
        return rowData;
    });

    output.value = JSON.stringify(report, null, 2);
}