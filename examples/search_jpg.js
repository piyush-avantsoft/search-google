var SearchGoogle = require('../lib/search-google');
var searchGoogle = new SearchGoogle({
    key: 'YOUR_API_KEY',
    cx: 'YOUR_CX'
});


searchGoogle.build({
    q: "",
    start: 5,
    fileType: "jpg",
    gl: "tr", //geolocation,
    lr: "lang_tr",
    num: 10, // Number of search results to return between 1 and 10, inclusive
    siteSearch: "http://iconfinder.com/" // Restricts results to URLs from a specified site
}, function(error, response) {
    console.log(response);
});
