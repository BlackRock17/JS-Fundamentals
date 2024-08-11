function create(words) {
   const content = document.getElementById('content');

   words.forEach(word => {
       // Create div element
       const div = document.createElement('div');
       
       // Create paragraph element
       const p = document.createElement('p');
       p.textContent = word;
       p.style.display = 'none';
       
       // Append paragraph to div
       div.appendChild(p);
       
       // Add click event listener to div
       div.addEventListener('click', () => {
           p.style.display = p.style.display === 'none' ? 'block' : 'none';
       });
       
       // Append div to content
       content.appendChild(div);
   });
}