'use strict';
// Funcion random | password
function getPassword() {

  var chars = "0123456789qwertyuiopásdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM!!#$%&/()=?"
  var passwordLength = 8;
  var password = "";

  for (var i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }


  document.getElementById("password").value = password

}