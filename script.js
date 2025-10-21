let userName = prompt("What's your name?", '');

alert(`Hey, ${userName}. Welcome to this quiz. We're going to be testing your knowledge on JavaScript. Let's begin!`)

const questions = [
    {
        question: "What programming language adds logic and interactivity to a website?",
        answer: "Javascript"
    },
    {
        question: "What is the symbol for remainder?",
        answer: "%"
    },
    {
        question: "What is the symbol for assignment?",
        answer: "="
    },
    {
        question: "One way of declaring a variable is not recommended to use. What is it?",
        answer: "var"
    },
    {
        question: "What is the operator that can combine two strings together?",
        answer: "+"
    },
    {
        question: "What programming language can be used for both frontend and backend?",
        answer: "Javascript"
    },
    {
        question: "String is a data type (true or false?)",
        answer: "true"
    }
];

let score = 0;

let retakeQuiz;

do {
    for (let i = 0; i < questions.length; i++) {
        let userInput = prompt(questions[i].question);

        if (userInput === questions[i].answer || userInput === questions[i].answer.toLowerCase() || userInput === questions[i].answer.toUpperCase()) {
            score++
            console.log('Good!');
        } else {
            console.log(`Wrong! The answer is ${questions[i].answer}`);
        }
    }
    alert("Quiz completed! Kindly check the console for the result.")

    console.log(`You've completed the quiz. You got ${score}/${questions.length} questions correctly.`);

    let retakeOption = prompt("Would you like to repeat the quiz? type yes or no", '')

    if (retakeOption == "Yes" || retakeOption == "YES" || retakeOption == "yes") {
        retakeQuiz = true;
    } else if (retakeOption == "No" || retakeOption == "NO" || retakeOption == "no") {
        alert("Thank you for participating!");
        break;
    } else {
        alert("Invalid input. Shutting down.")
        break;
    }
} while (retakeQuiz = true);

retakeQuiz = false;