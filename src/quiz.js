import * as arrays from './lib/arrays'
import * as random from './lib/random'

export const generateQuiz = (data, quizQuestionsNumber, quizOptionsNumber) => {
    let onlyQuestions = Object.values(data)
    let onlyAnswers = Object.keys(data)

    const positions = arrays.range(0, onlyQuestions.length - 1)
    const chosenPositions = random.choose(positions, quizQuestionsNumber)

    const quiz = chosenPositions
        .map(pos => ({
            index: pos,
            question: onlyQuestions[pos],
            corretAnswer: onlyAnswers[pos],
            answerOptions: arrays.insertAt(
                random.choose(arrays.deleteAt(onlyAnswers, pos), quizOptionsNumber - 1),
                onlyAnswers[pos],
                random.integer(quizOptionsNumber - 1))
        }))

    return quiz
}