// get user profile id
const profileUID = location.search.split('=')[1];
fb.getUserProfile(profileUID);

const profileName = js.getEl("profile-display-name");
const profileYears = js.getEl("profile-display-years");
const profileBio = js.getEl("profile-bio");
const businessSector = js.getEl("business-sector");
const location = js.getEl("location");
const profileButton = js.getEl("update-profile");

function displayProfile(userName, userInfo) {

	// display the user profile name
	profileName.value = userName;

	// add other other fields

	if (userInfo.bio) {
		profileBio.value = userInfo.bio;
	}
if (userInfo.imageUrl){
    profileImage.src=userInfo.imageURL;
}
}

profileButton.onclick=function() {
	// helper: user id, field name 
	fb.updateProfile(profileUID, 'displayName', profileName.value);
	fb.updateProfile(profileUID, 'bio', profileBio.value);
}

const profileImage = js.getEl("profile-image");
const profileImageInput = js.getEl("profile-image-file");
const profileImageButton = js.getEl("submit-image");



// upload a profile image
profileImageButton.onclick = function() {

	const file = profileImageInput.files[0];

	if (file) {
		fb.uploadImage(file, profileUID, 'profile-image')
			.then(addProfileImage);
	}
};

function addProfileImage(imageURL) {
	profileImage.src = imageURL;
	fb.updateProfile(profileUID, 'imageURL', imageURL);
}