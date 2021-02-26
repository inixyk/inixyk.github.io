importScripts("https://www.gstatic.com/firebasejs/7.15.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.15.0/firebase-messaging.js");
    // Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAEW8lD6lBN55lQofxvmkw0mrUkr5PnN6Y",
    authDomain: "labpushnotification-635f2.firebaseapp.com",
    databaseURL: "https://labpushnotification-635f2.firebaseio.com",
    projectId: "labpushnotification-635f2",
    storageBucket: "labpushnotification-635f2.appspot.com",
    messagingSenderId: "30840845333",
    appId: "1:30840845333:web:5c9ed07b3d93856f5dca1c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
 //tambahkan untuk mendapatkan token
  const messaging = firebase.messaging();
  let token;
  messaging.getToken().then((token)=>{
      if(token){
          console.log(token);
      }else{
          console.log('tidak mendapatkan token');
      }
  }).catch((err)=>{
      console.log('gagal '+err);
  })
  /*

let ver = 1;
self.addEventListener("install", (event) => {
    console.log('berhasil', event);
    //ketika sukses install sw.js
    event.waitUntil(
        //buka library caches, dan daftarkan file2 yang perlu di cache
        caches.open('aplikasiku' + ver).then((cache) => {
            console.log('mulai caching');
            return cache.addAll([
                '/index.html',
                '/serviceworker.html',
                '/responsive.html',
                '/promise.html',
                '/manipulasidom.html',
                '/144.png',
                '/152.png',
                '/256.png',
                '/512.png',
            ]);
        }).then(() => {
            self.skipWaiting();
        }));
});

//tangani request client, ketika client aksess ke file cari dulu di cache
self.addEventListener("fetch", (event) => {
    console.log('fetching', event);
    event.respondWith(
        caches.match(event.request).then((resp) => { //pencocokan dengan cache
            if (resp) { //jika ada maka
                return resp; //ambil resp
            } else {
                return fetch(event.request); //ambil dari internet
            }
        }));
});


// Get registration token. Initially this makes a network call, once retrieved
// subsequent calls to getToken will return from cache.
messaging.getToken({ vapidKey: 'BI03PtqvV_9Hps8Blr7ANjQLZ6P1UmIGwNKnWenx6i30A3ICAeGEPW1qEzs8eNJyeqzopYhj-6sr_KlpwQpAY8U' }).then((currentToken) => {
    if (currentToken) {
      alert(currentToken);
    } else {
      // Show permission request UI
      console.log('No registration token available. Request permission to generate one.');
      // ...
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // ...
  });
*/