
$(document).ready(function () {
  const $inputForm = $('#tweet-text');
  let charactersRemaining = 140;


  $inputForm.on('keyup', function () {

    const lengthOfInput = $(this).val().length;
    
    const siblings = $(this).siblings();
    const children = $(siblings[1]).children()
    const counter = $(children[1]);

   // valueOfInput = this.value;

    

    if (lengthOfInput > 140) {
      counter.css('color', '#ff0000');
      counter.text(charactersRemaining - lengthOfInput);
    } else {
      counter.css('color', '#545149');
      counter.text(charactersRemaining - lengthOfInput);
    }
    // current = $('#current'),
    //   thcounter = $('#thecounter');

    // current.text(lengthOfInput);

    // if (lengthOfInput >= 141) {
    //   current.css('color', '#8f0001');
    //   current.text(140 - lengthOfInput)
    // }
  })
});

