var locales = ['com', 'co.uk', 'ca', 'dk', 'de', 'se', 'no', 'fr', 'it'];
var googleSite = 'https://google.com';

var filters = locales.map(function (locale) {
	return ` -site:pinterest.${locale}`;
}).join('');

chrome.omnibox.onInputEntered.addListener(function (text) {
	chrome.tabs.create({
		url: `${googleSite}/search?q=${text + filters}`
	});
});
