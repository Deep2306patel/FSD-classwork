

const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/', (req, res) => {
  res.send(`
    <form action="/submit" method="POST">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username"><br><br>
      <label for="country">Select Country:</label>
      <select id="country" name="country">
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
        <option value="Australia">Australia</option>
      </select><br><br>
      <button type="submit">Submit</button>
    </form>
  `)
})

app.post('/submit', (req, res) => {
  const username = req.body.username || 'Guest'
  const country = req.body.country || 'Unknown'
  res.send(`${username} & You are from ${country}`)
})

app.listen(5008, () => {
  console.log('Server is running on http://localhost:5008')
})