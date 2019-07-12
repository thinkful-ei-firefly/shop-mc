'use strict';
console.log('testing');


$(document).ready (function() {
    return `
        <li>
            <span class="shopping-item">${submittedText}</span>

                <div class="shopping-item-toggle">
                    <button class="shopping-item-controls">
                        <span class='button-label'>check</span>
                    </button>
                    <button class="shopping-item-delete">
                        <span class="button-label">delete</span>
                    </button>
            </div>
        </li>
     ';
    }

function createNewDiv(newDiv) {
    $('ul').append(',newDiv);
}

function mainOne() {
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault()
        const submittedText = $('.js-shopping-list-entry').val();
        newDiv(generateNewDiv)(submittedText));
    })
}
$(mainOne());


function toggleCheck() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        let thisItem = $(this).closest('li').find('.shopping-item');
        thisItem.toggleClass('shopping-item_checked');
    })
}
$(toggleCheck());
})
