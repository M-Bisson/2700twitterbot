// Our Twitter library
var Twit = require('twit');

// We need to include our configuration file
var T = new Twit(require('./config.js'));

// This is the URL of a search for the latest tweets on the '#cats' hashtag.
var catsSearch = {q: "#cats", count: 3, result_type: "recent"}; 

//This is the URl of a search for the latest tweets on the "#kitten' hashtag.
var kittenSearch = {q: "#kitten", count: 3, result_type: "recent"};

// This is the URL of a search for the latest tweets on the '#dog' hashtag.
var dogSearch = {q: "#dog", count: 3, result_type: "recent"}; 

// This is the URL of a search for the latest tweets on the '#puppy' hashtag.
var puppySearch = {q: "#puppy", count: 3, result_type: "recent"};

// This is the URL of a search for the latest tweets on the '#puppy' hashtag.
var parrotSearch = {q: "#parrot", count: 3, result_type: "recent"};

// This is the URL of a search for the latest tweets on the '#puppy' hashtag.
var turtleSearch = {q: "#turtle", count: 3, result_type: "recent"};

// This is the URL of a search for the latest tweets on the '#puppy' hashtag.
var ferretSearch = {q: "#ferret", count: 3, result_type: "recent"};

// This is the URL of a search for the latest tweets on the '#puppy' hashtag.
var birdSearch = {q: "#bird", count: 3, result_type: "recent"};

// This is the URL of a search for the latest tweets on the '#puppy' hashtag.
var hamsterSearch = {q: "#hamster", count: 3, result_type: "recent"};
 
// This is the URL of a search for the latest tweets on the '#puppy' hashtag.
var snakeSearch = {q: "#snake", count: 3, result_type: "recent"};

