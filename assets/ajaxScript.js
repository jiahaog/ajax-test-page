/**
 * Created by JiaHao on 19/9/15.
 */

var WAIT_INTERVAL = 2000;

setTimeout(function () {

    var paragraph = document.createElement('div');
    paragraph.setAttribute('id', 'setTimeoutContent');
    // BUBBLES HI is not contained in the dom initially, used to test to check if the
    // dom contains the string
    var text = document.createTextNode('BUBBLES HI');
    paragraph.appendChild(text);

    document.getElementById('interval-test').appendChild(paragraph);
}, WAIT_INTERVAL);