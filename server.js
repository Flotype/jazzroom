var fs = require('fs');
var server = require('http').createServer(function(req, response){
  fs.readFile('./index.html', function(err, data){
    response.writeHead(200);  
    response.write(data);  
    response.end();
  });
});
server.listen(8080);



var everyone = require("../../now2/nowServerLib.js").initialize(server);
