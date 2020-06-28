var http = require("http");

function start() {

	/**
	 * 请注意，当我们在服务器访问网页时，我们的服务器可能会输出两次“Request received.”。<br/>>
	 * 那是因为大部分浏览器都会在你访问 http://localhost:8888/ 时尝试读取 http://localhost:8888/favicon.ico 
	 * @param {*} request 
	 * @param {*} response 
	 */
	function onRequest(request, response) {
		console.log("Request received.")
		response.writeHead(200, { "Content-Type": "text/plain" });
		response.write("Hello world");
		response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log("Server has started");
}
// 导出为module
exports.start = start;
