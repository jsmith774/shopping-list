/* eslint-disable no-console */
'use strict';

function main() {
  //
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    const item = $(event.currentTarget).find('#shopping-list-entry'); 
    if(item.val()) {
      addListItem(item.val());
      item.val('');
    } else {
      alert("Must supply item value to add");
    }
  });

  $('.shopping-list').on('click','.shopping-item-delete',event => {
    console.log('clicked DELETE button');
    $(event.currentTarget).closest('li').remove();
  });

  $('.shopping-list').on('click','.shopping-item-toggle',event=> {
    console.log('clicked TOGGLE button');
    //event.currentTarget.closest('.shopping-item').toggleClass('shopping-item__checked');
    $(event.currentTarget).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    //$(e.target).closest('li').find('.shopping-item')
  });

  function addListItem(listItem) {
    const listItemHtml = generateListItemHtml(listItem);
    $('.shopping-list').append(listItemHtml);
  }

  function generateListItemHtml(listItem) {
    return `<li>
      <span class="shopping-item">${listItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
  }

  

}

$(main);