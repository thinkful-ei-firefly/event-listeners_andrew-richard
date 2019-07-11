'use strict';
function program(){

//Add an item
//on event "Add item" button pressed
$("#add-item-button").submit(e => {
    event.preventDefault();
    //push following html code
    $(`
        <li>
            <span class="shopping-item">INPUT</span>
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