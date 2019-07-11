'use strict';
function program(){

//Add an item
//on event "Add item" button pressed
$("#js-shopping-list-form").submit(e => {
    e.preventDefault();
    let input = $('#shopping-list-entry').val();
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
  $('.shopping-list').on('click', event => {
    event.preventDefault();
    $(event.target).closest($('li')).find('.shopping-item').toggleClass('shopping-item__checked')
  });
  //event.preventDefault();
  //if target is .shopping-item
  //Change targeted .shopping-item to .shopping-item__checked
  //else
  //change targeted .shopping-item__checked to .shopping-item



  //Delete an item
  //on event "delete" pressed
  //event.preventDefault();
  //delete targeted li

}

program();