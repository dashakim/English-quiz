import { text, div, img } from '../../../lib/dom'
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
            state.counter,
            roundData.correсtAnswer)
    }

    let loginDetails = state.user
        ? div({ className: `login` },
            img({
                className: `login-image`,
                src: state.user.photoURL,
                alt: `${state.user.displayName} (${state.user.email})`,
                title: `${state.user.displayName} (${state.user.email})`
            }))
        : text()

    return div({ className: `app` }, loginDetails, result)
}

export default app