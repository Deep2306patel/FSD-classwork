var express = require('express')
var app = express()
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
}).listen(5007)