'use strict';

console.log('New script loaded');

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    console.log(request);
    if (!request.isOpen) {

        var iframe = document.createElement("iframe");
        iframe.setAttribute('id', 'x-polymer-extension');
        iframe.width = '100%';
        iframe.height = '300px';
        iframe.style.position = 'fixed';
        iframe.style.top = 0;
        iframe.style.zIndex = 99999999;

        iframe.src = chrome.extension.getURL("build.html");

        document.body.insertBefore(iframe, document.body.firstChild);


    } else {
        var iframe = document.querySelector('#x-polymer-extension');
        if (iframe) {
            iframe.remove();
        }
    }
});


