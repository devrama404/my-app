const http = require('http');

http.createServer((req, res) => {
 res.end("Hello CI/CD Docker!");
}).listen(3000);

