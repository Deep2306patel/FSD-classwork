var express = require('express')
var app = express()

// app.get('/:d',(req,res)=>
// {
    
//     res.write('this id you specified is = '+ req.params.id)
//     res.write(JSON.stringify(req.params));
//     res.send();
// }).listen(5005)

// app.get('/things/:name/:id',(req,res)=>
//     {
//         res.write(req.params.name+" "+req.params.id)
//         res.send();
//     }).listen(5005)
    
stu = {
    studentName : 'mr.modha',
    div : 'A10',
    project :'express'
}


app.get('/stu', (req, res) => {
    const htmlTable = `
        <html>
        <head>
            <title>Student Info</title>
            <style>
                table { border-collapse: collapse; width: 50%; margin: 20px auto; }
                td, th { border: 1px solid #ddd; padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; }
            </style>
        </head>
        <body>
            <h2 style="text-align:center;">Student Details</h2>
            <table>
                <tr><th>Key</th><th>Value</th></tr>
                ${Object.entries(stu).map(([key, value]) => `
                    <tr><td>${key}</td><td>${value}</td></tr>
                `).join('')}
            </table>
        </body>
        </html>
    `;
    res.send(htmlTable);
    }).listen(5007);


    // wejs if user request sorted names url that all name along with name should be printed
    // according to decnd oder ... 