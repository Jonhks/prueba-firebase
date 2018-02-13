//   // Initialize Firebase
// var botonGoogle = document.getElementById("buttonGoogle");
// botonGoogle.addEventListener("click", prueba);



  // Materialize.updateTextFields(); 
  // var provider = new firebase.auth.GoogleAuthProvider();
  // provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

  // firebase.auth().signInWithPopup(provider).then(function(result) {
  //   // This gives you a Google Access Token. You can use it to access the Google API.
  //   var token = result.credential.accessToken;
  //   // The signed-in user info.
  //   var user = result.user;
  //   // ...
  // }).catch(function(error) {
  //   // Handle Errors here.
  //   var errorCode = error.code;
  //   var errorMessage = error.message;
  //   // The email of the user's account used.
  //   var email = error.email;
  //   // The firebase.auth.AuthCredential type that was used.
  //   var credential = error.credential;
  //   // ...
  // });

  // function prueba (){
  //   // alert("Si jala esta madre");
  //   firebase.auth().signInWithPopup(provider).then(function(result) {
  //     // This gives you a Google Access Token. You can use it to access the Google API.
  //     var token = result.credential.accessToken;
  //     // The signed-in user info.
  //     var user = result.user;
  //     // ...
  //   }).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // The email of the user's account used.
  //     var email = error.email;
  //     // The firebase.auth.AuthCredential type that was used.
  //     var credential = error.credential;
  //     // ...
  //   });
  // }

  var botonGoogle = document.getElementById("buttonGoogle");
  botonGoogle.addEventListener("click", accesoCongoogle);
  var botonGoogle = document.getElementById("buttonFace");
  botonGoogle.addEventListener("click", accesoFacebook);



  function accesoCongoogle () {
    var provider = new firebase.auth.GoogleAuthProvider();
    autenticacion(provider);
  }

  function accesoFacebook (){
    var provider = new firebase.auth.FacebookAuthProvider();
    autenticacion(provider);
    
  }

 function autenticacion ( provider){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user);
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
 }