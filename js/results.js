import {results, mbtis} from './data.js'

//http://127.0.0.1:5500/results.html?mbti=isfj
const mbti = new URLSearchParams(location.search).get('mbti') 
//url에서 mbti 가져옴
const result=results[mbtis[mbti]] // 몇번째 result를 출력할지 결정

const titleEl = document.querySelector('.page-title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')

titleEl.innerHTML=mbti.toUpperCase()+"<br>"+result.title
characterEl.src=result.character
boxEls.forEach(function(boxEl,index){
    boxEl.innerHTML=result.results[index]
})
jobEls.forEach(function(jobEl,index){
    jobEl.innerHTML=result.jobs[index]
})