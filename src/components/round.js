import { div, text } from '../lib/dom'
import question from './question'
import choices1 from './choices'
import roundResult from './roundResult'
import NextClick from '../actions/nextClick'


const round = (signal, 
    qstion, 
    answrs, 
    hasAnswered, 
    currentAnswer, 
    currentCorrectAnswer, 
    correctAnswer) => {

    const questionTitle = question(qstion)
    const answers = div({ className: `answers` }, ...choices1(signal, answrs, correctAnswer))

    const resultText = currentAnswer === currentCorrectAnswer
        ? `Ty top!`
        : `You've answered: ${currentAnswer}, but correct was: ${currentCorrectAnswer}`

    const result = roundResult(resultText, 
        signal(new NextClick()))

    let round = div({ className: `round` },
        questionTitle,
        answers,
        hasAnswered ? result : text(``))

    return round
}

export default round