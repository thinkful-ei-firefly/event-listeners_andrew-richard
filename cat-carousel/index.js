$('.thumbnail').on('click', e => {
  let imgSrc = $(e.target).attr('src');
  let imgAlt = $(e.target).attr('alt');
  $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
});

$('body').on('keypress' , e => {
  console.log(e.keyCode);
  console.log(e);
  console.log(`${e.key}`);
  console.log(e.target);
  console.log(e.currentTarget);
    if( e.keyCode == 0 || e.keyCode == 32 || e.key == ' ' || e.key == 'Spacebar') {
          let imgSrc = $(e.target).find('img').attr('src');
          let imgAlt = $(e.target).find('img').attr('alt');
       $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
}});