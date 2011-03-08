var express = require('express');
var app =  express.createServer();

// Initialize main server
app.use(express.bodyDecoder());

app.use(express.staticProvider(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', {layout: false});


// For Debugging
app.use(express.errorHandler({ showStack: true, dumpExceptions: true }));
//

app.listen(80);

var fs = require('fs');
var server = require('http').createServer();
server.listen(8080);



var everyone = require("./lib/nowServerLib.js").initialize(server);

everyone.now.receiveTick = function(){};

setInterval(function(){everyone.now.receiveTick();}, 2000);

everyone.now.sendNote = function(type, note, source){
  everyone.now.receiveNote(type, note, source);
}

