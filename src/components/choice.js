import { div, button, text } from '../lib/dom'

const choice = (txt, onclick) => {

    return div(`answer`,
        button(onclick, 
            text(`${txt}`)),
        text(``))
}

export default choice