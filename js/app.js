
// Function to create and display questions for Quiz 1
function displayQuiz(quizQuestions, quizFormId) {
    const form = document.getElementById(quizFormId);
    quizQuestions.forEach((question, index) => {
      const questionDiv = document.createElement('div');
      questionDiv.classList.add('question');
      
      // Create the question text
      const questionText = document.createElement('p');
      questionText.textContent = `${index + 1}. ${question.question}`;
      questionDiv.appendChild(questionText);
  
      // Create the options
      question.options.forEach(option => {
        const label = document.createElement('label');
        label.innerHTML = `
          <input type="radio" name="q${index}" value="${option}">
          ${option}
        `;
        questionDiv.appendChild(label);
      });
  
      form.appendChild(questionDiv);
    });
  }
  
  // Function to submit Quiz 1
  function submitQuiz1() {
    let score = 0;
    const form = document.getElementById('quiz1-form');
    const formData = new FormData(form);
  
    quiz1Questions.forEach((question, index) => {
      const selectedAnswer = formData.get(`q${index}`);
      if (selectedAnswer === question.correctAnswer) {
        score++;
      }
    });
  
    displayResult(`Your score for Quiz 1 is: ${score} / 5`);
  }
  
  // Function to submit Quiz 2
  function submitQuiz2() {
    let score = 0;
    const form = document.getElementById('quiz2-form');
    const formData = new FormData(form);
  
    quiz2Questions.forEach((question, index) => {
      const selectedAnswer = formData.get(`q${index}`);
      if (selectedAnswer === question.correctAnswer) {
        score++;
      }
    });
  
    displayResult(`Your score for Quiz 2 is: ${score} / 5`);
  }
  
  // Function to display results
  function displayResult(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<p>${message}</p>`;
  }
  
  // Initialize the quizzes
  displayQuiz(quiz1Questions, 'quiz1-form');
  displayQuiz(quiz2Questions, 'quiz2-form');
  




  