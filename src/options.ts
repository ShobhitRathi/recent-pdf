/// <reference path='../node_modules/@types/chrome/index.d.ts'/>
'../node_modules/@types/chrome/index.d.ts'
'use strict'
// Saves options to chrome.storage
function save_options() {
	var isSavedTab = document.getElementById('saved-tab').nodeValue;
	var filesPerPage = document.getElementById('files-per-page').nodeValue;
	chrome.storage.sync.set({
		savedTab: isSavedTab,
		filesPerPage: filesPerPage
	}, function () {
		// Update status to let user know options were saved.
		var status = document.getElementById('status');
		status.textContent = 'Options saved.';
		setTimeout(function () {
			status.textContent = '';
		}, 750);
	});
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
	// Use default value color = 'red' and likesColor = true.
	chrome.storage.sync.get({
		savedTab: false,
		darkTheme: false,
		filesPerPage: 11
	}, function (items) {
		document.getElementById('saved-tab').nodeValue = items.savedTab;
		document.getElementById('files-per-page').nodeValue = items.filesPerPage;
	});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
