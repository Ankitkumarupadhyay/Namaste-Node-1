const http = require("http");

const server =  http.createServer(function (req,res){
    if(req.url === "/getSecretData"){
        res.end("This is a secret data....")
    }
    res.end("Hello World!!!")
})

server.listen(7777)
