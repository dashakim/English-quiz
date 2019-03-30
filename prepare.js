const fs = require('fs'); 

const path = `sentences.csv`
let contents = fs.readFileSync(path).toString();
contents = contents.replace('�', ' ');

const lines = contents.split(`\r\n`)
const parts = lines.map(item => item.split(`;`))

let result = {}

for (let line = 0; line < parts.length; line++) {
    const element = parts[line]
    result[element[1]] = element[0]
}

const json = JSON.stringify(result, null, `\t`).replace('�', ' ')
const jsonPath = path.replace(`.csv`, `.json`)
fs.writeFileSync(jsonPath, json)
