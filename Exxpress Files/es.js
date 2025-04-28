// const { default: chalk } = require('chalk');
var express = require('express')
var app = express()
// var ch = require(chalk)
// app.get('/',function(req,res)
// {
//     res.write('hello world'),
//     res.send();
// }),
// app.listen(5002,()=>{console.log('server start')});
// app.get('/about',function(req,res)
// {
//     res.set('content-type','text/html')
//     res.send('<h1>world</h1>');
// })
// app.listen(5003);
app.get('{*any}',(req,res)=>
{
    res.status(404),
    res.send('page not found')
}),
app.listen(5004)