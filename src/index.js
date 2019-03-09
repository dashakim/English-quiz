import './css/style.css'
import data from './sentences'
import { generateQuiz } from './quiz'

const quiz = generateQuiz(data, 5, 4)

const renderQuiz = (placeholder, index) => {
    if (index > quiz.length - 1)
        placeholder.innerHTML = renderFin()

    let question = quiz[index]
    let body = `<h1>Question: ${question.question}?<br></h1>`;
    for (const answer of question.answers) {
        body += renderAnswer(answer, question.corretAnswer)
    }

    placeholder.innerHTML = body
}

const out = document.getElementById('out')
let index = 0

const renderAnswer = (answer, corretAnswer) =>
    `<button onclick='alert("${corretAnswer}"); renderQuiz(out, ++index)'>${answer}</button> &nbsp;`

const renderFin = () =>
    `<h1>Aaaa, vi iz anglii!</h1>`

renderQuiz(out, index)


window.renderQuiz = renderQuiz
window.out = out
window.quiz = quiz
window.index = index


// const renderQuestion = (question)

// const out = document.getElementById('out')
// for (const key in quiz[0]) {
//     out.innerHTML += key + ' ' + quiz[0][key] + '<br>'
// }