import { text, div } from '../lib/dom'
import complete from './complete'
import round from './round'

const app = (signal, state) => {
    let result

    if (state.loading)
        result = text(`Loading...`)
    else if (state.round > state.quiz.length - 1)
        result = complete()
    else {
        const roundData = state.quiz[state.round]
        result = round(signal,
            state.quiz.length,
            state.round,
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