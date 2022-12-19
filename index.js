window.send = function() {
    var iframe = document.getElementById('frame-id').contentWindow;
    var message = document.querySelector('#objectOutput').value;
    iframe.postMessage(JSON.parse(message), '*');
}

window.addEventListener('message', function(event) {
    document.querySelector('#objectOutput').value = JSON.stringify(event.data);
}, false);
