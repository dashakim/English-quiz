import { text, div, input, button, form } from '../../../lib/dom'
import Cancel from '../actions/cancel';
import Save from '../actions/save';
import userInfo from '../../_shared/components/userInfo'


const app = (signal, state) => {
    const login = userInfo(state.user)

    const question = input({
        name: `question`,
        type: `text`,
        value: `word`
    })
    const answer = input({
        name: `answer`,
        type: `text`,
        value: `definition`
    })
    const save = input({ type: `submit` })
    const editForm = form({
        className: 'fields',
        onsubmit: (e) => { 
            signal(new Save(e.target[0].value, e.target[1].value))()
            e.preventDefault()
        }
    }, question, answer, save)

    return div({ className: `app` }, login, editForm)
}

export default app