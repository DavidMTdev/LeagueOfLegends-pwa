/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js')

firebase.initializeApp({
  apiKey: 'AIzaSyCHUvlzTvxaHfN7o25eG1STiD1sUGc8aQw',
  authDomain: 'leagueoflegends-pwa.firebaseapp.com',
  projectId: 'leagueoflegends-pwa',
  storageBucket: 'leagueoflegends-pwa.appspot.com',
  messagingSenderId: '731135273104',
  appId: '1:731135273104:web:537507edea794732abd015'
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage(payload => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  )
  // Customize notification here
  const notificationTitle = 'Background Message Title'
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  }

  self.registration.showNotification(notificationTitle, notificationOptions)
})
