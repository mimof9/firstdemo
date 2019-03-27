var express = require('express');
var app = express();

// 如果环境变量没有指定，则端口默认为8080
var port = process.env.PORT || 8080;

// 新建了一个路由对象，该对象指定访问根路由（/）时，返回Hello World。
// 然后，将该路由加载在/home路径，也就是说，访问/home会返回Hello World
var router = express.Router();

router.get('/', function(req, res) {
	res.send('<h1>Hello World</h1>');
})

app.use('/home', router);

app.listen(port);
console.log('Magic happens on port ' + port);