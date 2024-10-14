
questions = [

     {
    
    "ques": "Who is mana?",
    "a": "Mana is a boxer",
    "b": "Talented Hacker",
    "c": "Play Boy",
    "d": "World is trying to find",
    "correct":"d"
    },
    {
    "ques": "Who is mana's first crush",
    "a": "Amna Anjum",
    "b": "Anusha Fatiman",
    "c": "Mia Khalifa",
    "d": "Eva Notty",
    "correct":"b"
    },
    
   {
    
    "ques": "Who is mana's second crush",
    "a": "Amna Anjum",
    "b": "Anusha Fatiman",
    "c": "Mia Khalifa",
    "d": "Eva Notty",
    "correct":"a"
    },
    {
    
    "ques": "Does amna like mana?",
    "a": "yes",
    "b": "No",
    "c": "Immpossible",
    "d": "Deep down may be",
    "correct":"c"
    },

]

let index = 0
let total = questions.length;
let rightAns = 0;
let wrongAns = 0;
const quest = document.getElementById("quesbox")
const options = document.querySelectorAll(".opt")

const loadQuestion = () => {
    if (index == total) {
        endquiz();
    }
    reset();
    const data = questions[index];
    quest.innerText = `${index +1}) ${data.ques}`
    options[0].nextElementSibling.innerText = "a) "+data.a;
    options[1].nextElementSibling.innerText = "b) " + data.b;
    options[2].nextElementSibling.innerText = "c) "+data.c;
    options[3].nextElementSibling.innerText = "d) "+data.d;
    
}


const submitAns = () => {
    const ans = getAnswer();
    if (ans == data.correct) {
        rightAns++;
    }
    else {
        wrongAns++;
    }
    index++;
    loadQuestion();
    
    
}

let answer;
const getAnswer = () => {
    options.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    ) 
    return answer;
}

const reset = () => {
    options.forEach(
        (input) => {
            input.checked = false;
        }
    )
    
}

// function endquiz() {

//     const quizbox = document.getElementById("quiz")
//     quizbox.innerHTML = "<h4 You scored `${rightAns} </h4>"
    
// }

loadQuestion();