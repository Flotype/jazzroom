var express = require('express');
var app =  express.createServer();

// Initialize main server
app.use(express.bodyParser());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('view options', {layout: false});


// For Debugging
app.use(express.errorHandler({ showStack: true, dumpExceptions: true }));
//


app.get('/:room/:instrument', function(req, res){
  
  res.render('index', {locals: {instrument: req.params.instrument, room: req.params.room}});
     
});



app.listen(8080);

var fs = require('fs');
var server = require('http').createServer();
server.listen(3306);



var everyone = require("./lib/nowServerLib.js").initialize(server);

everyone.now.receiveTick = function(){};

setInterval(function(){everyone.now.receiveTick();}, 2000);

everyone.now.filterNote = function(type, note, id, room){
  if(this.now.room == room && this.now.id != id){
    this.now.receiveNote(type, note);
  }
}

everyone.now.sendNote = function(type, note){
  everyone.now.filterNote(type, note, this.now.id, this.now.room);
}

