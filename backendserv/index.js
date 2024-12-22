const fileSystem = require('fs');
const http = require('http');
const url = require('url');
const cors = require('cors');

const data = fileSystem.readFileSync('farmdata.json','utf-8')

const server = http.createServer((req,res)=>{
    const pathName = req.url;

    const {query, pathname} = url.parse(pathName);
     // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow all origins
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // Allow specific methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Allow specific headers

    if (req.method === 'OPTIONS') {
        // Handle preflight request
        res.writeHead(204);
        res.end();
        return;
    }


    if(pathname === '/' || pathname === '/overview'){
        res.end(data);
    } else if (pathname === '/product'){
        
        res.end(JSON.stringify(JSON.parse(data)[Number(query[1])]));
    } else {
        res.writeHead(404);
        res.end('goon');
    }
});

server.listen(8000);