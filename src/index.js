import './css/style.css'
import data from './sentences'
import { generateQuiz } from './quiz'
import { ref, renderTo } from './lib/dom'
import app from './components/app'
import AnswerClick from './actions/answerClick'
import NextClick from './actions/nextClick'

let state = {
    quiz: generateQuiz(data, 2, 4),
    round: 0,
    hasAnswered: false,
    currentCorrectAnswer: ``,
    currentAnswer: ``
}

const update = (model, message) => {
    if (message instanceof AnswerClick) {
        model.hasAnswered = true
        model.currentCorrectAnswer = message.correctAnswer
        model.currentAnswer = message.answer
    }
    if (message instanceof NextClick) {
        model.hasAnswered = false
        model.round += 1
    }
    return model
}

const signal = (action) => {
    return function callback() {
        state = update(state, action)
        view(signal, state, out)
    }
}

const view = (signal, model, placeholder) =>
    renderTo(placeholder)(
        app(model, signal)
    )


let out = {}
const run = () => {
    out = ref('out')

    view(signal, state, out)
}

window.onload = run