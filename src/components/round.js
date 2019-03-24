import { br, h1, div, text } from '../lib/dom'
import question from './question'
import choices from './choices'
import roundResult from './roundResult'
import NextClick from '../actions/nextClick'


const round = (signal,
    totalQuestions,
    currentQuestion,
    qstion,
    answrs,
    hasAnswered,
    currentAnswer,
    currentCorrectAnswer,
    correctAnswer) => {

    const progress = h1({},
        text(`Question ${currentQuestion + 1}/${totalQuestions}`),
        br())

    const questionTitle = question(qstion)
    const answers = div({ className: `answers` }, ...choices(signal, answrs, correctAnswer))

    const resultText = currentAnswer === currentCorrectAnswer
        ? `Ty top!`
        : `You've answered: ${currentAnswer}, but correct was: ${currentCorrectAnswer}`

    const result = roundResult(resultText,
        signal(new NextClick()))

    let round = div({ className: `round` },
        progress,
        questionTitle,
        answers,
        hasAnswered ? result : text(``))

    return round
}

export default round