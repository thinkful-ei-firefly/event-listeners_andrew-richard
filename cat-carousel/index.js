$('.thumbnail').on('click', e => {
    let imgSrc = $(e.target).attr('src');
    let imgAlt = $(e.target).attr('alt');
    $('.hero img').attr({'src': imgSrc, 'alt': imgAlt});
  });