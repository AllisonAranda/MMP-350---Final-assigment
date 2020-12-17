/*
	const variable can't change
	document.getElementById gets a refence to the element in html
*/

const loginEmail = document.getElementById("login-email");
const loginPassword = js.getEl("login-password");
const loginButton = js.getEl("login-button");
const loginMessage = js.getEl("login-message");
const userName = js.getEl("user-name");
const logoutButton = js.getEl("logout-button");
const profileLink = js.getEl("edit-profile-link");


/*
	event listener 
	listening user input, mouse clicks or keyboard presses
	onclick captures a click event
*/

loginButton.onclick = function(){
    fb.login(loginEmail.value, loginPassword.value);

};

logoutButton.onclick = function(){
    fb.logout();
    console.log("logging out");
};

function onError(errorMessage){
    logingMessage.textContent = errorMessage;
}
function userLoggedIn(uid, displayName){
    userName.textContent = "W E L C O M E" +":"+ "" + displayName;
    // add the link to the user profile
	   profileLink.href = "profile.html?uid=" + uid;

	// add the auth body
	document.body.classList.add('auth');
}

function noUser(){
    // remove the auth body
    document.body.classList.remove('auth');
}