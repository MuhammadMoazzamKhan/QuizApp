window.onload = () => {
    quizs()
}
let quiz = [
    {
        ask: "1. Which of the following is not a primitive data type in JavaScript?",
        tell1: "Number",
        tell2: "Object",
        tell3: "String",
        answer: "Object"
    },
    {
        ask: "2. console.log(typeof null);",
        tell1: "“null”",
        tell2: "object",
        tell3: "Error",
        answer: "object"
    },
    {
        ask: "3. What is the output of the following code: console.log(2 + “2”);",
        tell1: "“4”",
        tell2: "“22”",
        tell3: "22",
        answer: "“22”"
    },
    {
        ask: "4. Which of the following is not a comparison operator in JavaScript?",
        tell1: "==",
        tell2: "===",
        tell3: "=<",
        answer: "=<"
    },
    {
        ask: "5. var x = 5;   console.log(x++);",
        tell1: "4",
        tell2: "5",
        tell3: "6",
        answer: "5"
    },
    {
        ask: "6. var x = true; console.log(!x);",
        tell1: "false",
        tell2: "Error",
        tell3: "true",
        answer: "false"
    },
    {
        ask: "7. What does the “NaN” value represent in JavaScript?",
        tell1: "Not a number",
        tell2: "Boolean value",
        tell3: "Null value",
        answer: "Not a number"
    },
    {
        ask: "8. var x = 5; var y = “5”; console.log(x == y);",
        tell1: "false",
        tell2: "Error",
        tell3: "true",
        answer: "true"
    },
    {
        ask: "9. What is the correct way to declare a variable in JavaScript?",
        tell1: "var x = 5;",
        tell2: "variable x = 5;",
        tell3: " let x = 5;",
        answer: " let x = 5;"
    },
    {
        ask: "10. var x = 5; var y = 3; var z = x++ - y-; console.log(z);",
        tell1: "2",
        tell2: "4",
        tell3: "5",
        answer: "2"
    },
    {
        ask: "11. var x = [1, 2, 3]; console.log(x.length);",
        tell1: "1",
        tell2: "4",
        tell3: "3",
        answer: "3"
    },
    {
        ask: "12. console.log(typeof NaN);",
        tell1: "“number”",
        tell2: "“string”",
        tell3: "NaN",
        answer: "“number”"
    },
    {
        ask: "13. console.log(true && “hello”);",
        tell1: "true",
        tell2: "“hello”",
        tell3: "Error",
        answer: "“hello”"
    },
    {
        ask: "14. console.log(2 ** 3);",
        tell1: "5",
        tell2: "6",
        tell3: "8",
        answer: "8"
    },
    {
        ask: "15. var x = [1, 2, 3]; var y = x.slice(0, 2); console.log(y);",
        tell1: "[1, 2, 3]",
        tell2: "[2, 3]",
        tell3: "[1, 2]",
        answer: "[1, 2]"
    },
    {
        ask: "16. var x = 5; var y = “5”; console.log(x === y);",
        tell1: "true",
        tell2: "false",
        tell3: "Error",
        answer: "false"
    },
    {
        ask: "17. console.log(0.1 + 0.2 == 0.3);",
        tell1: "Error",
        tell2: "true",
        tell3: "false",
        answer: "false"
    },
    {
        ask: "18. console.log(1 + “2” + 3)",
        tell1: "“123”",
        tell2: "6",
        tell3: "“15”",
        answer: "“123”"
    },
    {
        ask: "19.var x = 10; var y = 5; console.log((x > y) && (y < 6));",
        tell1: "TypeError",
        tell2: "true",
        tell3: "false",
        answer: "false"
    },
    {
        ask: "20. Which of the following is not a primitive data type in JavaScript?",
        tell1: "String",
        tell2: "Array",
        tell3: "Number",
        answer: "Array"
    }
]
const question = document.getElementById("question");
const hope = document.getElementsByName("hopping");
const a = document.getElementById("a1")
const b = document.getElementById("b1")
const c = document.getElementById("c1")
const btn = document.getElementById("btn")
const container = document.getElementsByClassName("container")[0];
const container1 = document.getElementsByClassName("container")[1];
let count = 0;
let score = 0;
let p30 = document.getElementById("p30");
let p60 = document.getElementById("p60");
let p90 = document.getElementById("p90");
let percent = document.getElementById("percentText");
let totalQuestion = document.getElementById("totalQuestion");
let solveQuestion = document.getElementById("solveQuestion");
let finalQuestion = document.getElementById("finalQuestion");
function quizs() {
    for (let i = 0; i < hope.length; i++) {
        if (hope[i].checked) {
            count++
            minutes = 1;
            secs = 10;
            hope[i].checked = false
            if (quiz[count - 1][`tell${hope[i].value}`] === quiz[count - 1][`answer`]) {
                score++
                console.log(score)
            }
        }

    }
    if (count > quiz.length - 1) {
        btn.classList.add("off")
        container.classList.add("off")
        container1.classList.remove("off")
        createStyleLink()
        clearInterval(interval)
        let result = scorePercentage(score)
        percent.innerHTML = `${scorePercentage(score)}%`
        percentageCircle(result)
        exitfullscreen()
        totalQuestion.innerHTML = `Total Question : ${quiz.length}`
        solveQuestion.innerHTML = `Correct answer : ${score}`
        finalQuestion.innerHTML = `Your percentage : ${scorePercentage(score)}`
    } else {
        question.innerHTML = quiz[count].ask
        a.innerHTML = `<label for="a"><span></span>${quiz[count].tell1}</label>`
        b.innerHTML = `<label for="b" id="b1"><span></span>${quiz[count].tell2}</label>`
        c.innerHTML = `<label for="c" id="c1"><span></span>${quiz[count].tell3}</label>`
    }
}

let min = document.getElementById("min");
let sec = document.getElementById("sec");
let minutes = 1;
let secs = 3;
let interval = setInterval(() => {
    secs--;
    if (secs < 1) {
        if (minutes < 1 && secs == 0) {
            count++
            quizs()
            minutes = 1;
            secs = 3;
        } else {
            minutes--
            secs = 60;
        }
    }

    min.innerHTML = minutes;
    sec.innerHTML = secs
}, 1000);

function createStyleLink() {
    let link = document.createElement("link");
    link.rel = "stylesheet"
    link.href = "style3.css";
    document.head.appendChild(link);
}

function scorePercentage(num) {
    return Math.floor((num / 20) * 100);
}


function percentageCircle(num) {
    if (num > 70) {
        p90.classList.remove('off')
    } else if (num > 50) {
        p60.classList.remove("off")
    } else {
        p30.classList.remove("off")
    }
}
