/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];
 
 
  const createTweetElement = function (data) {

    const $tweet = $(`
        <div class="hardcodedtweet">
            <header class="tweeterperson">
              <div class="namepic">
                <img class="tinypic" src=${data.user.avatars}/>
                <p>${data.user.name}</p>
              </div>
              <p>${data.user.handle}</p>
            </header>
            <div class="message">
              <p>${data.content.text}</p>
            </div>
            <footer class="tweetfooter">
              <div class="timeago">
                <p>${timeago.format(data.created_at)}</p>
              </div>
              <div class="footericons">
                <div class="icon1 icon">
                  <p><i class="fa-solid fa-flag"></i></p>
                </div>
                <div class="icon2 icon">
                  <p><i class="fa-solid fa-retweet"></i></p>
                </div>
                <div class="icon3 icon">
                  <p><i class="fa-solid fa-heart"></i></p>
                </div>
              </div>
            </footer>
            </div>
          `);
    return $tweet;
  }

  const renderTweets = function (tweets) {

    tweets.forEach(tweet => {
      const createdTweet = createTweetElement(tweet);
      $('.tweetcontainer').append(createdTweet);
      console.log('tweet: ', tweet);
    })
    return;
    // for (const tweet of tweets) {
    //   const createdTweet = createTweetElement(tweet);
    // $('.tweetcontainer').append(createdTweet);
    //}
    //return;

    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  }
  renderTweets(data);
})


//const $tweet = createTweetElement(tweetData);
//console.log($tweet);