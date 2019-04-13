import { h1, br, text } from '../../../lib/dom'

const question = (txt) =>
    h1({},
        text(`${txt}`),
        br())

export default question