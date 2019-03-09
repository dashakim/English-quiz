import './css/style.css'
import data from './sentences'
import { generateQuiz } from './quiz'

const quiz = generateQuiz(data, 5, 4)

const renderQuiz = (placeholder, index) => {
    if (index > quiz.length - 1)
        setInner(placeholder, fin())

    let question = quiz[index]
    let questionTitle = h1(
                            text(`Question: ${question.question}?`), 
                            br())

    let answerOptions = question.answers.map(a => answerOption(a, question.correсtAnswer))
    let answers = div(`answers`, ...answerOptions)
    setInner(placeholder, questionTitle, answers)
}

const out = document.getElementById('out')
let index = 0

const answerOption = (answer, correсtAnswer) => {
    const onclick = () => {
        alert(`${correсtAnswer}`)
        renderQuiz(out, ++index)
    }

    return div(`answer`,
        button(onclick, 
            text(`${answer}`)),
        text(``))
}

const fin = () =>
    h1(text(`Aaaa, vi iz anglii!`), text(` :)`))

const clear = (node) => {
    const range = document.createRange()
    range.selectNodeContents(node)
    range.deleteContents()

    return node
}

const setInner = (node, ...inner) => {
    clear(node)
    return appendInner(node, inner)    
}

const appendInner = (node, inner) => {
    inner.forEach(el => node.appendChild(el))
    return node
}

const button = (onclick, ...inner) => {
    const el = document.createElement(`button`)
    el.onclick = onclick

    return appendInner(el, inner)
}

const div = (className, ...inner) => {
    const el = document.createElement(`div`)
    el.className = className
    return appendInner(el, inner);
}

const h1 = (...inner) => {
    const el = document.createElement(`h1`)
    return appendInner(el, inner);
}

const br = () => document.createElement(`br`)

const text = (txt) => document.createTextNode(txt);

renderQuiz(out, index)