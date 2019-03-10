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

export const button = (onclick, ...inner) => {
    const el = document.createElement(`button`)
    el.onclick = onclick

    return appendInner(el, inner)
}

export const div = (className, ...inner) => {
    const el = document.createElement(`div`)
    el.className = className
    return appendInner(el, inner);
}

export const h1 = (...inner) => {
    const el = document.createElement(`h1`)
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