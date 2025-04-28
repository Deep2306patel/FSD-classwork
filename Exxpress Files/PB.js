// // const express = require('express')
// // const app = express()

const { Url } = require('url')

// // app.use(express.urlencoded({ extended: true }))

// // app.get('/', (req, res) => {
// //   res.redirect('/input')
// // })

// // app.get('/input', (req, res) => {
// //   res.send(`
// //     <form action="/submit" method="POST">
// //       <textarea name="text" rows="10" cols="30"></textarea><br>
// //       <button type="submit">Submit</button>
// //     </form>
// //   `)
// // })

// // app.post('/submit', (req, res) => {
// //   const text = req.body.text || ''
// //   const sentences = text.split('.').filter(sentence => sentence.trim() !== '')
// //   const formattedText = sentences.map(sentence => sentence.trim()).join('<br>')
// //   res.send(formattedText)
// // })

// const express = require('express')
const app = require('express')()
app.use(require('express').urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//   res.send(`
//     <form action="/submit" method="GET">
//       <label for="username">Username:</label>
//       <input type="text" id="username" name="username"><br><br>
//       <label for="country">Select Country:</label>
//       <select id="country" name="country">
//         <option value="India">India</option>
//         <option value="USA">USA</option>
//         <option value="Canada">Canada</option>
//         <option value="Australia">Australia</option>
//       </select><br><br>
//       <button type="submit">Submit</button>
//     </form>
//   `)
// })

// app.get('/submit', (req, res) => {
//   const username = req.query.username || 'Guest'
//   const country = req.query.country || 'Unknown'
//   res.send(`${username} & You are from ${country}`)
// })



// input two number from user and make dropdown menu and provide opetion like add, sub, mul, div and run operation

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

  res.send(`Result: ${result}`)
})

// app.listen(5010, () => {
//   console.log('Server is running on http://localhost:5010')
// })