// This function finds the latest tweet with the #cats hashtag, and retweets it.
function retweetCats() {
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

// This function finds the latest tweet with the #puppy hashtag, and retweets it.
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
// This function finds the latest tweet with the #parrot hashtag, and retweets it.
function retweetParrot() {
	T.get('search/tweets', parrotSearch, function (error, data) {
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
// This function finds the latest tweet with the #turtle hashtag, and retweets it.
function retweetTurtle() {
	T.get('search/tweets', turtleSearch, function (error, data) {
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
// This function finds the latest tweet with the #ferret hashtag, and retweets it.
function retweetFerret() {
	T.get('search/tweets', ferretSearch, function (error, data) {
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
// This function finds the latest tweet with the #bird hashtag, and retweets it.
function retweetBird() {
	T.get('search/tweets', birdSearch, function (error, data) {
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
// This function finds the latest tweet with the #hamster hashtag, and retweets it.
function retweetHamster() {
	T.get('search/tweets', hamsterSearch, function (error, data) {
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
// This function finds the latest tweet with the #snake hashtag, and retweets it.
function retweetSnake() {
	T.get('search/tweets', snakeSearch, function (error, data) {
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

// Post a tweet about animals
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


var request = require("request");
var API="ae92b91f8c12b23e540ed36c6a4dacc5902f0cc47e42482d6ef0b624b5f01ab0";
var post;

// Tweet a picture of a cat
function runPicBotCat() {
    request("https://api.unsplash.com/photos/random?query=cat&client_id=" + API, function(error, response,data) {
        var json = JSON.parse(data);
        // var text = pre.pick();
        post = "I found some cat photos! " + json.links.html;
        T.post('statuses/update', {status:post}, function(err, data, response) {
			if (response) {
				console.log('Success! Check your bot, it should have twittered photos.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
        })
    })
}

// Tweet a picture of a dog
function runPicBotDog() {
    request("https://api.unsplash.com/photos/random?query=dog&client_id=" + API, function(error, response,data) {
        var json = JSON.parse(data);
        // var text = pre.pick();
        post = "Look at this dog! " + json.links.html;
        T.post('statuses/update', {status:post}, function(err, data, response) {
			if (response) {
				console.log('Success! Check your bot, it should have twittered photos.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
        })
    })
}

// tweet a picture of a turtle
function runPicBotTurtle() {
    request("https://api.unsplash.com/photos/random?query=turtle&client_id=" + API, function(error, response,data) {
        var json = JSON.parse(data);
        // var text = pre.pick();
        post = "I love turtles! " + json.links.html;
        T.post('statuses/update', {status:post}, function(err, data, response) {
			if (response) {
				console.log('Success! Check your bot, it should have twittered photos.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
        })
    })
}

// Tweet a picture of a bird
function runPicBotBird() {
    request("https://api.unsplash.com/photos/random?query=bird&client_id=" + API, function(error, response,data) {
        var json = JSON.parse(data);
        // var text = pre.pick();
        post = "Birds are so pretty! " + json.links.html;
        T.post('statuses/update', {status:post}, function(err, data, response) {
			if (response) {
				console.log('Success! Check your bot, it should have twittered photos.')
			}
			// If there was an error with our Twitter call, we print it out here.
			if (error) {
				console.log('There was an error with Twitter:', error);
			}
        })
    })
}

//Post a tweet with a video link
function runVideoBot() {

 var rand = Math.random();
 
        if(rand < 1.0 && rand > 0.75) {      
            post = "enjoy some music while you look at cute animal pictures https://www.youtube.com/watch?v=yaKeFoNOneg" 
        } else if (rand <= 0.75 && rand > 0.5) {
            post = "take a look at this cute fox https://www.youtube.com/watch?v=_AtP7au_Q9w"
        } else if (rand <= 0.5 && rand > 0.25) {
            post = "squirrels are soooooo cute!  https://www.youtube.com/watch?v=qFzfY74lB1M"
        } else{
            post = "lovely otter enjoying his life! https://www.youtube.com/watch?v=4eFNPKXCtZ4"
        }
        T.post('statuses/update', {status:post}, function(error, data, response) {
            if (response) {
                console.log('Success! Check your bot, it should have twittered videos.')
            }
            // If there was an error with our Twitter call, we print it out here.
            if (error) {
                console.log('There was an error with Twitter:', error);
            }
        })
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
            "Missed class again. Had to find a " + nouns.pick().word + " to appease my unreasonable parrot.", "If I throw a " + nouns.pick().word + " do you think my dog will chase after it?", "Do you think that cats dream about " + nouns.pick().word + " while they sleep all day?", "Uhhh, I don't think cats are supposed to eat " + nouns.pick().word + ".", "The world is ending! My ferret now has a " + nouns.pick().word + " and that means the end for us all.", "How many " + pluralize(nouns.pick().word) + " is too many for one pet fish?", "Just met my friend's new puppy, " + capitalize(nouns.pick().word) + ". So cute!", "My friend found a cat inside of a " + nouns.pick().word + " today. Don't think that was supposed to be there.", "Just bought a " + nouns.pick().word + " for my bird. I hope he likes it.", "Should I be concerned if my cat keeps bringing me " + nouns.pick().word + "?", capitalize(pluralize(nouns.pick().word)) + " are really the best toys for puppies.", "My dogs are always fighting over who gets to play with the " + nouns.pick().word, "I just discovered a new species of bat. They only eat " + nouns.pick().word
			// etc.			
		];
		
		///----- NOW DO THE BOT STUFF
		var rand = Math.random();

 		if(rand < 1.0 && rand > 0.90) {      
			console.log("-------Tweet something");
			tweet();
			
		} else if (rand <= 0.90 && rand > 0.81) {
			console.log("-------Retweet something tagged with #dog");
			retweetDog();
			
		} else if (rand <= 0.81 && rand > 0.72) {
			console.log("-------Retweet something tagged with #puppy");
			retweetPuppy();
		} else if (rand <= 0.72 && rand > 0.65) {
            console.log("-------Retweet something tagged with #cats");
            retweetCats();
        } else if (rand <= 0.65 && rand > 0.60){
            console.log("-------Retweet something tagged with #kitten");
            retweetKitten();
        } else if (rand <= 0.60 && rand > 0.54) {
            console.log("-------Post a tweet with a video link");
            runVideoBot();
        } else if (rand <= 0.54 && rand > 0.45){
            console.log("-------Retweet something tagged with #parrot");
            retweetParrot();
        } else if (rand <= 0.45 && rand > 0.40){
            console.log("-------Retweet something tagged with #turtle");
            retweetTurtle();
        } else if (rand <= 0.40 && rand > 0.35){
            console.log("-------Retweet something tagged with #ferret");
            retweetFerret();
        } else if (rand <= 0.35 && rand > 0.30){
            console.log("-------Retweet something tagged with #bird");
            retweetBird();
        } else if (rand <= 0.30 && rand > 0.25){
            console.log("-------Retweet something tagged with #hamster");
            retweetHamster();
        } else if (rand <= 0.25 && rand > 0.20) {
            console.log("-------Retweet something tagged with #snake");
            retweetSnake();
        } else if (rand <= 0.20 && rand > 0.15) {
            console.log("-------Tweet a cat picture");
            runPicBotCat();
        } else if (rand <= 0.15 && rand > 0.10) {
            console.log("-------Tweet a dog picture");
            runPicBotDog();
        } else if (rand <= 0.10 && rand > 0.05) {
            console.log("-------Tweet a bird picture");
            runPicBotBird();
        } else {
            console.log("-------Tweet a turtle picture");
            runPicBotTurtle();
        }
        
        runVideoBot();
	});
}

// Run the bot
runBot();

// And recycle every 5 minutes
setInterval(runBot, 1000 * 60 * 5);			
