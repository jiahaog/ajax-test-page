
/**
 * Ajax button Listener
 */
document.getElementById('ajax-button').addEventListener('click', function(){
    //<em>2 seconds after pressing the button selector: <strong>"#ajax-button"</strong>, 'CAKES ARE AWESOME' will appear in div selector: <strong>"#ajax-button-result"</strong> below:</em>
    setTimeout(function () {
        addTextToDom('CAKES ARE AWESOME', 'ajax-button-result', 'ajax-button-test');
    }, WAIT_INTERVAL);
});