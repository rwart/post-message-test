window.send = function() {
    var iframe = document.getElementById('jsfiddle-frame').contentWindow;
    var message = document.querySelector('#textOutput').value;
    iframe.postMessage(message, '*');
}

window.addEventListener('message', function(event) {
    document.querySelector('#textOutput').value = event.data;
}, false);
