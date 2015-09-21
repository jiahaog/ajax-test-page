/**
 * Created by JiaHao on 19/9/15.
 */



/**
 * Delayed appearance of text
 */

setTimeout(function () {
    addTextToDom('BUBBLES HI', 'setTimeoutContent', 'interval-test');
}, WAIT_INTERVAL);

/**
 * Showing the result of the dropdown box
 */

function showDropdownResult() {
    document.querySelector('#dropdown-selected-result').innerHTML = document.querySelector('#dropdown').value;
}

// show dropdown result immediately
showDropdownResult();

// set listener
document.querySelector('#dropdown').addEventListener('change', function(){
    showDropdownResult();
});
