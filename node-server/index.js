const express = require('express');
const app = express();
const port = 3000;
const request = require('request');
const cheerio = require('cheerio');
const URL = require('url-parse');

app.get('/', (req, res) => res.send('Server Online'))
app.listen(port, () => console.log(`Listening on port ${port}!`))

const testURL = "https://www.campaignmonitor.com";
var checkedPages = {};
var pagesToCheck = [];
var url = new URL(testURL);
var baseUrl = url.protocol + "//" + url.hostname;

pagesToCheck.push(testURL);
startURLCheck();

function startURLCheck() {
    var nextPage = pagesToCheck.pop();
    if (nextPage in checkedPages) {
        startURLCheck();
    } else {
        if(nextPage != undefined){
            checkURL(nextPage, startURLCheck);
        }   
    }
}

function checkURL(url, callback) {
    checkedPages[url] = true;
    console.log("Crawling " + url);
    request(url, function (error, response, body) {
        console.log("Status code: " + response.statusCode);
        if (response.statusCode !== 200) {
            callback();
            return;
        }
        var html = cheerio.load(body);
        generateRelativeLinks(html);
        callback();
    });
}

function generateRelativeLinks(html) {
    var relativeLinks = html("a[href^='/']");
    relativeLinks.each(function () {
        pagesToCheck.push(baseUrl + html(this).attr('href'));
    });
}