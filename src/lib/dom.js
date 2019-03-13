export const setInner = (node, ...inner) => {
    clear(node)
    return appendInner(node, inner)
}

export const ref = (id) => {
    return document.getElementById(id)
}

export const renderTo = (where) => {
    return (...inner) => setInner(where, ...inner)
}

export const button = (properties, ...inner) => {
    const el = document.createElement(`button`)
    Object.assign(el, properties)

    return appendInner(el, inner)
}

export const div = (properties, ...inner) => {
    const el = document.createElement(`div`)
    Object.assign(el, properties)

    return appendInner(el, inner);
}

export const h1 = (properties, ...inner) => {
    const el = document.createElement(`h1`)
    Object.assign(el, properties)

    return appendInner(el, inner);
}

export const br = () => document.createElement(`br`)

export const text = (txt) => document.createTextNode(txt)

const appendInner = (node, inner) => {
    inner.forEach(el => node.appendChild(el))
    return node
}

const clear = (node) => {
    const range = document.createRange()
    range.selectNodeContents(node)
    range.deleteContents()

    return node
}