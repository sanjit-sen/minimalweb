/**
 * Example Controller to get Static File
 * A controller which can be used to get Static File as response
 */

var logger = require('minimalweb').logger;
var controller = require('minimalweb').abstractController;
// We are using form post functionality here
var postForm = require('minimalweb').postForm;

var PostController = function() {
  logger.log("constructed");
}

//Extends abstract controller
PostController.__proto__ = controller;

PostController.do = function(req,res) {
	var pf = new postForm(req,res,__dirname + '/../upload');
	pf.on('post', function(req,res,fields, files) {
		// process specific business logic with request variables
		// set the processed string to controller setJson method
		// place to use any service callback
		// if we want something to send back with response
		// here we stick with json format
		// even we can render the response form with json, 
		// we are using 'ejs' as our template engine
	    PostController.setJson("{\"person\":{\"name\":\"Ram\"}}");
	    PostController.process(req,res,function(err,content){
	  	logger.log('content -'+content);
	    });	
	});  
}



module.exports.getPostController = function() {
	return PostController;
};
