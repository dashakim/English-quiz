export const range = (from, to) => {
    let start = from
    let result = []
    while (start <= to) {
        result.push(start++)
    }
    return result
}

export const deleteAt = (array, position) => {
    const copy = array.slice()
    const deleted = copy.splice(position, 1)

    return copy
}

export const insertAt = (array, item, position) => {
    let result = array.slice()

    result.splice(position, 0, item)

    return result
}