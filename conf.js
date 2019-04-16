conf.js

exports.config = {
	directConnect: true;
	capabilities:{
		'browserName': 'chrome'};
	framework: 'selenium-webdriver',
	specs: ['test.js'] 
};

