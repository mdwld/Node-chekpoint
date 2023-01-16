// npm i express
//const express = require("express")
//console.log(express)
const http = require("http");
http.createServer((request , response) =>{
    response.end("hello Monami")
}).listen(1851); 
//npm i nodemon
// npx nodemon app
// this is for restarting node app according to change 


//npm init for the package.json (to generate the parameter of our package-json)