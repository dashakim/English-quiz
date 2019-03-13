import './css/style.css'
import data from './sentences'
import { generateQuiz } from './quiz'
import { ref, renderTo } from './lib/dom'
import complete from './components/complete'
import round from './components/round'

const quiz = generateQuiz(data, 2, 4)

const renderQuiz = (placeholder, index) => {
    if (index > quiz.length - 1)
        renderTo(placeholder)(
            complete())

    let questionItem = quiz[index]

    renderTo(placeholder)(
        round(questionItem.question, questionItem.answers, onAnswerClick(questionItem.correсtAnswer))
    )
}

let onAnswerClick = (correctAnswer) => (e) => {
    (e === correctAnswer) 
        ? alert(`Ty top!`)
        : alert(`You answered: ${e}, but correct was: ${correctAnswer}`)
    renderQuiz(out, ++index)
}

const out = ref('out')
let index = 0

renderQuiz(out, index)