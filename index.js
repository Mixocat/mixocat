var http = require('http');
var server = http.createServer();
 
function mensaje(petic, resp) {
	resp.writeHead(200, {'content-type': 'text/plain'});
	resp.write('Que cuenta? :3');
	resp.end();
}
server.on('request', mensaje);
 
server.listen(8000, function () {
  	console.log('La Aplicación está funcionando en el puerto 8000');
});