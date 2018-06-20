/**
 * 1. let user give an url/urls to query. (string, regular expression, array of things)
 * 2. let user give the css selector, returned selected content
 * 3. save selected content to the files that user defined
 * 4. modulize the "collectors", let user run differnt "collectors" written in different files
 * ** 4. authentication, agent
 * ** 5. data analyzation
 * ** 6. generate new layout from the returned content, UI tool?
 * ** 7. command line tool
 *
 * Since ES6 is not fully supported by Node.js, this library will be written in ES5.
 */

// const http = require('http')
// const cheerio = require('cheerio')

// http.get({
// 	host: 'example.com',
// }, (res) => {

// 	//set encoding
// 	res.setEncoding('utf8');
	
// 	res.on('data', (content) => {
// 		let $ = cheerio.load(content)
// 		console.log($('p').text())
// 	})

// });


'use strict';


var http = require('http'),
	cheerio = require('cheerio');


exports = module.exports = createCrawler;

function createCrawler(){
	return {text: 'good'};
}

exports.createCrawler = createCrawler;