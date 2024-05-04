// Массив с вопросами, вариантами ответов и правильными ответами.
let questions = [
    {
        question: "Какой язык программирования вы изучаете?",
        options: ["JavaScript", "Python", "Java", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Какой тип данный хранит true или false?",
        options: ["Number", "Boolean", "String", "Object"],
        correctAnswer: "Boolean"
    },
    {
        question: "Какой из операторов испульзуется для строгого равенства?",
        options: ["==", "===", "!=", "!=="],
        correctAnswer: "==="
    },
    {
        question: "Какой символ используется для обозначения комментария?",
        options: ["//", "#", "!", "{* *}"],
        correctAnswer: "//"
    }
];

let currentQuestion = 0; // Текущий вопрос.
let correctAnswers = 0; // Количество правильных ответов.
let questionElement = document.getElementById("question"); // Получаем блок для размещения вопроса.
let optionsElement = document.getElementById("options"); // Получаем блок кнопок.
let resultElement = document.getElementById("result"); // Проучаем блок для отображения результата.

// Функция для отображения текущего вопроса и вариантов ответа.
function displayQuestion() {
    // Размещаем на странице текущий вопрос.
    questionElement.textContent = `${questions[currentQuestion].question}`;
    // Очистить блок кнопок.
    optionsElement.innerHTML = "";
    // Получим массив ответов.
    let optionsArray = questions[currentQuestion].options;
    // Создать кнопки с вариантами ответов и привязать к ним функцию nextQuestion
    optionsArray.forEach(el => {
        // Создать кнопку в памяти и записать е в переменную.
        let bt = document.createElement('button');
        // Добавить на кнопку текст из массива.
        bt.textContent = el;
        // Добавить кнопку на страницу.
        optionsElement.appendChild(bt);
        // Добавить класс к кнопке.
        bt.classList.add('btn');
    });
    // Обработка клика кнопки с ответом.
    optionsElement.addEventListener('click', (e) => {
        handleBtnClick(e)
    }, { once: true });
};

// Функция перехода к следующему вопросу.
function nextQuestion(answer) {
    if (answer === questions[currentQuestion].correctAnswer) {
        correctAnswers++;
    }
    currentQuestion++; // Перейти к следующему вопросу.
    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
};

function displayResult() {
    document.querySelector('.quiz-container').style.display = "none"; // Выключить видимость блока вопросов.
    optionsElement.style.display = "none"; // Выключить видимость блока результата.
    resultElement.style.opacity = 1;
    resultElement.textContent = `Правильных ответов ${correctAnswers} из ${questions.length}`;
}

function handleBtnClick(e) {
    // Проверка клика, чтобы он был совершен на кнопку.
    if (e.target.tagName === 'BUTTON') {
        let currentAnswer = e.target.textContent; // Текущий ответ.
        nextQuestion(currentAnswer);
    };
};

displayQuestion();