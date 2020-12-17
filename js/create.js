const signUpUserName = js.getEl("sign-up-username");
const signUpEmail = js.getEl("sign-up-email");
const signUpPassword = js.getEl("sign-up-password");
const signUpButton = js.getEl("sign-up-button");
const signUpMessage = js.getEl("sign-up-message");

 signUpButton.onclick = function(){
//username, email, password
fb.create(signUpUserName.value,
signUpEmail.value,
signUpPassword.value);

};

function onError(errorMessage){
signUpMessage.textContent = errorMessage;

}

