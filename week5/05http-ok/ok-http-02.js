// ./05http-ok/ok-http-01.js
const http = requir('http');

const server = http.createServer((req, res)=>{
    res.setHeader("Content-Type", "text/html");
    res.end("OK");
});

server.listen(3000, () => {
    console.log(`3000번 포트에서 서버 실행중`);
})