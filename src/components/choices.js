import choice from './choice'
import AnswerClick from '../actions/answerClick'

const choices = (signal, answers, correctAnswer) => {
    return answers.map(a => 
        choice(a, signal(new AnswerClick(correctAnswer, a))))
}

export default choices