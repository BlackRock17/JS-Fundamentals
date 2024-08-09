function solve() {
  let inputElement = document.getElementById('input');
  let outputElement = document.getElementById('output');

  document.querySelector('button').addEventListener('click', () => {
    let text = inputElement.value;
    let sentences = text.split('.').filter(s => s.trim().length > 0);

    let paragraphs = [];
    for (let i = 0; i < sentences.length; i += 3) {
      let paragraph = sentences.slice(i, i + 3).join('. ') + '.';
      paragraphs.push(`<p>${paragraph}</p>`);
    }

    outputElement.innerHTML = paragraphs.join('');
    inputElement.value = '';
  });
}