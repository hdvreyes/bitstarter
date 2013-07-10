var express = require('express');

var app = express.createServer(express.logger());


var page;

try {
  page = fs.readFileSync('index.html');
  response.send( page );
} catch (e) {
  	// Here you get the error when the file was not found,
  	// but you also get any other error
	if (e.code === 'ENOENT') {
	  console.log('File not found!');
	} else {
	  throw e;
	}  
}


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
