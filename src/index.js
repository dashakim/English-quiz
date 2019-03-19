import './css/style.css'
import data from './sentences'
import { generateQuiz } from './quiz'
import { ref, renderTo } from './lib/dom'
import app from './components/app'

const state = {
    quiz: generateQuiz(data, 2, 4),
    round: 0,
    hasAnswered: false,
    currentCorrectAnswer: ``,
    currentAnswer: ``
}

let out = {}

const renderQuiz = (placeholder, state) => {
    renderTo(placeholder)(
        app(state, onAnswerClick, onNext)
    )
}

const onAnswerClick = (correctAnswer) => (answer) => {
    state.hasAnswered = true
    state.currentCorrectAnswer = correctAnswer
    state.currentAnswer = answer

    renderQuiz(out, state)
}

const onNext = () => {
    state.hasAnswered = false
    state.round += 1

    renderQuiz(out, state)
}

const onActionHappened = (actionHandler) => {
    actionHandler()
    
    renderQuiz(out, state)
}










const onLoad = () => {
    out = ref('out')

    renderQuiz(out, state)
}

window.onload = onLoad