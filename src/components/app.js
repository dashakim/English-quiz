import { div } from '../lib/dom'
import complete from './complete'
import round from './round'

const app = (state, onAnswerClick, onNext) => {
    let result

    if (state.round > state.quiz.length - 1)
        result = complete()
    else {
        const roundData = state.quiz[state.round]
        result = round(roundData.question, roundData.answers, state.hasAnswered, state.currentAnswer, state.currentCorrectAnswer, onAnswerClick(roundData.correсtAnswer), onNext)
    }

    return div({ className: `app` }, result)
}

export default app