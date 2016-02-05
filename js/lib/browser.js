/*
global
	require, jQBrowser, $,window,document
*/
function uaMatch(ua) {
	// If an UA is not provided, default to the current browser UA.
	if (ua === undefined) {
		ua = window.navigator.userAgent;
	}
	ua = ua.toLowerCase();

	var match = /(edge)\/([\w.]+)/.exec(ua) ||
		/(opr)[\/]([\w.]+)/.exec(ua) ||
		/(chrome)[ \/]([\w.]+)/.exec(ua) ||
		/(iemobile)[\/]([\w.]+)/.exec(ua) ||
		/(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
		/(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec(ua) ||
		/(webkit)[ \/]([\w.]+)/.exec(ua) ||
		/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) ||
		/(msie) ([\w.]+)/.exec(ua) ||
		ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec(ua) ||
		ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];

	var platform_match = /(ipad)/.exec(ua) ||
		/(ipod)/.exec(ua) ||
		/(windows phone)/.exec(ua) ||
		/(iphone)/.exec(ua) ||
		/(kindle)/.exec(ua) ||
		/(silk)/.exec(ua) ||
		/(android)/.exec(ua) ||
		/(win)/.exec(ua) ||
		/(mac)/.exec(ua) ||
		/(linux)/.exec(ua) ||
		/(cros)/.exec(ua) ||
		/(playbook)/.exec(ua) ||
		/(bb)/.exec(ua) ||
		/(blackberry)/.exec(ua) || [];

	var browser = {},
		matched = {
			browser: match[5] || match[3] || match[1] || "",
			version: match[2] || match[4] || "0",
			versionNumber: match[4] || match[2] || "0",
			platform: platform_match[0] || ""
		};

	if (matched.browser) {
		browser[matched.browser] = true;
		browser.version = matched.version;
		browser.versionNumber = parseInt(matched.versionNumber, 10);
	}

	if (matched.platform) {
		browser[matched.platform] = true;
	}

	// These are all considered mobile platforms, meaning they run a mobile browser
	if (browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
		browser.ipod || browser.kindle || browser.playbook || browser.silk || browser["windows phone"]) {
		browser.mobile = true;
	}

	// These are all considered desktop platforms, meaning they run a desktop browser
	if (browser.cros || browser.mac || browser.linux || browser.win) {
		browser.desktop = true;
	}

	// Chrome, Opera 15+ and Safari are webkit based browsers
	if (browser.chrome || browser.opr || browser.safari) {
		browser.webkit = true;
	}

	// IE11 has a new token so we will assign it msie to avoid breaking changes
	if (browser.rv || browser.iemobile) {
		var ie = "msie";

		matched.browser = ie;
		browser[ie] = true;
	}

	// Edge is officially known as Microsoft Edge, so rewrite the key to match
	if (browser.edge) {
		delete browser.edge;
		var msedge = "msedge";

		matched.browser = msedge;
		browser[msedge] = true;
	}

	// Blackberry browsers are marked as Safari on BlackBerry
	if (browser.safari && browser.blackberry) {
		var blackberry = "blackberry";

		matched.browser = blackberry;
		browser[blackberry] = true;
	}

	// Playbook browsers are marked as Safari on Playbook
	if (browser.safari && browser.playbook) {
		var playbook = "playbook";

		matched.browser = playbook;
		browser[playbook] = true;
	}

	// BB10 is a newer OS version of BlackBerry
	if (browser.bb) {
		var bb = "blackberry";

		matched.browser = bb;
		browser[bb] = true;
	}

	// Opera 15+ are identified as opr
	if (browser.opr) {
		var opera = "opera";

		matched.browser = opera;
		browser[opera] = true;
	}

	// Stock Android browsers are marked as Safari on Android.
	if (browser.safari && browser.android) {
		var android = "android";

		matched.browser = android;
		browser[android] = true;
//				browser.androidOS = parseFloat(ua.slice(ua.indexOf("Android")+8));
	}

	// get android os version -- by jay
	if (browser.android) {
		browser.androidOS = parseFloat(ua.slice(ua.indexOf("android")+8));
	}

	// Kindle browsers are marked as Safari on Kindle
	if (browser.safari && browser.kindle) {
		var kindle = "kindle";

		matched.browser = kindle;
		browser[kindle] = true;
	}

	// Kindle Silk browsers are marked as Safari on Kindle
	if (browser.safari && browser.silk) {
		var silk = "silk";

		matched.browser = silk;
		browser[silk] = true;
	}

	//微信浏览器
	if (/micromessenger/.test(ua)) {
		browser.wechat = true;
	}
	// Assign the name and platform variable
	browser.name = matched.browser;
	browser.platform = matched.platform;
	return browser;
}

// Run the matching process, also assign the function to the returned object
// for manual, jQuery-free use if desired
window.jQBrowser = uaMatch(window.navigator.userAgent);
window.jQBrowser.uaMatch = uaMatch;
if (typeof jQBrowser != 'undefined') {
	if (jQBrowser.name == 'msie' && jQBrowser.versionNumber <= 9) {
		var k = confirm('您的浏览器版本太旧，网页不再支持老版本浏览器，是否跳转到建议页面？');
		if  (k) {
			window.location.href = "np.html";
		}
	}
	if (jQBrowser.safari) {
		document.documentElement.classList.add('safari');
	}
	if (jQBrowser.iphone) {
		document.documentElement.classList.add('iphone');
	}
	if (jQBrowser.android) {
		document.documentElement.classList.add('android');
	}
	if (jQBrowser.chrome) {
		document.documentElement.classList.add('chrome');
	}
}
//window.debugBrowser = null;
//if (window.debugBrowser) {
//	jQBrowser.name = debugBrowser;
//}