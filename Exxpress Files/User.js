const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.redirect('/calculate')
})

app.get('/calculate', (req, res) => {
  res.send(`
    <form action="/calculate" method="POST">
      <label for="num1">Number 1:</label>
      <input type="number" id="num1" name="num1" required><br><br>
      <label for="num2">Number 2:</label>
      <input type="number" id="num2" name="num2" required><br><br>
      <label for="operation">Operation:</label>
      <select id="operation" name="operation">
        <option value="add">Add</option>
        <option value="sub">Subtract</option>
        <option value="mul">Multiply</option>
        <option value="div">Divide</option>
      </select><br><br>
      <button type="submit">Calculate</button>
    </form>
    <br>
    <a href="/register">Go to Register Page</a>
  `)
})

app.post('/calculate', (req, res) => {
  const num1 = parseFloat(req.body.num1)
  const num2 = parseFloat(req.body.num2)
  const operation = req.body.operation
  let result

  switch (operation) {
    case 'add':
      result = num1 + num2
      break
    case 'sub':
      result = num1 - num2
      break
    case 'mul':
      result = num1 * num2
      break
    case 'div':
      result = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero'
      break
    default:
      result = 'Invalid operation'
  }

  res.send(`Result: ${result}<br><br><a href="/">Back</a>`)
})

app.get('/register', (req, res) => {
  res.send(`
    <form action="/success" method="POST">
      <label>Username:</label>
      <input type="text" name="username" required><br><br>
      <label>Password:</label>
      <input type="password" name="password" required><br><br>
      <label>Confirm Password:</label>
      <input type="password" name="confirmPassword" required><br><br>
      <label>Gender:</label>
      <select name="gender" required>
        <option value="">Select</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select><br><br>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  `)
})

app.post('/success', (req, res) => {
  const { username, password, confirmPassword, gender } = req.body
  if (!username || !password || !confirmPassword || !gender) {
    res.send('All fields are required')
    return
  }
  if (password !== confirmPassword) {
    res.send('Passwords do not match')
    return
  }
  res.send(`Registration Successful!<br>Username: ${username}<br>Gender: ${gender}<br><br><a href="/register">Back to Register</a>`)
})

// app.listen(5010, () => {
//   console.log('Server is running on http://localhost:5010')
// })

