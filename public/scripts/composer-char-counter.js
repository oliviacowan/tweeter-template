
$(document).ready(function() {
  const $inputForm = $('#tweet-input');
  let charactersRemaining = 140;


  $inputForm.on('keyup', function() {

    const lengthOfInput = $(this).val().length;
    const siblings = $(this).siblings();
    const children = $(siblings[1]).children();
    const counter = $(children[1]);

    if (lengthOfInput > 140) {
      counter.css('color', '#ff0000');
      counter.text(charactersRemaining - lengthOfInput);
    } else {
      counter.css('color', '#545149');
      counter.text(charactersRemaining - lengthOfInput);
    }
  });
});
