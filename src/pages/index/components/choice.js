import { div, button, text } from '../../../lib/dom'

const choice = (txt, onclick) => {

    return div({ className: `answer` },
        button({ className: `answer-button`, onclick },
            text(`${txt}`)),
        text(``))
}

export default choice