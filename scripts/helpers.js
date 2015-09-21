/**
 * Created by JiaHao on 21/9/15.
 */


// Constant to set the wait interval for ajax functions across pages
var WAIT_INTERVAL = 2000;

/**
 * Helper function to add a div with a string to a the dom at a certain location
 *
 * @param {string} text String to add
 * @param {string} textId Text selector will be wrapped with a div with this as the css ID
 * @param {string} idToAddTo CSS id to add the new content to
 */
function addTextToDom(text, textId, idToAddTo) {
    var paragraph = document.createElement('div');
    paragraph.setAttribute('id', textId);
    // BUBBLES HI is not contained in the dom initially, used to test to check if the
    // dom contains the string
    var text = document.createTextNode(text);
    paragraph.appendChild(text);

    document.getElementById(idToAddTo).appendChild(paragraph);
}

/**
 * Sets the inner HTML of a selector
 * @param {string} selector
 * @param {string} value
 */
function setSelectorInnerHtml(selector, value) {
    document.querySelector(selector).innerHTML = value;
}