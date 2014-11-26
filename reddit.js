var reddit = require("./data.json")

// Write your solutions below

// console.log(reddit["data"]);

//question 1
// `forEach` -  `console.log` all titles
reddit.data.children.forEach(function(element, index) {
	
console.log("title is ", element.data.title);

})

//question 2
//`map` - Return an array of permalinks, that contain full http:// path to reddit

 var redditData = reddit.data.children;

var linkMap = redditData.map(function(element, index){
	return ("http://reddit.com" + element.data.permalink);
	
})

console.log(linkMap);

//question 3 
//`filter` - Filter the posts that contain the `selftext` key

var selfKey = redditData.filter(function(element, index){
	return element.data.selftext;
	
})
	
	console.log(selfKey);
	console.log(redditData.length);
	console.log(selfKey.length);

//question 4 
//`reduce` - Use reduce to count all the `score` values across posts

var scoreCount = redditData.reduce(function(prev, current){
	return(prev + current.data.score);
}, 0);
console.log(scoreCount);
