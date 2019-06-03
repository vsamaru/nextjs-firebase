import * as Firebase from "firebase/app"
import "firebase/firestore"

const config = {
    apiKey: process.env.firebase.apiKey,
    authDomain: process.env.firebase.authDomain,
    databaseURL: process.env.firebase.databaseURL,
    projectId: process.env.firebase.projectId,
    storageBucket: process.env.firebase.storageBucket,
    messagingSenderId: process.env.firebase.messagingSenderId,
    appId: process.env.firebase.appId,
}

const firebase = Firebase.apps.length
    ? Firebase.app()
    : Firebase.initializeApp(config)

const firestore = Firebase.firestore()

module.exports = {
    firebase,
    firestore,
}
