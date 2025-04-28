var express = require('express')
var app = express()
app.use(express.static('public',{index:'/login.html'}));
    
app.listen(5008);

app.get('/', (req, res) => {
    res.send('GET request to the homepage');
});

app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

app.put('/', (req, res) => {
    res.send('PUT request to the homepage');
});

app.delete('/', (req, res) => {
    res.send('DELETE request to the homepage');
});

app.use(express.urlencoded({ extended: true }));

app.get('/user', (req, res) => {
    res.send(`<form method="POST" action="/user">
                <input type="text" name="firstName" placeholder="First Name" required />
                <input type="text" name="lastName" placeholder="Last Name" required />
                <button type="submit">Submit</button>
              </form>`);
});

app.post('/user', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    res.send(`Hello, ${firstName} ${lastName}`);
});

