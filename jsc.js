const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    const styles = `
        <style>
            body {
                font-family: Arial, sans-serif;
                text-align: center;
                background-color: #f4f4f4;
                margin: 0;
                padding: 20px;
            }
            h1 {
                color: #333;
            }
            a {
                display: inline-block;
                margin: 10px;
                padding: 10px 20px;
                text-decoration: none;
                background-color: #007bff;
                color: white;
                border-radius: 5px;
            }
            a:hover {
                background-color: #0056b3;
            }
        </style>
    `;

    if (req.url === '/') {
        res.end(`
            ${styles}
            <h1>Welcome to Home Page</h1>
            <a href="/about">About Us</a> 
            <a href="/contact">Contact Us</a>
        `);
    } else if (req.url === '/about') {
        res.end(`
            ${styles}
            <h1 style="color:blue; font-weight:bold;">Welcome to LJ University</h1>
        `);
    } else if (req.url === '/contact') {
        res.end(`
            ${styles}
            <h1 style="color:red; font-style:italic;">Email: abc@ljinstitutes.edu.in</h1>
        `);
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});


server.listen(5004, () => {
    console.log('Server running at http://localhost:5004');
});

