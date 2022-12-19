var parent = null;
window.send = function() {
    if (parent) {
        var message = document.querySelector('#objectOutput').value;
        parent.postMessage(JSON.parse(message), '*');
    }
}

window.addEventListener('message', function(event) {
    console.log(event);
    parent = event.source;
    document.querySelector('#objectOutput').value = JSON.stringify(event.data);
}, false);
