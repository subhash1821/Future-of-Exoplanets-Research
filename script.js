// Define levels, study points, and questions
const levels = [
    {
        title: "Level 8:Future of Exoplanet Research",
        studyPoints: [
            "New telescopes like the James Webb Space Telescope aim to study exoplanet atmospheres.",
            "Artificial intelligence is being used to analyze data from exoplanet searches.",
            "Future missions may include large space observatories focused on exoplanet research.",
            "The study of exoplanets can provide insights into the formation of planetary systems.",
            "Understanding exoplanets may help answer questions about life beyond Earth.",

        ],
        questions: [
            {
            question: "What is the James Webb Space Telescope designed for?",
            options: ["Studying black holes", "Observing the Moon", "Studying exoplanet atmospheres", "Mapping galaxies"],
            answer: 2
            },
            {
            question: "How is artificial intelligence contributing to exoplanet research?",
            options: ["Discovering new stars", "Analyzing data from exoplanet searches", "Measuring the brightness of planets", "Creating space missions"],
            answer: 1
            },
            {
            question: "What might future large space observatories focus on?",
            options: ["Studying the Sun", "Exoplanet research", "Observing asteroids", "Mapping the Earth's surface"],
            answer: 1
            },
            {
            question: "Why is studying exoplanets significant?",
            options: ["It helps in creating new technologies", "It provides insights into the formation of planetary systems", "It helps in studying our solar system exclusively", "It focuses only on Earth's atmosphere"],
            answer: 1
            },
            {
            question: "What is one of the ultimate questions in exoplanet research?",
            options: ["The distance from Earth to the nearest star", "The possibility of life beyond Earth", "The size of the universe", "The age of the Earth"],
            answer: 1
            }
            ]
        
        
    }
];

// Initialize variables
let currentLevel = 0;
let currentQuestion = 0;
let score = 0;

// Start game button event listener
document.getElementById("start-button").addEventListener("click", startGame);

// Start game function
function startGame() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("level-container").style.display = "block";
    showStudyMode();
}

// Show study mode function
function showStudyMode() {
    document.getElementById("study-mode").style.display = "block";
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("level-title").innerHTML = levels[currentLevel].title;
    const studyPoints = document.getElementById("study-points");
    studyPoints.innerHTML = "";
    levels[currentLevel].studyPoints.forEach(point => {
        const li = document.createElement("li");
        li.innerHTML = point;
        studyPoints.appendChild(li);
    });
    document.getElementById("quiz-button").addEventListener("click", showQuizMode);
}

// Show quiz mode function
function showQuizMode() {
    document.getElementById("study-mode").style.display = "none";
    document.getElementById("quiz-mode").style.display = "block";
    showQuestion();
}

// Show question function
function showQuestion() {
    const question = document.getElementById("question");
    const options = document.getElementById("options");
    question.innerHTML = levels[currentLevel].questions[currentQuestion].question;
    options.innerHTML = "";
    levels[currentLevel].questions[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = option;
        li.addEventListener("click", () => {
            checkAnswer(index);
        });
        options.appendChild(li);
    });
}

// Check answer function
function checkAnswer(answer) {
    if (answer === levels[currentLevel].questions[currentQuestion].answer) {
        score++;
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").innerHTML = "Incorrect.";
    }
    currentQuestion++;
    if (currentQuestion >= levels[currentLevel].questions.length) {
        endLevel();
    } else {
        showQuestion();
    }
}

// End level function
function endLevel() {
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("end-button-container").style.display = "block";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").innerHTML = `Level ${currentLevel + 1} Score: ${score}/${levels[currentLevel].questions.length}`;
    document.getElementById("end-button").addEventListener("click", nextLevel);
}

// Next level function
function nextLevel() {
    currentLevel++;
    currentQuestion = 0;
    score = 0;
    if (currentLevel >= levels.length) {
        alert("Congratulations, you've completed all levels!");
    } else {
        document.getElementById("end-button-container").style.display = "none";
        document.getElementById("score-container").style.display = "none";
        showStudyMode();
    }
}