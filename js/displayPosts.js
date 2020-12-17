// container of all posts
const posts = js.getEl('posts');

function createPost(postData, userInfo, postId) {

	// container of invidual post
	const post = js.createEl('div', 'post');
	
	// display posts in reverse chronological order
	posts.insertBefore(post, posts.firstElementChild);

	// if you want posts in chronological, display it this way:
	// posts.appendChild(post);
	
	const text = js.createEl('div', 'post-text', postData.text);
	const info = js.createEl('div', 'post-info');
	const author = js.createEl('span', 'post-info', "by " + "userInfo.displayName");
	const d = new Date(postData.date);
	const realDate = js.formatDate(d)
	// (d.getMonth()+1) + '/' + d.getDate() +'/'+ d.getFullYear();
	const date = js.createEl('span', 'post-date', " on " + realDate);

	info.appendChild(author);
	info.appendChild(date);

	post.appendChild(text);
	post.appendChild(info);
}
