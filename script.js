const questions = [
    {
        question: "If you have a barrel filled with water and you want to put it upright on the ground, how can you do it?",
        answer: [
            { text: 'Pour out the water', correct: true },
            { text: 'Use a forklift', correct: false },
            { text: 'Tilt it slowly', correct: false },
            { text: 'Turn it upside down and let it fall', correct: false },
        ]
    },
        
        {
        question: "I am taken from a mine, and shut up in a wooden case, from which I am never released, and yet I am used by almost every person. What am I?",
        answer: [
            { text: 'Coal', correct: true },
            { text: 'Gold', correct: false },
            { text: 'Diamond', correct: false },
            { text: 'Oil', correct: false },
        ]
    },
        
        {
        question: "You see a boat filled with people. It has not sunk, but when you look again, you don’t see a single person on the boat. Why?",
        answer: [
            { text: 'They all jumped into the water', correct: false },
            { text: 'They were all ghosts', correct: false },
            { text: 'They were all married', correct: true },
            { text: 'It was an illusion', correct: false },
        ]
    },
        
        {
        question: "What is always in front of you but can’t be seen?",
        answer: [
            { text: 'Your future', correct: true },
            { text: 'A mirror', correct: false },
            { text: 'The past', correct: false },
            { text: 'A wall', correct: false },
        ]
    },
        
        {
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
        answer: [
            { text: 'An echo', correct: true },
            { text: 'A ghost', correct: false },
            { text: 'A shadow', correct: false },
            { text: 'A dream', correct: false },
        ]
    },
        
        {
        question: "What has keys but can't open locks?",
        answer: [
            { text: 'A piano', correct: true },
            { text: 'A treasure chest', correct: false },
            { text: 'A keyboard', correct: false },
            { text: 'A safe', correct: false },
        ]
    },
        
        {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        answer: [
            { text: 'The letter "M"', correct: true },
            { text: 'A comet', correct: false },
            { text: 'A leap year', correct: false },
            { text: 'A new year', correct: false },
        ]
    },
        
        {
        question: "What has keys but can't open locks?",
        answer: [
            { text: 'A piano', correct: true },
            { text: 'A treasure chest', correct: false },
            { text: 'A keyboard', correct: false },
            { text: 'A safe', correct: false },
        ]
    },
        
        {
        question: "What begins and has no end, and is the ending of all that begins?",
        answer: [
            { text: 'The letter "E"', correct: true },
            { text: 'A circle', correct: false },
            { text: 'A book', correct: false },
            { text: 'A journey', correct: false },
        ]
    },
        
        {
        question: "The more you take, the more you leave behind. What am I?",
        answer: [
            { text: 'Footsteps', correct: true },
            { text: 'Memories', correct: false },
            { text: 'Riddles', correct: false },
            { text: 'Photos', correct: false },
        ]
    }
]

const questionElem = document.getElementById('question')
const ansBtn = document.getElementById('answer-panel')
const nextBtn = document.getElementById('next')
const amit = document.getElementById('amit')

let currentQuestionIndex = 0
let score = 0

const startQuiz = ()=>{
    currentQuestionIndex = 0
    score = 0
    nextBtn.innerHTML = 'Next'
    showQuestion();
}

const showQuestion = ()=>{
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    let questionNumber = currentQuestionIndex + 1
    questionElem.innerHTML = questionNumber + '. ' + currentQuestion.question

    currentQuestion.answer.forEach(answers =>{
        const button = document.createElement('button')
        button.innerHTML = answers.text
        button.classList.add('btn')
        ansBtn.appendChild(button)
        button.addEventListener('click', selectAns)
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
    })
}

const resetState = () =>{
    nextBtn.style.display = 'none'
    amit.style.display = 'none'
    while(ansBtn.firstChild){
        ansBtn.removeChild(ansBtn.firstChild)
    }
}

const selectAns = (e)=>{
    const selectedBtn = e.target
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct')
        score++
    }
    else{
        selectedBtn.classList.add('incorrect')
    }
    Array.from(ansBtn.children).forEach(button =>{
        if (button.dataset.correct === 'true'){
            button.classList.add('correct')
        }
        button.disabled = true;
    })
    nextBtn.style.display = 'block'
}

nextBtn.addEventListener('click',()=>{
    if(currentQuestionIndex < questions.length){
        handleNextBtn()
    }
    else{
        startQuiz()
    }
})

function handleNextBtn(){
    currentQuestionIndex++
    if(currentQuestionIndex < questions.length){
        showQuestion()
    }
    else{
        showScore()
    }

}

function showScore(){
    resetState();
    questionElem.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextBtn.innerHTML = "Restart?"
    nextBtn.style.display = 'block'
    amit.style.display = 'flex'
}

startQuiz();




