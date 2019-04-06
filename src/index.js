import './css/style.css'
import { generateQuiz } from './quiz'
import { getElementById, renderTo } from './lib/dom'
import app from './components/app'
import AnswerClick from './actions/answerClick'
import NextClick from './actions/nextClick'
import Started from './actions/started'
import DataLoaded from './actions/dataLoaded'
import LoggedIn from './actions/loggedIn'
import AnonymousLoggedIn from './actions/anonymousLoggedIn'

import { firebase } from "@firebase/app"
import "@firebase/auth"
import config from './firebase-config.json';

firebase.initializeApp(config)
firebase.auth().languageCode = 'en'

let state = {
    loading: true,
    quiz: [],
    round: 0,
    hasAnswered: false,
    currentCorrectAnswer: ``,
    currentAnswer: ``,
    placeholder: {}
}

const update = (signal, model, message) => {
    if (message instanceof Started) {
        model.placeholder = getElementById('out')
        fetch('/sentences.json')
            .then(response => response.json())
            .then(function (result) {
                signal(new DataLoaded(result))()
            })
    }
    if (message instanceof AnonymousLoggedIn) {
        window.location.href = '/auth.html'
    }
    if (message instanceof LoggedIn) {
        model.displayName = message.user.displayName
    }
    if (message instanceof DataLoaded) {
        model.quiz = generateQuiz(message.data, 100, 4)
        model.loading = false
    }
    if (message instanceof AnswerClick) {
        model.hasAnswered = true
        model.currentCorrectAnswer = message.correctAnswer
        model.currentAnswer = message.answer
    }
    if (message instanceof NextClick) {
        model.hasAnswered = false
        model.round += 1
    }

    console.log(`Handled: `, message);
    console.log(model);

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
