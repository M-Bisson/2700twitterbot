// Our Twitter library
var Twit = require('twit');

// We need to include our configuration file
var T = new Twit(require('./config.js'));

// This is the URL of a search for the latest tweets on the '#cats' hashtag.
var catsSearch = {q: "#cats", count: 10, result_type: "recent"}; 

//This is the URl of a search for the latest tweets on the "#kitten' hashtag.
var kittenSearch = {q: "#kitten", count: 10, result_type: "recent"};

// This is the URL of a search for the latest tweets on the '#dog' hashtag.
var dogSearch = {q: "#dog", count: 10, result_type: "recent"}; 

// This is the URL of a search for the latest tweets on the '#puppy' hashtag.
var puppySearch = {q: "#puppy", count: 10, result_type: "recent"}; 

// This function finds the latest tweet with the #cats hashtag, and retweets it.
function retweetCat() {
	T.get('search/tweets', catsSearch, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
}

// This function finds the latest tweet with the #kitten hashtag, and retweets it.
function retweetKitten() {
	T.get('search/tweets', kittenSearch, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
}

// This function finds the latest tweet with the #dog hashtag, and retweets it.
function retweetDog() {
	T.get('search/tweets', dogSearch, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
}

function retweetPuppy() {
	T.get('search/tweets', puppySearch, function (error, data) {
	  // log out any errors and responses
	  console.log(error, data);
	  // If our search request to the server had no errors...
	  if (!error) {
	  	// ...then we grab the ID of the tweet we want to retweet...
		var retweetId = data.statuses[0].id_str;
		// ...and then we tell Twitter we want to retweet it!
		T.post('statuses/retweet/' + retweetId, { }, function (error, response) {
			if (response) {
				console.log('Success! Check your bot, it should have retweeted something.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
		})
	  }
	  // However, if our original search request had an error, we want to print it out here.
	  else {
	  	console.log('There was an error with your hashtag search:', error);
	  }
	});
}

// DEBUG
var debug = false;		// if we don't want it to post to Twitter! Useful for debugging!

// Wordnik stuff
var WordnikAPIKey = 'vobcpy2qr2c3cm2jmw4et6zuda023uebrthhnl6efxusr8f9t';
var request = require('request');
var inflection = require('inflection');
var pluralize = inflection.pluralize;
var capitalize = inflection.capitalize;
var singularize = inflection.singularize;
var pre;	// store prebuilt strings here.

// Blacklist
var wordfilter = require('wordfilter');

// Helper function for arrays, picks a random thing
Array.prototype.pick = function() {
	return this[Math.floor(Math.random()*this.length)];
}
Array.prototype.remove = function() {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

// Wordnik stuff
function nounUrl(minCorpusCount, limit) {
	return "http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=false&includePartOfSpeech=noun&minCorpusCount=" + minCorpusCount + "&maxCorpusCount=-1&minDictionaryCount=1&maxDictionaryCount=-1&minLength=5&maxLength=-1&limit=" + limit + "&api_key=" + WordnikAPIKey;
}

// Post a status update
function tweet() {

	var tweetText = pre.pick();

	if(debug) 
		console.log('Debug mode: ', tweetText);
	else
		T.post('statuses/update', {status: tweetText }, function (err, reply) {
			if (err != null){
				console.log('Error: ', err);
			}
			else {
				console.log('Tweeted: ', tweetText);
			}
		});
}

function followAMentioner() {
	T.get('statuses/mentions_timeline', { count:50, include_rts:1 },  function (err, reply) {
		  if (err !== null) {
			console.log('Error: ', err);
		  }
		  else {
		  	var sn = reply.pick().user.screen_name;
			if (debug) 
				console.log(sn);
			else {
				//Now follow that user
				T.post('friendships/create', {screen_name: sn }, function (err, reply) {
					if (err !== null) {
						console.log('Error: ', err);
					}
					else {
						console.log('Followed: ' + sn);
					}
				});
			}
		}
	});
}

function respondToMention() {
	T.get('statuses/mentions_timeline', { count:100, include_rts:0 },  function (err, reply) {
		  if (err !== null) {
			console.log('Error: ', err);
		  }
		  else {
		  	mention = reply.pick();
		  	mentionId = mention.id_str;
		  	mentioner = '@' + mention.user.screen_name;
		  	
		  	var tweet = mentioner + " " + pre.pick();
			if (debug) 
				console.log(tweet);
			else
				T.post('statuses/update', {status: tweet, in_reply_to_status_id: mentionId }, function(err, reply) {
					if (err !== null) {
						console.log('Error: ', err);
					}
					else {
						console.log('Tweeted: ', tweet);
					}
				});
		  }
	});
}

function runBot() {
	console.log(" "); // just for legible logs
	var d=new Date();
	var ds = d.toLocaleDateString() + " " + d.toLocaleTimeString();
	console.log(ds);  // date/time of the request	

	// Get 200 nouns with minimum corpus count of 5,000 (lower numbers = more common words) 
	request(nounUrl(5000,200), function(err, response, data) {
		if (err != null) return;		// bail if no data
		nouns = eval(data);

		// Filter out the bad nouns via the wordfilter
		
		for (var i = 0; i < nouns.length; i++) {
			if (wordfilter.blacklisted(nouns[i].word))
			{
				console.log("Blacklisted: " + nouns[i].word);
				nouns.remove(nouns[i]);
				i--;
			}				
		}

		pre = [
			"Do cats like to sit on " + pluralize(nouns.pick().word) + "?",
            "Do you think that Mr/Mrs. " + capitalize(singularize(nouns.pick().word)) + " is a good name for a dog?", 
            "My turtle ate my " + singularize(nouns.pick().word) + "!",
            "Today I saw a kitten on a " + singularize(nouns.pick().word) + ". Not sure what that was about.",
            "Seriously, " + capitalize(singularize(nouns.pick().word)) + " is the only acceptable name for a pet rock.",
            "I can't believe I forgot to bring my " + nouns.pick().word + " with me. It's my dog's favorite toy.",
            "Sooo much homework in this " + capitalize(nouns.pick().word) + " class and my puppy ate it all.",
            "Yet another distruction! My cat got into my " + nouns.pick().word + " today. Ripped it to shreds.",
            "Seriously I have had enough of Intro to " + capitalize(nouns.pick().word) + ". Can't we just look up pictures of cute baby animals?",
            "Who's coming to Club " + capitalize(singularize(nouns.pick().word)) + " tonight? I heard they will have puppies and " + pluralize(nouns.pick().word) + ".",
            "Missed class again. Had to find a " + nouns.pick().word + " to appease my unreasonable parrot.", "If I throw a " + nouns.pick().word + " do you think my dog will chase after it?", "Do you think that cats dream about " + nouns.pick().word + " while they sleep all day?", "Uhhh, I don't think cats are supposed to eat " + nouns.pick().word + ".", "The world is ending! My ferret now has a " + nouns.pick().word + " and that means the end for us all.", "How many " + pluralize(nouns.pick().word) + " is too many for one pet fish?", "Just met my friend's new puppy, " + capitalize(nouns.pick().word) + ". So cute!", "My friend found a cat inside of a " + nouns.pick().word + " today. Don't think that was supposed to be there.", "Just bought a " + nouns.pick().word + " for my bird. I hope he likes it.", "Should I be concerned if my cat keeps bringing me " + nouns.pick().word + "?", pluralize(nouns.pick().word) + " are really the best toys for puppies.", "My dogs are always fighting over who gets to play with the " + nouns.pick().word, "I just discovered a new species of bat. They only eat " + nouns.pick().word
			// etc.			
		];
		
		///----- NOW DO THE BOT STUFF
		var rand = Math.random();

 		if(rand < 1.0 && rand > 0.80) {      
			console.log("-------Tweet something");
			tweet();
			
		} else if (rand <= 0.80 && rand > 0.60) {
			console.log("-------Retweet something tagged with #dog");
			retweetDog();
			
		} else if (rand <= 0.60 && rand > 0.40) {
			console.log("-------Retweet something tagged with #puppy");
			retweetPuppy();
		} else if (rand <= 0.40 && rand > 0.20) {
            console.log("-------Retweet something tagged with #cats");
            retweetCat();
        } else {
            console.log("-------Retweet something tagged with #kitten");
            retweetKitten();
        }
	});
}

// Run the bot
runBot();

// And recycle every 5 minutes
setInterval(runBot, 1000 * 60 * 5);			
