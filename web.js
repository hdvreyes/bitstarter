var express = require('express');

var app = express.createServer(express.logger());

 app.get('/', function(request, response) {
   response.send('Hello World!');
 });

<<<<<<< HEAD
// fs.writeFile('index.html', function (err) {
//   if (err) throw err;
//   console.log('It\'s saved!');
// });

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

=======
//fs.writeFile('index.html', 'Test', function (err) {
//  if (err) throw err;
//  console.log('It\'s saved!');
//});
>>>>>>> a430f1ee0229badd33462a9b40dd07396504a38e

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
