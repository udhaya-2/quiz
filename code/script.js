const menuQuiz = () => {
    document.querySelector(".pop").style.display = "block";
    window.addEventListener("dblclick", () => {
      document.querySelector(".pop").style.display = "none";
    });
  };
  
  let questions = [];
  let questionsIndex = 0;
  let score = 0;
  
  const quizstart = (e) => {
    alert("hi")
    fetch(`../api/${e}.json`)
      .then((res) => res.json())
      .then((data) => {
        questions = data;
        showQuestion();
      })
      .catch((err) => console.log(err));
  };
  
  function showQuestion() {
    const body = document.querySelector("");
    let currentValue = questions[questionsIndex];
    let currentOption = currentValue.options
      .map((opt, index) => {
        return `<li>
                  <input type="radio" name="questionnum" id="opt${index}" value="${opt}" />
                  <label for="opt${index}">${opt}</label>
                </li>`;
      })
      .join("");
    body.innerHTML = `<div class="quizBox">
              <h3>Quiz HTML</h3>
              <p>${currentValue.question}</p>
              <ul>
                ${currentOption}
              </ul>
              <div class="btn-quiz">
                <button class="previous" onclick="preQuestion()">Previous</button>
                <button class="NEXT" onclick="Nextquestion()">Next</button>
              </div>
          </div>`;
  }
  
  function Nextquestion() {
    const selectedOption = document.querySelector('input[name="questionnum"]:checked');
    const currentAnswer = selectedOption?.value || "";
    const correctAnswer = questions[questionsIndex].answer;
  
    console.log("Selected:", currentAnswer);
    console.log("Correct:", correctAnswer);
  
    if (currentAnswer === correctAnswer) {
      score++;
    }
  
    if (questionsIndex < questions.length - 1) {
      questionsIndex++;
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function preQuestion() {
    if (questionsIndex > 0) {
      questionsIndex--;
      showQuestion();
    }
  }
  
  function showResult() {
    document.querySelector(".body").innerHTML = `
      <div class="quizBox">
        <h3>Your Score</h3>
        <p>You scored ${score} out of ${questions.length}</p>
      </div>
    `;
  }
  