// function solve() {
  
//   const validNaming = ['Camel Case', 'Pascal Case']
//   const textInput = document.querySelector('#text')
//   const namingConvention = document.querySelector('#naming-convention')
//   const resultEl = document.querySelector('.result-container #result')

//   if (!validNaming.includes(namingConvention.value)) {
//     resultEl.textContent = 'Error!';
//     return;
//   }
  
//   const pascalCaseText = textInput.value
//     .toLowerCase()
//     .split(" ")
//     .map((x) => x[0].toUpperCase().concat(x.slice(1)))
//     .join("");

//   resultEl.textContent =
//     namingConvention.value === validNaming[0]
//       ? pascalCaseText[0].toLowerCase().concat(pascalCaseText.slice(1))
//       : pascalCaseText;
  
// }

function solve() {
  const textElement = document.querySelector('div:first-child input');
  const namingConventionElement = document.querySelector('div:nth-child(2) input');
  const resultElement = document.getElementById('result');

  function convertCase(text, convention) {
      if (convention !== "Camel Case" && convention !== "Pascal Case") {
          return "Error!";
      }

      let words = text.toLowerCase().split(' ');
      
      if (convention === "Pascal Case") {
          words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
      } else { // Camel Case
          words = words.map((word, index) => 
              index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)
          );
      }

      return words.join('');
  }

  const text = textElement.value;
  const convention = namingConventionElement.value;
  const result = convertCase(text, convention);
  resultElement.textContent = result;
}