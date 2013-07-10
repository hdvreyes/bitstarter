var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {

		var page = fs.readFileSync('index.html', 'utf8');
	  	response.send(page);

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