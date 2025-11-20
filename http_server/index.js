const http = require('http');

const server = http.createServer((req,res)=>{
    console.log("Find New Request");
    res.end("Hello from the server");
})

server.listen(3000,()=>console.log('Hello from server')
)