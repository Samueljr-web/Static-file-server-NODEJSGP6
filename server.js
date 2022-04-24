const http = require('http');
var fs = require('fs');
const OS= require('os')


const host = '127.0.0.1';
const port = 5000;

const server =http.createServer((req,res)=>{
    const urlPath = req.url;
    if (urlPath === '/') {
        fs.readFile('./Pages/index.html','UTF-8',(err,data)=>{
            res.statusCode = 200,
            res.setHeader('content-Type','text/html');
            res.end(data);
        })
        
       
    } else if (urlPath === '/about') {
        fs.readFile('./Pages/about.html','UTF-8',(err,data)=>{
            res.statusCode = 200,
            res.setHeader('content-Type','text/html');
            res.end(data);
        })
        
        
    }else if (urlPath === '/sys') {
   
        fs.writeFile('osinfo.json','solomon',(err,data)=>{
            res.statusCode = 201,
            res.setHeader('content-Type','text/html');
            res.end("Your OS info has been saved successfully!");
        })
        
        
    }else {
        fs.readFile('./Pages/404.html','UTF-8',(err,data)=>{
            res.statusCode = 404,
            res.setHeader('content-Type','text/html');
            res.end(data);
        })

    }


})

server.listen(port,host, ()=>{
    console.log(`server is running at ${host}:${port}`);
});