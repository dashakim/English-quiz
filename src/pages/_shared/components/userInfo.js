import './userInfo.css'
import guestUserUrl from './guest.png'

import { div, img } from '../../../lib/dom'

const userInfo = (user) => {
    let imageProps = user && Object.keys(user).length
        ? {
            src: user.photoURL,
            alt: `${user.displayName} (${user.email})`,
            title: `${user.displayName} (${user.email})`
        }
        : {
            src: guestUserUrl,
            alt: ``,
            title: ``
        }

    return div({ className: `login` },
        img(Object.assign(imageProps, { className: `login-image` }))
    )
}

export default userInfo