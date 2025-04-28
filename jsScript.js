// obj = [{
//     name:'square',
//     side: 3
// },{
//     name:'circle',
//     age: 30
// }
// ]

// // write a node js script to crate a class name person by assigning name and age in form of member. create function name elder which returns elder person obj, details of elder person should be printed in console as well as in file.

// class person{
//     constructor(name,age)
//     {
//         this.name = name,
//         this.age = age
//     }
//     elder(p){
//         if(this.age>p.age){
//             return this;
//         }
//         else{
//             return p;
//         }
//     }
// }
// var p1 = new person('xyz',23)
// var p2 = new person('abc',34)
// var p3 = p1.elder(p2)

// const jsonstr =JSON.stringify(p3)
// var ps = require("fs")
// ps.writeFileSync('d2.txt',jsonstr)

// class Time {
//     constructor(hour, minute, second) {
//         this.hour = hour;
//         this.minute = minute;
//         this.second = second;
//     }

//     displayTime() {
//         console.log(`Time: ${this.hour}h ${this.minute}m ${this.second}s`);
//     }
    
//     addSeconds(sec) {
//         this.second += sec;
//         this.minute += Math.floor(this.second / 60);
//         this.second %= 60;
//         this.hour += Math.floor(this.minute / 60);
//         this.minute %= 60;
//         this.hour %= 24; // Keeping it within 24-hour format
//     }
// }

// var t1 = new Time(10, 45, 50);
// t1.displayTime();
// t1.addSeconds(75);
// t1.displayTime();


// path Module

const path = require('path')
var pm = require('path')
path1 = pm.dirname('/Users/name/CLG/CLG_Codes/FSD_2/index.html')
console.log(path1)
path2 = pm.basename('/Users/name/CLG/CLG_Codes/FSD_2/index.html')
console.log(path2)
ext = pm.extname('/Users/name/CLG/CLG_Codes/FSD_2/index.html')
console.log(ext)
path3 = pm.parse('/Users/name/CLG/CLG_Codes/FSD_2/index.html')
console.log(path3)

// write a js program to check given file is text file or not.

if(ext == '.text'){
    console.log('File ext is .text')
}
else{
    console.log('file ext is not text')
}

// Http Module

// var http = require('http');
// var h1 = http.createServer((req,res)=>
// {
//     res.writeHead(200,{'content-type':'text/html'})
//     res.end();
// });
// h1.listen(5001,()=>
// {
//     console.log('server start')
// });



const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.url === '/') {
        // Home Page with links
        res.end(`
            <h1>Welcome to Home Page</h1>
            <a href="/about">About Us</a> | 
            <a href="/contact">Contact Us</a>
        `);
    } else if (req.url === '/about') {
        // About Us Page
        res.end(`<h1 style="color:blue; font-weight:bold;">Welcome to LJ University</h1>`);
    } else if (req.url === '/contact') {
        // Contact Us Page
        res.end(`<h1 style="color:red; font-style:italic;">Email: abc@ljinstitutes.edu.in</h1>`);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});


server.listen(5003, () => {
    console.log('Server running at http://localhost:5003');
});