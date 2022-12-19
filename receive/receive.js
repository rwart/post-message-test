var parent = null;
window.send = function() {
    if (parent) {
        var message = document.querySelector('#textOutput').value;
        parent.postMessage(message, '*');
    }
}

window.addEventListener('message', function(event) {
    console.log(event);
    parent = event.source;
    document.querySelector('#textOutput').value = event.data;
}, false);
