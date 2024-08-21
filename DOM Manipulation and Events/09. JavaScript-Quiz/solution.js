function solve() {
  console.log("solve function called");
  const correctAnswers = ['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents'];
  let rightAnswers = 0;
  let currentSection = 0;

  function nextQuestion(answer) {
      console.log("nextQuestion called with answer:", answer);
      if (currentSection < correctAnswers.length) {
          if (answer === correctAnswers[currentSection]) {
              rightAnswers++;
              console.log("Correct answer!");
          }
          currentSection++;
          
          const sections = document.querySelectorAll('section');
          console.log("Number of sections found:", sections.length);
          sections.forEach((section, index) => {
              section.style.display = index === currentSection ? 'block' : 'none';
              console.log(`Section ${index} display:`, section.style.display);
          });
      }
      return showResults();
  }

  function showResults() {
      console.log("showResults called");
      if (currentSection === correctAnswers.length) {
          const result = rightAnswers === correctAnswers.length
              ? "You are recognized as top JavaScript fan!"
              : `You have ${rightAnswers} right answers`;

          const resultElement = document.querySelector('#results h1');
          if (resultElement) {
              resultElement.textContent = result;
              document.getElementById('results').style.display = 'block';
              console.log("Results displayed:", result);
          } else {
              console.error("Results element not found");
          }

          return result;
      }
      return null;
  }

  document.body.addEventListener('click', function(e) {
      console.log("Click event triggered on:", e.target);
      if (e.target.className === 'answer-wrap') {
          console.log("Answer clicked:", e.target.textContent.trim());
          nextQuestion(e.target.textContent.trim());
      }
  });

  console.log("Event listener added");

  // Return object with methods for testing
  return {
      nextQuestion,
      showResults
  };
}

// Immediately invoke solve function
console.log("Invoking solve function");
solve();