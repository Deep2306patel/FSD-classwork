<<<<<<< HEAD
app.use(express.static('public',{index:'/login.html'}));
 

app.post('/user', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    res.send(`Hello, ${firstName} ${lastName}`);
});
=======
app.use(express.static('public',{index:'/login.html'}));
 

app.post('/user', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    res.send(`Hello, ${firstName} ${lastName}`);
});
>>>>>>> 0214ecd (Update: cookie.js)
