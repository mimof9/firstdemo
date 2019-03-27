(function() {

// 给window添加了一个App对象
window.App = {
	Models: {},
	Collections: {},
	Views: {},
	Router: {}
};
// 给这个App对象添加一个路由属性 这个路由属性使用Backbone提供
App.Router = Backbone.Router.extend({
	routes: {
		'': 'index',
		'show/:id': 'show',
		'download/*random': 'download',
		'search/:query': 'search',
		'*other': 'default'
	},

	index: function() {
		$(document.body).append("调用了 Index 路由<br>");
	},

	show: function(id) {
		$(document.body).append("调用了 Show 路由，id 等于 " + id + "<br>");
	},

	download: function(random) {
		$(document.body).append("调用了 Download 路由，参数等于 " + random + "<br>");
	},

	search: function(query) {
		$(document.body).append("调用了 Search 路由，参数等于 " + query + "<br>");
	},

	default: function(other) {
		$(document.body).append("你访问的 " + other + " 路由未定义<br>");
		
	}

});
// 给App指定好Router之后 实例化这个路由 并且让它开始工作
new App.Router();
Backbone.history.start();

})();
