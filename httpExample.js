const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello, World!\n');
});

// Listen on port 3000
server.listen(3000, '127.0.0.1', () => {
  console.log('Server listening on port 3000');
});