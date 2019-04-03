import { firebase } from "@firebase/app"

import "@firebase/auth"
// import "firebase/database"
// import "firebase/firestore"
// import "firebase/messaging"
// import "firebase/functions"

var config = {
    apiKey: "AIzaSyDknHvufVwmnM38bzm6F9ONmv7Zmd_2KUk",
    authDomain: "studyator.com",
    databaseURL: "https://stadyator.firebaseio.com",
    projectId: "stadyator",
    storageBucket: "stadyator.appspot.com",
    messagingSenderId: "337740404088"
}

firebase.initializeApp(config)

var provider = new firebase.auth.GoogleAuthProvider()
provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
firebase.auth().languageCode = 'en'
provider.setCustomParameters({
    'login_hint': 'kekekman@example.com'
})

firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken
    var user = result.user

    console.log(token, user)

}).catch(function (error) {
    var errorCode = error.code
    var errorMessage = error.message
    var email = error.email
    var credential = error.credential

    console.log(errorCode, errorMessage, email, credential)
})