import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBI7NDf3ehVHeuB4L50a0PwriFSpdWAPkw',
  authDomain: 'everest-shop.firebaseapp.com',
  databaseURL: 'https://everest-shop.firebaseio.com',
  projectId: 'everest-shop',
  storageBucket: '',
  messagingSenderId: '675338110681'
}

firebase.initializeApp(config)

export firebase.database()
