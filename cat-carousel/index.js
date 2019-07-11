$('.thumbnail').on('click', e => {
    let imgSrc = $(e.target).attr('src');
    let imgAlt = $(e.target).attr('alt');
    $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
  });

  $('.thumbnail').on('keypress' , e => {
      if( e.keycode == 0 || e.keycode == 32 || e.key == ' ' || e.key == 'Spacebar') {
            let imgSrc = $(e.target).attr('src');
            let imgAlt = $(e.target).attr('alt');
         $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
  }});