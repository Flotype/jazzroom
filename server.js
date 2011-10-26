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


app.get('/', function(req, res){
  var room = Math.floor(uCount/3);
  var instrument;
  switch(uCount%3){
    case 0:
      instrument = 'piano';
      break;
    case 1:
      instrument = 'bass';
      break;
    case 2:
      instrument = 'drum';
      break;
  }
  uCount++;
  res.render('index', {locals: {instrument: instrument, room: room}});
});



app.listen(8080);

var fs = require('fs');
var server = require('http').createServer();
server.listen(3306);



var everyone = require("now").initialize(server);

everyone.now.receiveTick = function(){};

uCount = 0;

setInterval(function(){everyone.now.receiveTick();}, 2000);

everyone.now.filterNote = function(type, note, id, room){
  if(this.now.room == room && this.now.id != id){
    this.now.receiveNote(type, note);
  }
}

everyone.now.sendNote = function(type, note){
  everyone.now.filterNote(type, note, this.now.id, this.now.room);
}

