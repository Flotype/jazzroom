var fs = require('fs');
var server = require('http').createServer(function(req, response){
  fs.readFile('.'+ req.url, function(err, data){
    if(!err) {
      
      var headers = {};
      
      if(req.url.indexOf('.html') !== -1) {
        headers['Content-Type']= 'text/html';
      }
    
      response.writeHead(200, headers);
      response.write(data, 'utf8');  
      response.end();
    }
  });
});
server.listen(8080);



var everyone = require("./lib/nowServerLib.js").initialize(server);

setInterval(everyone.now.receiveTick, 2000);

everyone.now.sendNote = function(type, note, source){
  everyone.now.receiveNote(type, note, source);
}