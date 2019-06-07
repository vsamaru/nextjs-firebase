import firebase from "firebase/app"
import "firebase/firestore"

const config = {
    apiKey: process.env.firebase.apiKey,
    authDomain: `${process.env.firebase.projectId}.firebaseapp.com`,
    databaseURL: `https://${process.env.firebase.projectId}.firebaseio.com`,
    projectId: process.env.firebase.projectId,
    storageBucket: `${process.env.firebase.projectId}.appspot.com`,
    messagingSenderId: process.env.firebase.senderId,
    appId: process.env.firebase.appId,
}

const app = firebase.apps.length
    ? firebase.app()
    : firebase.initializeApp(config)

const firestore = firebase.firestore()

export {firebase, app, firestore}
