const express = require('express');
const app = express();
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: 'hello',
    cookie: { maxAge: 20000}
}));

app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Session Example</title>
        </head>
        <body>
            <form action="/savesession" method="POST">
                <label>Username:</label>
                <input type="text" name="username" required />
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
});

app.post('/savesession', (req, res) => {
    req.session.username = req.body.username;
    res.redirect('/fetchsession');
});

app.get('/fetchsession', (req, res) => {
    const username = req.session.username;
    if (username) {
        res.send(`
            <h1>Welcome, ${username}</h1>
            <form action="/logout" method="post">
                <button type="submit">Logout</button>
            </form>
        `);
    } else {
        res.redirect('/');
    }
});

app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        res.redirect('/');
    });
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});
