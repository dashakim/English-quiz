import * as arrays from './lib/arrays'
import * as random from './lib/random'

export const generateQuiz = (data, questionsNumber, answersNumber) => {
    let allQuestions = Object.values(data)
    let allAnswers = Object.keys(data)

    const positions = arrays.range(0, allQuestions.length - 1)
    const chosenQuestions = random.choose(positions, questionsNumber)

    const result = []

    for (const pos of chosenQuestions) {
        const wrongAnswers = random.choose(arrays.deleteAt(allAnswers, pos), answersNumber - 1);
        
        const answers = arrays.append(wrongAnswers, allAnswers[pos])
        arrays.shuffle(answers)

        const item = {
            index: pos,
            question: allQuestions[pos],
            corretAnswer: allAnswers[pos],
            answers: answers
        }

        result.push(item)

    }

    return result
}