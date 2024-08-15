function solve() {
  const [generate, buy] = Array.from(document.querySelectorAll('button'));
  const [input, output] = Array.from(document.querySelectorAll('textarea'));
  const tbody = document.querySelector('tbody');

  generate.addEventListener('click', () => {
    const furniture = JSON.parse(input.value);
    furniture.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td><img src="${item.img}"></td>
        <td><p>${item.name}</p></td>
        <td><p>${item.price}</p></td>
        <td><p>${item.decFactor}</p></td>
        <td><input type="checkbox"></td>
      `;
      tbody.appendChild(row);
    });
  });

  buy.addEventListener('click', () => {
    const checked = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'));
    const bought = [];
    let totalPrice = 0;
    let totalDecFactor = 0;

    checked.forEach(check => {
      const [_img, name, price, decFactor] = Array.from(check.parentElement.parentElement.children);
      bought.push(name.textContent);
      totalPrice += Number(price.textContent);
      totalDecFactor += Number(decFactor.textContent);
    });

    output.value = `Bought furniture: ${bought.join(', ')}\n`;
    output.value += `Total price: ${totalPrice.toFixed(2)}\n`;
    output.value += `Average decoration factor: ${totalDecFactor / checked.length}`;
  });
}