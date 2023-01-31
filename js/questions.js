import {questions} from './data.js'

// const -> 변경 불가능
const progressValueEl=document.querySelector('.progress .value')
const numberEl=document.querySelector('.number')
const questionEl=document.querySelector('.question')
const choice1El=document.querySelector('.choice1')
const choice2El=document.querySelector('.choice2')

// let-> 변경 가능
let currentNumber=0
let mbti=''

function renderQuestion(){
    const question=questions[currentNumber]
    numberEl.innerHTML=question.number //='01','02' ..질문번호
    questionEl.innerHTML=question.question //질문 텍스트
    choice1El.innerHTML=question.choices[0].text
    choice2El.innerHTML=question.choices[1].text
    progressValueEl.style.width=(currentNumber+1)*10+'%' //프로그래스바 10%, 20%...~
}

function nextQuestion(choiceNumber){
    if (currentNumber===questions.length-1){
        showResultPage()
        return
    }
    const question=questions[currentNumber]
    mbti=mbti+question.choices[choiceNumber].value // "e/i"+"n/s"+"f/t"+"p/j" 
    currentNumber=currentNumber+1
    renderQuestion()
}

function showResultPage(){
    location.href='/results.html?mbti=' + mbti
}

choice1El.addEventListener('click',function(){
    nextQuestion(0) //choiceNumber=0
})

choice2El.addEventListener('click',function(){
    nextQuestion(1) //choiceNumber=1
})

renderQuestion()