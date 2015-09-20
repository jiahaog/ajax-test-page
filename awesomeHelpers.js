/**
 * Awesome helpers to manipulate the page in plain javascript
 *
 * Created by JiaHao on 20/9/15.
 */

/**
 * Method that can be used to change dropdown index and also triggers an event to signal
 * the change
 *
 * @param {string} selector
 * @param {int} index
 */
function changeDropdownIndex(selector, index) {
    // https://jesse.sh/select-change-events-javascript/
    var element = document.querySelector(selector);
    element.selectedIndex = index;

    // event is needed because listeners to the change do not react to
    // programmatic changes
    // http://stackoverflow.com/a/7055771
    var event = document.createEvent('Event');
    event.initEvent('change', true, false);
    element.dispatchEvent(event);
}
