'use strict';

var isOpen = false;

chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {isOpen: isOpen}, function(response) {
        });
        isOpen = !isOpen;
    });

});