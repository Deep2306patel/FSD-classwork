const expr = require('express')
const app = expr()
const sess = require('express-session')

app.use(sess({
    resave:false,
    saveUninitialized:true,
    secret:'hello',
    cookie:{maxAge:20000}
}))
app.get('/',(req,res)=>{
    if(!req.session.fname){
        req.session.fname = 'deep'
        res.redirect('/fetchsession')
    }
    else{
        console.log('session is already set')
    }

})
app.get('/fetchsession',(req,res)=>{
    res.send(`<h1>welcome........ ${req.session.fname}`)
})

app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});