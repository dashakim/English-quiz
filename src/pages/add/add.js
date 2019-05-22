import './css/style.css'
import { getElementById, renderTo } from '../../lib/dom'
import app from './components/app'
import Started from './actions/started'
import Save from './actions/save'
import Saved from './actions/saved'
import LoggedIn from './actions/loggedIn'
import AnonymousLoggedIn from './actions/anonymousLoggedIn'

import { firebase } from "@firebase/app"
import "@firebase/auth"
import "@firebase/firestore"
import config from '../../firebase-config.json';

firebase.initializeApp(config)
firebase.auth().languageCode = 'en'

const db = firebase.firestore()

let state = {
    user: {},
    courseId: 'en',
}

const update = (signal, model, message) => {
    if (message instanceof Started) {
        model.placeholder = getElementById('out')
        model.courseId = new URL(window.location).searchParams.get('courseId')
    }
    if (message instanceof AnonymousLoggedIn) {
        window.location.href = '/auth.html'
    }
    if (message instanceof LoggedIn) {
        model.user.uid = message.user.uid
        model.user.displayName = message.user.displayName
        model.user.photoURL = message.user.photoURL
        model.user.email = message.user.email

    }
    if (message instanceof Save) {
        const courseRef = db.collection(`courses`).doc(model.courseId)

        courseRef.collection(`questions`).doc(message.question)
            .set({answer: message.answer})
            .then(() => 
                signal(new Saved(message.question, message.answer))()
            )                
    }

    console.log(`Handled: `, message)
    console.log(model)

    return model
}

const signal = (action) => {
    return function callback() {
        state = update(signal, state, action)
        view(signal, state)
    }
}

const view = (signal, model) =>
    renderTo(model.placeholder)(
        app(signal, model)
    )

window.onload = signal(new Started())

firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
        signal(new AnonymousLoggedIn())()
    }
    else {
        signal(new LoggedIn(user))()
    }
})
