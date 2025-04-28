const express = require('express')
const app = express()

function checkAdmin(req, res, next) {
  const isAdmin = req.query.isAdmin === 'true';

  if (isAdmin) {
    return res.redirect('/admin-dashboard');
  } else {
    return res.redirect('/user-dashboard');
  }

  next();
}

app.use(express.urlencoded({ extended: true }))

app.get('/admin-dashboard', (req, res) => {
  res.send('Welcome to the Admin Dashboard!')
})

app.get('/user-dashboard', (req, res) => {
  res.send('Welcome to the User Dashboard!')
})

app.get('/dashboard', checkAdmin, (req, res) => {
})

app.listen(5010, () => {
  console.log('Server is running on http://localhost:5010')
})
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!')
})