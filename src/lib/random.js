export const integer = (max) =>
    Math.abs(Math.round(Math.random() * (max + 1) - 0.5))

export const choose = (items, numberToChoose) => {
    let result = []

    while (result.length < numberToChoose) {
        let position = integer(items.length - 1)
        let element = items[position]

        items.splice(position, 1)

        result.push(element)
    }

    return result
}
