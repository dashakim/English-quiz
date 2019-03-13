import { div, text } from '../lib/dom'
import question from './question'
import choices from './choices'
import roundResult from './roundResult'

const round = (qstion, answrs, hasAnswered, currentAnswer, currentCorrectAnswer, onAnswerClick, onNext) => {
    const questionTitle = question(qstion)
    const answers = div({ className: `answers` }, ...choices(answrs, onAnswerClick))

    const resultText = currentAnswer === currentCorrectAnswer
        ? `Ty top!`
        : `You've answered: ${currentAnswer}, but correct was: ${currentCorrectAnswer}`

    const result = roundResult(resultText, onNext)

    let round = div({ className: `round` },
        questionTitle,
        answers,
        hasAnswered ? result : text(``))

    return round
}

export default round