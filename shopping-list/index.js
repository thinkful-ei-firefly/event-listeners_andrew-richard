'use strict';
function program(){

//Add an item
//on event "Add item" button pressed
$("#js-shopping-list-form").submit(e => {
    e.preventDefault();
    let input = $('#shopping-list-entry').val();
    $('#shopping-list-entry').val('');
    //push following html code
    $(`
        <li>
            <span class="shopping-item">${input}</span>
            <div class="shopping-item-controls">
            <button class="shopping-item-toggle">
            <span class="button-label">check</span>
            </button>
            <button class="shopping-item-delete">
            <span class="button-label">delete</span>
            </button>
            </div>
          </li> `).appendTo(".shopping-list")
  });


  //Check off an item
  //on event "Check Item" pressed
  $('.shopping-list').on('click', '.shopping-item-toggle', event => {
    event.preventDefault();
    $(event.target).closest($('li')).find('.shopping-item').toggleClass('shopping-item__checked')
  });


  //Delete an item
  //on event "delete" pressed
  $('.shopping-list').on('click', '.shopping-item-delete', event => {
    event.preventDefault();
    console.log('target aquired');
    //delete targeted li
    $(event.target).closest($('li')).remove();

  });

}

program();