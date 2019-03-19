import { div } from '../lib/dom'
import complete from './complete'
import round from './round'

const app = (state, signal) => {
    let result

    if (state.round > state.quiz.length - 1)
        result = complete()
    else {
        const roundData = state.quiz[state.round]
        result = round(signal,
            roundData.question,
            roundData.answers,
            state.hasAnswered,
            state.currentAnswer,
            state.currentCorrectAnswer,
            roundData.correсtAnswer)
    }

    return div({ className: `app` }, result)
}

export default app