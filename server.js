const http = require('http');
const server = http.createServer(function(req, res) {
    if (req.url == '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is the home page.</p></body></html>');
        res.end();
    }
    else if (req.url == '/student') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is the student page.</p></body></html>');
        res.end();
    }
    else if (req.url == '/admin') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write('<html><body><p>This is the admin page.</p></body></html>');
        res.end();
    }
    else if (req.url == '/data') {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({ message: "Hello World JSON"}));
        res.end();
    }
    else {
        res.end('Invalid Request!');
    }
})

server.listen(8000);

console.log('Server running at http://localhost:8000/');