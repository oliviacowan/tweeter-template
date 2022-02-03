/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = function (data) {

    const $tweet = $(`
        <div class="hardcodedtweet">
            <header class="tweeterperson">
              <div class="namepic">
                <img class="tinypic" src=${escape(data.user.avatars)}/>
                <p>${escape(data.user.name)}</p>
              </div>
              <p>${escape(data.user.handle)}</p>
            </header>
            <div class="message">
              <p>${escape(data.content.text)}</p>
            </div>
            <footer class="tweetfooter">
              <div class="timeago">
                <p>${escape(timeago.format(data.created_at))}</p>
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

  const loadNewTweets = function () {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    }).then((tweets) => {
      $('.tweetcontainer').empty();
      //console.log('tweeeets', tweets);
      renderTweets(tweets);
    })
  }


  $("#submit-form").on('submit', function (event) {
    event.preventDefault();
    const characterLength = $('#tweet-text').val().length;
    
    const displayError = function(error) {
      // console.log($('.error').is(':empty'))

      const markup = `
     <p><i class="fas fa-exclamation-triangle"></i></p>
     <p id="error-message">${escape(error)}</p>
     <p><i class="fas fa-exclamation-triangle"></i></p>
     `
     
     if (!$('.error').is(':empty')) {
       $('.error').html(markup);
       return;
      }
      $(markup).appendTo($('.error')).hide().slideDown('slow');
    }

    if (!characterLength) {
      
      const emptyError = 'Please enter a tweet to continue';
      displayError(emptyError);
      
      return;
    } else  if (characterLength > 140) {
      const OverLimitError = 'You have exceeded the 140 character limit';
      displayError(OverLimitError);
      
      return;
    } else {
      const data = $(this).serialize();
      $('form').trigger('reset');
      $('.counter').html('140');

      $('.error').slideUp(500, () => {
        $('.error').empty().show();
      })

      $.ajax({
        method: 'POST',
        url: '/tweets',
        data: data
      }).then(() => {
        loadNewTweets();
      })
    }
  });
})


