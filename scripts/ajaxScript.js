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
    var dropdownValue = document.querySelector('#dropdown').value;
    setSelectorInnerHtml('#dropdown-selected-result', dropdownValue);
}

// show dropdown result immediately
showDropdownResult();

// set listener
document
    .querySelector('#dropdown')
    .addEventListener('change', function () {
        showDropdownResult();
    });

/**
 * Showing the state of a checkbox
 */

function showCheckboxState () {
    var checkboxState = document.querySelector('#checkbox').checked;
    setSelectorInnerHtml('#checkbox-state', checkboxState);
}

// show state immediately
showCheckboxState();

document
    .querySelector('#checkbox')
    .addEventListener('change', function () {
        showCheckboxState();
    });