// Scripts for firebase and firebase messaging
// importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");
//
// // Initialize the Firebase app in the service worker by passing the generated config
// const firebaseConfig = {
//     apiKey: "AIzaSyC5cWyEjgFYSQ4kn8IiIBlBShe0zEf5lSw",
//     authDomain: "push-notifications-2fd58.firebaseapp.com",
//     projectId: "push-notifications-2fd58",
//     storageBucket: "push-notifications-2fd58.appspot.com",
//     messagingSenderId: "913610996199",
//     appId: "1:913610996199:web:d6ed37d39fb84ce490e542",
//     measurementId: "G-JFLWV73NT4"
// };
//
// firebase.initializeApp(firebaseConfig);
//
// // Retrieve firebase messaging
// const messaging = firebase.messaging();
//
// messaging.onBackgroundMessage(function(payload) {
//     console.log("Received background message ", payload);
//
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//     };
//
//     self.registration.showNotification(notificationTitle, notificationOptions);
// });

self.addEventListener('push', event => {
    const json = event?.data?.json();
    console.log('push', event?.data?.json()?.notification)

    const options = {
        body: json.notification.body,
    };

    event.waitUntil(self.registration.showNotification(json.notification.title, options));
});