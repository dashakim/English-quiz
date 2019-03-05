const sentences = require('./answers'); 

let chooseRandoms = (items, numberToChoose) => {
    let result = []

    while (result.length < numberToChoose){
        let position = randomInteger(items.length - 1)
        let element = items[position]

        items.splice(position, 1)

        result.push(element)        
    }

    return result
}

//               total 
// [0, 1, 2, ..., 35]
//        ^
//        |
// [0, 1, 3, ..., 35]

let range = (from, to) => {
    let start = from
    let result = []
    while (start <= to) {
        result.push(start++)
    }
    return result
}

let randomInteger = (max) => 
    Math.abs(Math.round(Math.random() * (max + 1) - 0.5))

const deleteAt = (array, position) => { 
    const copy = array.slice()
    const deleted = copy.splice(position, 1)

    return copy
}

const insertAt = (array, item, position) => {
    let result = array.slice()

    result.splice(position, 0, item)

    return result
}

let onlyQuestions = [];
for (const key in sentences) {
    if (sentences.hasOwnProperty(key)) { 
        onlyQuestions.push(sentences[key])  
    }
}
console.log(onlyQuestions);

let onlyAnswers = [];
for (const key in sentences) {
    if (sentences.hasOwnProperty(key)) {        
        onlyAnswers.push(key)  
    }
}
console.log(onlyAnswers);

const quizQuestionsNumber = 5
const quizOptionsNumber = 4

const positions = range(0, onlyQuestions.length - 1)
const chosenPositions = chooseRandoms(positions, quizQuestionsNumber)
const quiz = chosenPositions
    .map(pos => ({
        index: pos, 
        question: onlyQuestions[pos],
        corretAnswer: onlyAnswers[pos],
        answerOptions: insertAt(
            chooseRandoms(deleteAt(onlyAnswers, pos), quizOptionsNumber - 1),
            onlyAnswers[pos],
            randomInteger(quizOptionsNumber - 1))
    }))



console.log(quiz);