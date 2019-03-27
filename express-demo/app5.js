var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// 解析请求body
app.use(bodyParser.urlencoded({extended: true}));

// 路由
var router = express.Router();

// 中间件
router.use(function(req, res, next) {
	console.log('There is a requesting');
	next();
});

router.use(function(req, res, next) {
	var d = new Date();
	var year = d.getFullYear();
	var month = d.getMonth() + 1;
	var date = d.getDate();
	var hour = d.getHours();
	var minute = d.getMinutes();
	var second = d.getSeconds();
	var milliSecond = d.getMilliseconds();
	console.log( year + '年' + month + '月' + date + '日'
	+ hour + '时' + minute + '分' + second + '秒' + milliSecond + '毫秒');
	next();
});

// 配置路由
router.get('/', function(req, res) {
	if (req.query.name) {
		res.send('<h1>Hello ' + req.query.name + '</h1>');
	} else {
		res.send('<h1>Hello World</h1>');
	}
});

router.get('/:name', function(req, res) {
	res.send('<h1>Hello ' + req.params.name + '</h1>');
});

router.post('/', function(req, res) {
	var name = req.body.name;
	res.json({message: 'Hello ' + name});
});

app.use('/home', router);

// 监听端口 启动
var port = process.env.PORT || 8080;
app.listen(port);

console.log('magic happens on port ' + port);