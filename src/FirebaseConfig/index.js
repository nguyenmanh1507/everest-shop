import firebase from 'firebase'
import 'firebase/firestore'

import config from './config'

firebase.initializeApp({
  apiKey: config.apiKey,
  authDomain: `${config.projectId}.firebaseapp.com`,
  databaseURL: `https://${config.databaseName}.firebaseio.com`,
  projectId: config.projectId,
  storageBucket: `${config.bucket}.appspot.com`,
  messagingSenderId: config.messagingSenderId
})

export const db = firebase.firestore()
