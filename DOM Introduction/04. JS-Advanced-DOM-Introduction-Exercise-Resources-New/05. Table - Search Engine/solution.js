function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      // Get the search input
      const searchInput = document.getElementById('searchField');
      const searchText = searchInput.value.toLowerCase();

      // Get all table rows except the header
      const rows = Array.from(document.querySelectorAll('table tbody tr'));

      // Remove previously selected classes
      rows.forEach(row => row.classList.remove('select'));

      // Search and highlight matching rows
      rows.forEach(row => {
         const cells = Array.from(row.querySelectorAll('td'));
         const rowText = cells.map(cell => cell.textContent.toLowerCase()).join(' ');
         
         if (rowText.includes(searchText) && searchText !== '') {
            row.classList.add('select');
         }
      });

      // Clear the search input
      searchInput.value = '';

   }
}