const expr = require('express')
const app = expr()
const sess = require('express-session')

app.use(sess({
    resave: false,
    saveUninitialized: true,
    secret: 'hello',
    cookie: { maxAge: 20000 }
}))


// app.get('/',(req,res)=>{
//     if(!req.session.fname){
//         req.session.fname = 'deep'
//         res.redirect('/fetchsession')
//     }
//     else{
//         console.log('session is already set')
//     }

// })
// app.get('/fetchsession',(req,res)=>{
//     res.send(`<h1>welcome........ ${req.session.fname}`)
// })


// ----> 215


// app.get('/visitcount', (req, res) => {
//     if (!req.session.views) {
//         req.session.views = 1;
//         res.send("You have visited the page First time");
//     } else {
//         req.session.views++;
//         const suffix = (n) => {
//             if (n % 10 === 1 && n % 100 !== 11) return 'st';
//             if (n % 10 === 2 && n % 100 !== 12) return 'nd';
//             if (n % 10 === 3 && n % 100 !== 13) return 'rd';
//             return 'th';
//         };
//         res.send(`You have visited the page ${req.session.views}${suffix(req.session.views)} time`);
//     }
// });

// app.get('/', (req, res) => {
//     res.send(`<h2>Welcome! Visit <a href="/visitcount">/visitcount</a> to see visit count</h2>`);
// });


// ---> 204

const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/', (req, res) => {
    res.redirect('/index.html');
});

app.post('/savesession', (req, res) => {
    req.session.username = req.body.username;
    res.redirect('/fetchsession');
});

app.get('/fetchsession', (req, res) => {
    const username = req.session.username;
    if (username) {
        res.send(`<h1>Welcome, ${username}</h1><form action="/logout" method="post"><button type="submit">Logout</button></form>`);
    } else {
        res.redirect('/index.html');
    }
});

app.post('/logout', (req, res) => {
    req.session.destroy(err => {
        res.redirect('/index.html');
    });
});

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});

