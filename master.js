const answers = require('./answers'); 

let chooseRandoms = (total, numberToChoose) => {
    let available = range(0, total)
    let result = []

    while (result.length < numberToChoose){
        let position = randomInteger(available.length - 1)
        let element = available[position]

        available.splice(position, 1)

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


for (const key in answers) {
    if (answers.hasOwnProperty(key)) {

        const element = answers[key];
    }
}

console.log(chooseRandoms(35, 20));