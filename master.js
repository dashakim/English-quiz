const answers = require('./answers'); 

let chooseRandoms = (total, numberToChoose) => {
    let available = range(0, total)
    let result = []

    while (result.length < numberToChoose){
        let position = randomInteger(available.length)
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

let index = 0
for (const key in answers) {
    if (answers.hasOwnProperty(key)) {
        //console.log(index++);
        
        const element = answers[key];
    }
}

console.log(chooseRandoms(35, 5));