const questions = {
  easy: [
    { q: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { q: "What color is the sky?", options: ["Blue", "Green", "Red"], answer: "Blue" },
    { q: "Which animal says 'Meow'?", options: ["Dog", "Cat", "Cow"], answer: "Cat" },
    { q: "Which is the smallest planet?", options: ["Mercury", "Earth", "Mars"], answer: "Mercury" },
    { q: "What is the opposite of hot?", options: ["Cold", "Warm", "Cool"], answer: "Cold" },
    { q: "How many days are there in a week?", options: ["5", "7", "10"], answer: "7" },
    { q: "Which shape has 3 sides?", options: ["Triangle", "Square", "Circle"], answer: "Triangle" },
    { q: "What is H2O?", options: ["Water", "Oxygen", "Carbon"], answer: "Water" },
    { q: "Which fruit is yellow?", options: ["Banana", "Apple", "Grapes"], answer: "Banana" },
    { q: "What comes after 9?", options: ["10", "8", "11"], answer: "10" },
    { q: "What is the capital of India?", options: ["Delhi", "Mumbai", "Kolkata"], answer: "Delhi" },
    { q: "How many letters are in the English alphabet?", options: ["24", "25", "26"], answer: "26" },
    { q: "Which animal is called King of the Jungle?", options: ["Tiger", "Lion", "Elephant"], answer: "Lion" },
    { q: "Which planet is called the Red Planet?", options: ["Venus", "Mars", "Jupiter"], answer: "Mars" },
    { q: "Which gas do we breathe in?", options: ["Oxygen", "Carbon dioxide", "Nitrogen"], answer: "Oxygen" }
  ],
  
  medium: [
    { q: "Which is the capital of France?", options: ["Berlin", "Paris", "Madrid"], answer: "Paris" },
    { q: "Who developed C language?", options: ["Dennis Ritchie", "James Gosling", "Guido van Rossum"], answer: "Dennis Ritchie" },
    { q: "Which continent is the Sahara Desert in?", options: ["Asia", "Africa", "Australia"], answer: "Africa" },
    { q: "What is 12 × 8?", options: ["96", "86", "106"], answer: "96" },
    { q: "Which organ pumps blood?", options: ["Lungs", "Heart", "Brain"], answer: "Heart" },
    { q: "Who is the current CEO of Tesla?", options: ["Elon Musk", "Jeff Bezos", "Sundar Pichai"], answer: "Elon Musk" },
    { q: "Which gas is used by plants for photosynthesis?", options: ["Oxygen", "Carbon dioxide", "Nitrogen"], answer: "Carbon dioxide" },
    { q: "Which is the largest mammal?", options: ["Elephant", "Blue Whale", "Shark"], answer: "Blue Whale" },
    { q: "Who wrote ‘Romeo and Juliet’?", options: ["Shakespeare", "Milton", "Wordsworth"], answer: "Shakespeare" },
    { q: "What is the square root of 144?", options: ["12", "14", "16"], answer: "12" },
    { q: "Which country is known as the Land of Rising Sun?", options: ["China", "Japan", "Thailand"], answer: "Japan" },
    { q: "Who invented the light bulb?", options: ["Newton", "Edison", "Tesla"], answer: "Edison" },
    { q: "What is the boiling point of water?", options: ["90°C", "100°C", "120°C"], answer: "100°C" },
    { q: "Which is the largest desert in the world?", options: ["Sahara", "Gobi", "Antarctica"], answer: "Antarctica" },
    { q: "What is the chemical symbol of gold?", options: ["Au", "Ag", "Go"], answer: "Au" }
  ],
  
  hard: [
    { q: "What does AI stand for?", options: ["Artificial Intel", "Artificial Intelligence", "Automatic Information"], answer: "Artificial Intelligence" },
    { q: "Which is not a programming language?", options: ["Python", "Java", "Banana"], answer: "Banana" },
    { q: "Who proposed the theory of relativity?", options: ["Newton", "Einstein", "Tesla"], answer: "Einstein" },
    { q: "Which data structure uses LIFO?", options: ["Queue", "Stack", "Array"], answer: "Stack" },
    { q: "What is the time complexity of binary search?", options: ["O(n)", "O(log n)", "O(n^2)"], answer: "O(log n)" },
    { q: "Which protocol is used for secure data transfer?", options: ["HTTP", "HTTPS", "FTP"], answer: "HTTPS" },
    { q: "In which year was Python released?", options: ["1991", "2000", "1985"], answer: "1991" },
    { q: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Logic", "Standard Quick Language"], answer: "Structured Query Language" },
    { q: "Which planet has the most moons?", options: ["Saturn", "Jupiter", "Mars"], answer: "Saturn" },
    { q: "Which sorting algorithm is fastest on average?", options: ["Bubble Sort", "Quick Sort", "Selection Sort"], answer: "Quick Sort" },
    { q: "What is the capital of Australia?", options: ["Sydney", "Canberra", "Melbourne"], answer: "Canberra" },
    { q: "Which metal is liquid at room temperature?", options: ["Mercury", "Sodium", "Gold"], answer: "Mercury" },
    { q: "What is entropy a measure of?", options: ["Order", "Disorder", "Temperature"], answer: "Disorder" },
    { q: "What is the full form of URL?", options: ["Uniform Resource Locator", "Universal Resource Link", "Unique Reference Locator"], answer: "Uniform Resource Locator" },
    { q: "Which is the longest river in the world?", options: ["Nile", "Amazon", "Yangtze"], answer: "Nile" }
  ]
};

let currentLevel, currentQuestionIndex, score;

function startQuiz(level) {
  currentLevel = questions[level];
  currentQuestionIndex = 0;
  score = 0;

  document.querySelector(".level-select").classList.add("hidden");
  document.querySelector(".quiz-box").classList.remove("hidden");
  
  showQuestion();
}

function showQuestion() {
  let qObj = currentLevel[currentQuestionIndex];
  document.getElementById("question").textContent = qObj.q;
  
  let optionsBox = document.getElementById("options");
  optionsBox.innerHTML = "";
  
  qObj.options.forEach(opt => {
    let btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, qObj.answer);
    optionsBox.appendChild(btn);
  });
}

function checkAnswer(selected, correct) {
  if (selected === correct) score++;
  document.getElementById("next-btn").classList.remove("hidden");
}

document.getElementById("next-btn").addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < currentLevel.length) {
    showQuestion();
    document.getElementById("next-btn").classList.add("hidden");
  } else {
    endQuiz();
  }
});

function endQuiz() {
  document.querySelector(".quiz-box").classList.add("hidden");
  document.querySelector(".result-box").classList.remove("hidden");
  document.getElementById("score").textContent = `You scored ${score} / ${currentLevel.length}`;
}

function restartQuiz() {
  document.querySelector(".result-box").classList.add("hidden");
  document.querySelector(".level-select").classList.remove("hidden");
}
