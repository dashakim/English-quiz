import { div, text, button, h1 } from '../../../lib/dom'

const roundResult = (result, onNext) => {
    return div({ className: `round-result` },
        h1({}, text(result)),
        button({ onclick: onNext, className: `next-button` }, text(`⮞⮞`)))
}

export default roundResult