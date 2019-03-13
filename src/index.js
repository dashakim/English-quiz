import './css/style.css'
import data from './sentences'
import { generateQuiz } from './quiz'
import { ref, renderTo } from './lib/dom'
import complete from './components/complete'
import round from './components/round'

const quiz = generateQuiz(data, 2, 4)

const state = {
    quiz: generateQuiz(data, 2, 4),
    round: 0
}

const renderQuiz = (placeholder, state) => {
    if (state.round > quiz.length - 1)
        renderTo(placeholder)(
            complete())

    let questionItem = state.quiz[state.round]

    renderTo(placeholder)(
        round(questionItem.question, questionItem.answers, onAnswerClick(questionItem.correсtAnswer))
    )
}

let onAnswerClick = (correctAnswer) => (e) => {
    (e === correctAnswer) 
        ? alert(`Ty top!`)
        : alert(`You answered: ${e}, but correct was: ${correctAnswer}`)

    state.round += 1
    
    renderQuiz(out, state)
}

const out = ref('out')

renderQuiz(out, state)