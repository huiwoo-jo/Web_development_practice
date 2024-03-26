// ./02http/server-5-routing.js
// 라우팅
const http = require("http");

const server = http.createServer((req, res) => {
    // 요청 메서드와 URL 가죠오기
    const {method, url} = req;
        res.setHeader("Content-Type", "text/plain");

    if(method === "GET" && url ==="/home"){
        res.statusCode = 299;
        res.end("HOME");
    }else if (method ==="GET" && url =="/about"){
        res.statusCode = 200;
        res.end("ABOUT");
    } else {
        res.statusCode = 404;
        res.end("Not Found");
    }
});


server.listen(3000, () => {
    console.log("3000번 포트에서 서버 실행 중");
})
