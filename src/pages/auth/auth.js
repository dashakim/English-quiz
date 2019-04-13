import { firebase } from "@firebase/app"
import "@firebase/auth"
import config from '../../firebase-config.json';

firebase.initializeApp(config)
firebase.auth().languageCode = 'en'

firebase.auth().onAuthStateChanged(function (user) {
  if (!user) {
    return firebase.auth().signInWithRedirect(getProvider());
  }
  else {
    firebase.auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(function () {
        window.location.href = '/index.html'
      })
  }
})

const getProvider = () => {
  const result = new firebase.auth.GoogleAuthProvider()
  result.addScope('https://www.googleapis.com/auth/contacts.readonly')

  return result
}