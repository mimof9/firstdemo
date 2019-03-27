var express = require('express');
var app = express();

var port = process.env.PORT || 8080;
var router = express.Router();

router.get('/', function(req, res) {
	res.send('<h1>Hello World</h1>');
});

// 通过命名参数:name 可以从req.params.name中拿到这个参数
router.get('/:name', function(req, res) {
	res.send('<h1>Hello ' + req.params.name + '</h1>');
});

app.use('/home', router);

app.listen(port);
console.log('Magic happs on port ' + port);