var express = require('express');
var app = express();

app.listen(process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.send('Home page for e-doctor')
});
