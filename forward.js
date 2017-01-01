const net = require('net');
net.createServer((s) => {
	const c = net.createConnection({host: '127.0.0.1', port: 1084});
	s.pipe(c);
	c.pipe(s);
}).listen(3000);
