import { text, div } from '../../../lib/dom'
import RowEditClicked from '../actions/rowEditClicked';
import userInfo from '../../_shared/components/userInfo'


const app = (signal, state) => {
    const login = userInfo(state.user)
    const rows = state.rows.map((r, i) =>
        div(
            {
                onclick: signal(new RowEditClicked(i))
            },
            text(`[${i}] ${r.question}: ${r.answer}`)
        )
    )
    const table = div({ className: 'fields' }, ...rows)

    return div({ className: `app` }, login, table)
}

export default app