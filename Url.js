// const url = require('url');


// const myUrl = new URL('https://www.google.com/maps/place/Burj+Al+Arab/@25.141186,55.1699338,15z/data=!4m12!1m2!2m1!1sHotels!3m8!1s0x3e5f6a576414cf2d:0xb3da71b879f0e038!5m2!4m1!1i2!8m2!3d25.1411914!4d55.1852468!16zL20vMDJtem05?authuser=0&entry=ttu&g_ep=EgoyMDI1MDMyNC4wIKXMDSoASAFQAw%3D%3D');


// console.log('Href:', myUrl.href);
// console.log('Protocol:', myUrl.protocol);
// console.log('Host:', myUrl.host);
// console.log('Hostname:', myUrl.hostname);
// console.log('Port:', myUrl.port);
// console.log('Pathname:', myUrl.pathname);
// console.log('Search Params:', myUrl.search);
// console.log('Hash:', myUrl.hash);


// myUrl.searchParams.append('newParam', '456');
// console.log('Updated Search Params:', myUrl.search);


// var addr = 'http://video.google.co.uk:80/videoplay?docid=-72378987236&h1=en#ooh2305'

// var q = url.parse(addr,true)
// console.log(q)
// console.log(q.query.docid)

// // wirte a node js program to fetch the qurey str from url is a given year is leap year or not


// const url1 = ('http://localhost:8080/default.html?year=2025&month=feb');

// var q1 = url.parse(url1,true)


// year = q1.query.year

// if(year%4 == 0){
//     console.log('Leap Year')
// }
// else{
//     console.log('Not a Leap Year')

// }

//write a nodejs program that open the requested file and return the content to the client if eny thing goes wrong throw 404Error.

const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer(function (req, res){
    let filePath = '.' + req.url;
    if (filePath === './') {
        filePath = './index.html';
    }

    fs.readFile(filePath, function(err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('404 Not Found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
}).listen(8080);
