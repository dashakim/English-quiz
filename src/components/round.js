import { div } from '../lib/dom'
import question from './question'
import choices from './choices'

const round = (qstion, answrs, onAnswerClick) => {
    let questionTitle = question(qstion)
    let answers = div({className: `answers`}, ...choices(answrs, onAnswerClick))
    
    let round = div({className: `app`}, 
        questionTitle, 
        answers)

    return round
}

export default round