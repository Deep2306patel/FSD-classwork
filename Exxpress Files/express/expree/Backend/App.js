app.use(express.static('public',{index:'/login.html'}));
 

app.post('/user', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    res.send(`Hello, ${firstName} ${lastName}`);
});
