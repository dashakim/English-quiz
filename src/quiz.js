import * as arrays from './lib/arrays'
import * as random from './lib/random'

export const generateQuiz = (data, quizQuestionsNumber, quizOptionsNumber) => {
    let onlyQuestions = Object.values(data)
    let onlyAnswers = Object.keys(data)

    const positions = arrays.range(0, onlyQuestions.length - 1)
    const chosenPositions = random.choose(positions, quizQuestionsNumber)

    const result = []

    for (const pos of chosenPositions) {
        const wrongAnswers = random.choose(arrays.deleteAt(onlyAnswers, pos), quizOptionsNumber - 1);
        
        const answers = wrongAnswers.slice()
        answers.push(onlyAnswers[pos])

        const answerOptions = arrays.shuffle(answers)

        const item = {
            index: pos,
            question: onlyQuestions[pos],
            corretAnswer: onlyAnswers[pos],
            answerOptions: answerOptions
        }

        result.push(item)

    }

    return result
}