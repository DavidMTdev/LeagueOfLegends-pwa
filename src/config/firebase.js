import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: 'AIzaSyCHUvlzTvxaHfN7o25eG1STiD1sUGc8aQw',
  authDomain: 'leagueoflegends-pwa.firebaseapp.com',
  projectId: 'leagueoflegends-pwa',
  storageBucket: 'leagueoflegends-pwa.appspot.com',
  messagingSenderId: '731135273104',
  appId: '1:731135273104:web:537507edea794732abd015'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const messaging = getMessaging(app)

const publicVapidKey = process.env.REACT_FIREBASE_VAPID_KEY

getToken(messaging, {
  vapidKey: publicVapidKey
})
  .then(currentToken => {
    if (currentToken) {
      // Send the token to your server and update the UI if necessary
      console.log('current token for client: ', currentToken)
    } else {
      // Show permission request UI
      console.log(
        'No registration token available. Request permission to generate one.'
      )
    }
  })
  .catch(err => {
    console.log('An error occurred while retrieving token. ', err)
  })

// export const onMessageListener = onMessage(messaging, payload => {
//   console.log('Message received. ', payload)
//   // ...
// })
