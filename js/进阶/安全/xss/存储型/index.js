const http = require('http');
const fs = require('fs');

function handleReequest(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  const html = fs.readFileSync('./index.html', 'utf-8');
  res.write(html);
  res.end();
}

const server = new http.Server();
server.listen(8002, '127.0.0.1');
server.on('request', handleReequest);