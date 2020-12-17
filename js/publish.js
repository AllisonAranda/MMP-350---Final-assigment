const publishButton = document.getElementById('submit-post');
const postInput = document.getElementById('post-body');

// if the person presses enter, publish the post
postInput.addEventListener('keyup', function(event) {
	if (event.which == 13) {
		publishPost();
	}
});
// if the person clicks the button, publish the post
publishButton.addEventListener('click', publishPost);


function publishPost(){
   
    
	const post = {}; // we will store our post information here
	post.text = postInput.value;
	console.log(post.text);
	post.date = Date.now();
	console.log(post.date);
	post.uid = "username";
	console.log(post.uid);

	postInput.value=""; // reset the post input so it doesn't post the same post twice.

	// create the post
	createPost(post);
}



function createDiv(_class, text){
	const div = document.createElement('div');
	div.classList.add(_class);
	div.textContent = text;
	return div;
}

function createPost(data){
	const post = createDiv('post');

	const text = createDiv('post-text', data.text);
	const info = createDiv('post-info');
	const author = createDiv('post-author', "by " + data.uid)
	const d = new Date(data.date);
	const date = createDiv('post-date', "on " + (d.getMonth()+1) + '/' + d.getDate() +'/'+ d.getFullYear());

	post.appendChild(text);
	post.appendChild(info);
	info.appendChild(author);
	info.appendChild(date);

	// we'll put up the posts in reverse chronological order
	posts.insertBefore(post,posts.firstElementChild);
}