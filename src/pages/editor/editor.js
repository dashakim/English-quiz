import './css/style.css'
import { getElementById, renderTo } from '../../lib/dom'
import app from './components/app'
import Started from './actions/started'
import DataLoaded from './actions/dataLoaded'
import LoggedIn from './actions/loggedIn'
import AnonymousLoggedIn from './actions/anonymousLoggedIn'
import RowHovered from './actions/rowHovered'
import RowDeleted from './actions/rowDeleted'
import RowEditClicked from './actions/rowEditClicked'

import { firebase } from "@firebase/app"
import "@firebase/auth"
import "@firebase/firestore"
import config from '../../firebase-config.json';

firebase.initializeApp(config)
firebase.auth().languageCode = 'en'

const db = firebase.firestore()

let state = {
    user: {},
    collectionName: 'English quiz',
    rows: [],
    currentRow: '1',
    showEditForm: true,
    showHover: false,
}

const update = (signal, model, message) => {
    if (message instanceof Started) {
        model.placeholder = getElementById('out')
    }
    if (message instanceof AnonymousLoggedIn) {
        window.location.href = '/auth.html'
    }
    if (message instanceof LoggedIn) {
        model.user.uid = message.user.uid
        model.user.displayName = message.user.displayName
        model.user.photoURL = message.user.photoURL
        model.user.email = message.user.email

        fetch('/sentences.json')
            .then(response => response.json())
            .then(function (result) {
                signal(new DataLoaded(result))()
            })
    }
    if (message instanceof DataLoaded) {
        for (const key in message.data) {
            if (message.data.hasOwnProperty(key)) {
                const element = message.data[key]
                model.rows.push({ question: key, answer: element })
            }
        }
    }
    if (message instanceof RowEditClicked){
        console.log(`Someone clicked on the row number ${message.rowNumber}`)
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
