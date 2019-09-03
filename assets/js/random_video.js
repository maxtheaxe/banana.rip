// thanks -> https://stackoverflow.com/questions/14004318/show-random-image-from-array-in-javascript
// I know it would make way, way more sense to query the directory for a list of names
// for a lot of reasons, but afaik I can't use php if I'm hosting on github pages
// to be fair though, I'm lazy, so I didn't look it up (or any potential better ideas)

var smashVids = ["Banana Smashing ^_^", "Banana Smashing",
"Crazy Monkey's banana split smash", "Freezing & smashing a banana.",
"How To Open a Locked Door With a Banana", "How to smash an egg with a banana",
"I fail at smashing a banana", "Most Bananas Snapped in 1 Minute - Guinness World Records",
"My upload schedule vs. Exams (smashing banana with a hammer)", "Nathan smashing a banana pt 3",
"Okay It's now out Its lit. SMASHING BANANA.(SMASHING PART2)", "Slomo banana smash",
"Smashing A Banana For No Reason", "Smashing a banana rip btw asmr btw",
"Smashing A BANANA with A HAMMEER", "Smashing a Banana with the Peel still on ASMR!!!",
"Smashing a Banana", "smashing a bitten banana 15 times", "smashing a frozen banana",
"smashing a mildly bruised banana", "Smashing an apple with a frozen banana",
"Smashing banana in our faces😂😂😂😂😂😂", "Smashing Banana Into My Face",
"SMASHING BANANA!!!!!!!!!!! 5 subscriber special 😎😜😀🐱🐕🐄🐏🐴🐆🐖🐃🐐🐂",
"Smashing banana", "Smashing banana_Aplastando banana_Puré de banana",
"Smashing Bananas with Mallet", "SMASHING BANANAS 🍌", "Smashing bananas!",
"Smashing bananas", "SMASHING DA BANANA!"]
// var smashVids = ["1", "2"]

function getRandomVideo(vidAr, path) {
	path = path || 'assets/videos/'; // default path here
	var num = Math.floor( Math.random() * vidAr.length );
	var vid = vidAr[ num ] + ".mp4" + "\"";
	var warn = "Your browser does not support the video tag :("
	var start = "<video controls autoplay>"
	var end = "</video>"
	var vidStr = start + '<source src="' + path + vid + ' type="video/mp4">' + warn + end;
	// document.write(vidStr); document.close();
	$('#smash').html(vidStr);
	// alert(vidStr);
}

$(document).ready(function(){
	getRandomVideo(smashVids, "");
	$("button").click(function(){
		getRandomVideo(smashVids, "");
	});
});