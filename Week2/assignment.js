const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

http.createServer((req, res) => {
    const { pathname, query } = url.parse(req.url, true);
    const filename = query.filename;
    const content = query.content || '';
    const filePath = path.join(__dirname, filename || '');

    if (!filename) {
        res.writeHead(400, { 'Content-Type': 'text/plain' });
        return res.end('Filename is required');
    }

    if (pathname === '/create') {
        fs.writeFile(filePath, content, err => {
            res.end(err ? 'Error creating file' : 'File created');
        });

    } else if (pathname === '/read') {
        fs.readFile(filePath, 'utf8', (err, data) => {
            res.end(err ? 'File not found' : data);
        });

    } else if (pathname === '/delete') {
        fs.unlink(filePath, err => {
            res.end(err ? 'File not found or cannot delete' : 'File deleted');
        });

    } else {
        res.writeHead(404);
        res.end('Invalid route');
    }

}).listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});


// to create a file
// http://localhost:3000/create?filename=file.txt&content=Created_using_http_server_module

// to access the file
// http://localhost:3000/read?filename=file.txt

// to delete the file
// http://localhost:3000/delete?filename=file.txt
