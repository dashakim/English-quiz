import { text, div, img } from '../../../lib/dom'
import RowHovered from '../actions/rowHovered';

const app = (signal, state) => {

    let loginDetails = state.user
        ? div({ className: `login` },
            img({
                className: `login-image`,
                src: state.user.photoURL,
                alt: `${state.user.displayName} (${state.user.email})`,
                title: `${state.user.displayName} (${state.user.email})`
            }))
        : text()

    const rows = state.rows.map((r, i) => div({ onclick: signal(new RowHovered(i)) }, text(`[${i}] ${r.question}: ${r.answer}`)))
    const table = div({ className: 'fields' }, ...rows)

    return div({ className: `app` }, loginDetails, table)
}

export default app