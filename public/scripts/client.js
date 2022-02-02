/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {
 
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
      $('.tweetcontainer').prepend(createdTweet);
      //console.log('tweet: ', tweet);
    })
    return;
  }

  const loadNewTweets = function() {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    }).then((tweets) => {
      $('.tweetcontainer').empty();
      //console.log('tweeeets', tweets);
      renderTweets(tweets);
    })
  }
  loadNewTweets();

  $("#submit-form").on('submit', function(event) {
    event.preventDefault();
   // console.log('entered')
  
   const characterLength = $('#tweet-text').val().length;
   if (!characterLength) {
     alert('empty text field');
     return;
   }
   if (characterLength > 140) {
     alert('Your tweet is longer than 140 characters');
     return;
   }

    const data = $(this).serialize();
    
    //console.log('data', data)
    $('form').trigger('reset');
    
    $.ajax({
      method: 'POST',
      url: '/tweets',
      data: data
    }).then(()=>{
      //console.log('success');
    })
  });
})


