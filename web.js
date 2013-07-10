var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());

app.get('/', function(request, response) {

	var page = fs.readFileSync('index.html', 'utf8');

	buf = new Buffer(256);
	len = buf.write(page,0);
        var display = buf.toString('utf8',0,page);

 	response.send(display);

});


// var data;
// try {
//   data = fs.readFileSync('foo.bar');
// } catch (e) {
//   // Here you get the error when the file was not found,
//   // but you also get any other error
// 	if (e.code === 'ENOENT') {
// 	  console.log('File not found!');
// 	} else {
// 	  throw e;
// 	}  
// }


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
