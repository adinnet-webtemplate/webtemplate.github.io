/*
global
	require, jQBrowser, $,window,document
*/
//配置页面加载模块参数
require.config({
	waitSeconds:0, /*加载等待时间*/
	//添加加载异步加载CSS的插件
	map:{
		'*':{
			'css':'../lib/css.min'
		}
	},
	//配置Javascript文件映射路径
	paths: {
		jquery:
		[
			//'//cdn.bootcss.com/jquery/1.12.0/jquery.min',
//			'//cdn.bootcss.com/jquery/2.2.0/jquery.min',
//			'//cdn.gbtags.com/jquery/2.1.1/jquery.min',
//			'../lib/jquery/1.12.0/jquery.min',
			'../lib/jquery/2.2.0/jquery.min'
		],
		jay :"jay"
	},
	shim: {
		/*模块依赖关系 demo*/
		'jay'  : {deps: ['jquery']}
	}
});


if (typeof jQBrowser != 'undefined') {
	if (jQBrowser.name == 'msie' && jQBrowser.versionNumber <= 8) {
		var k = confirm('您的浏览器版本太旧，网页不再支持老版本浏览器，是否跳转到建议页面？')
		if  (k) {
			window.location.href = "np.html";
		}
	}
}
//Domready
document.onreadystatechange = function () {
	if (document.readyState == "interactive") {
	}
};

require(['jay'], 
	function (jay){
		$(function() {
			//jayfunction();
		});
	}
);
//加载对应css模块 demo
//require([
//	"css!../../css/style1",
//	"css!../../css/style2"
//]);