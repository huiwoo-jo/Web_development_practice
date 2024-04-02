// ./05http-ok/ok-http-02.js
const http = require('http');

const url = require(`url`);

const server = http.createServer((req, res)=>{
    const path = url.parse(req.url, true).pathname;
    res.setHeader("Content-Type", "text/html");
    
    if(path === "/user"){
        res.end("[user] name : gdhong, age: 24");
    }else if (path === "/picture"){
        res.end(`<ul>
            <li>picture 1</li>
            <li>picture 2</li>
            <li>picture 3</li>
        </ul>
        `);
    }else{
        res.statusCode = 404;
        res.end("404 page not found");
    }
}).listen(3000, () => {
    console.log(`3000번 포트에서 서버 실행중`)});