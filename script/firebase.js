  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCoQRDRLFlzoT22RqSmxTXf0-RqdUm_2Aw",
    authDomain: "beerlivery-c4abe.firebaseapp.com",
    databaseURL: "https://beerlivery-c4abe.firebaseio.com",
    projectId: "beerlivery-c4abe",
    storageBucket: "beerlivery-c4abe.appspot.com",
    messagingSenderId: "572063144744"
  };
  firebase.initializeApp(config);
  firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log(errorCode);
  console.log(errorMessage);
  // ...
});
// Points to the root reference
var storageRef = firebase.storage().ref();
var storage = firebase.storage();

// Points to 'images'
var imagesRef = storageRef.child('images');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
var fileName = 'corona.jpg';
var coronaRef = imagesRef.child(fileName);

// File path is 'images/space.jpg'
var path = coronaRef.fullPath

// File name is 'space.jpg'
var name = coronaRef.name

// Points to 'images'
var imagesRef = coronaRef.parent;
