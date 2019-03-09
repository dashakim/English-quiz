import { integer as randomInteger } from './random'

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

export const swap = (array, index1, index2) => {
    const swapped = array[index1]
    array[index1] = array[index2]
    array[index2] = swapped
}
export const append = (array, el) => {
    const result = array.slice()
    result.push(el)
    
    return result
}

export const shuffle = (array) => {
    for (let index = array.length - 1; index >= 0; index--) {
        swap(array, index, randomInteger(index))
    }

    return array
}