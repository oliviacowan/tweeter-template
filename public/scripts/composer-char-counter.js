
$(document).ready(function() {
const $inputForm = $('#tweet-text');
let charactersRemaining = 140;


  $inputForm.on('keyup', function(event) {
    
    const lengthOfInput = $(this).val().length;
    valueOfInput = this.value;
    
    $counter = $('.counter');
    
    if (lengthOfInput > 140) {
      $counter.css('color', '#ff0000');
      $counter.text(charactersRemaining - lengthOfInput);
    } else {
      $counter.css('color', '#545149');
      $counter.text(charactersRemaining - lengthOfInput);
    }
  })
});

