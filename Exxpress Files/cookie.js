var express = require('express');
var app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// app.get('/', (req, res) => {
//     res.cookie('username', 'xyz');
//     console.log(req.cookies);
//     res.send('Cookie is set and logged.');
// });


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Cockie.html');
});

app.post('/set-cookie', (req, res) => {
    const username = req.body.username;
    res.cookie('username', username);
    res.redirect('/next');
});

app.get('/next', (req, res) => {
    res.send('Username stored in cookie: ' + req.cookies.username);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
