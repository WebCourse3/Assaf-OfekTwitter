//comment
function addTweet() {

	var _author = 'Assaf';
	var _message = document.getElementById('tweetTextArea').value;

	document.getElementById('tweetTextArea').value = '';

	var tweet = {
		author:_author,
		message:_message
	};

	tweetsArray.unshift(tweet);
	addTweetElement(tweet);
}

function addTweetElement(tweet) {
	var tweetsListElement = document.getElementById('tweetsList');
	tweetsListElement.insertBefore(createTweetDivElement(tweet), tweetsListElement.firstChild);
}

function createTweetDivElement(tweet) {
	var tweetDiv = createDivElement("tweet");

	var tweetAvatar = createDivElement("tweet-avatar");
	var imgElement = createImgElement("../images/useravatar.png");
	tweetAvatar.appendChild(imgElement);

	var tweetAuthor = createDivElement("tweet-author");
	tweetAuthor.innerHTML = tweet.author + ' says:';


	var tweetMessage = createDivElement("tweet-message");
	tweetMessage.innerHTML = tweet.message;

	tweetDiv.appendChild(tweetAvatar);
	tweetDiv.appendChild(tweetAuthor);
	tweetDiv.appendChild(tweetMessage);

	return tweetDiv;
}

function loadTweets() {
	var tweetsListElement = document.getElementById('tweetsList');
	tweetsListElement.innerHTML = '';


	tweetsArray.forEach(function (currentTweet) {
		tweetsListElement.appendChild(createTweetDivElement(currentTweet));
	})

	new testInjector().inject();

}

var tweetsArray =
	[
		{author: 'Bobo', message: 'hello followers!'},
		{author: 'Elvis', message: 'this exercise is really easy!'},
		{author: 'Mimi', message: 'I want to go to sleep'}
	];

window.onload = loadTweets();