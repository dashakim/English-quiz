import choice from './choice'

const choices = (answers, onclick) => {
    return answers.map(a => choice(a, () => onclick(a)))
}

export default choices