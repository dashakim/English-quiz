const fs = require('fs'); 

const path = `D:/Kim/Workout/JS/EnglishQuiz/answers.csv`
const contents = fs.readFileSync(path).toString();

const lines = contents.split(`\r\n`)
const parts = lines.map(item => item.split(`;`))

let result = {}

for (let line = 0; line < parts.length; line++) {
    const element = parts[line]
    result[element[1]] = element[0]
}

const json = JSON.stringify(result, null, `\t`)
const jsonPath = path.replace(`.csv`, `.json`)
fs.writeFileSync(jsonPath, json)
