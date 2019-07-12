'use strict';
function submitHandle(){
  $('#number-chooser').submit(event => {
    event.preventDefault();

    let num = parseInt($('#number-choice').val());
    let fizzbuzzResults = [];

    for (let i=1; i<num; i++) {
      fizzbuzzResults.push(fizzbuzz(i));
    }

    let classResults = getClass(fizzbuzzResults);

    let results = htmlResults(fizzbuzzResults, classResults);

    $('.js-results').html(results);
  console.log(results);
  });


  function fizzbuzz(num) {
    if (num % 15 === 0 ) return 'fizzbuzz';
    if (num % 5 === 0 ) return 'buzz';
    if (num % 3 === 0 ) return 'fizz';
    return num;
  }

  function getClass(fizzbuzzResults) {
    let classResults = [];
    for (let i = 0; i<fizzbuzzResults.length; i++) {
      if (typeof fizzbuzzResults[i] === 'string') {
        classResults.push(fizzbuzzResults[i]);
      } else { classResults.push('');
      }
    }
    return classResults;
  }

  function htmlResults(fizzbuzzResults, classResults) {
    let htmlResults = [];
    for (let i = 0; i < fizzbuzzResults.length; i++) {
      htmlResults.push(`
        <div class="fizz-buzz-item ${classResults[i]}">
        <span>${fizzbuzzResults[i]}</span>
        </div>`);
    }
    return htmlResults;
  }
}

submitHandle();