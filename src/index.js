import './css/style.css'
import data from './sentences'
import { generateQuiz } from './quiz'
import { h1, text, br, div, button, setInner, ref, renderTo } from './lib/dom'
import complete from './components/complete'
import choice from './components/choice'
import question from './components/question'
import choices from './components/choices'

const quiz = generateQuiz(data, 2, 4)

const renderQuiz = (placeholder, index) => {
    if (index > quiz.length - 1)
        renderTo(placeholder)(
            complete())

    let questionItem = quiz[index]
    let questionTitle = question(questionItem.question)
    let onclick = (e) => {
        (e === questionItem.correсtAnswer) 
            ? alert(`Ty top!`)
            : alert(`You answered: ${e}, but correct was: ${questionItem.correсtAnswer}`)
        renderQuiz(out, ++index)
    }

    let answers = div(`answers`, ...choices(questionItem.answers, onclick))

    renderTo(placeholder)(
        questionTitle, 
        answers)
}

const out = ref('out')
let index = 0

renderQuiz(out, index)