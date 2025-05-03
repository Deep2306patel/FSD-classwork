// const express = require('express');
// const path = require('path');

// const app = express();

// app.set('view engine', 'pug');
// app.set('views', path.join(__dirname));

// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.render('firstpug', {
//     links: [
//       { href: '#home', text: 'Home' },
//       { href: '#about', text: 'About' },
//       { href: '#contact', text: 'Contact' }
//     ]
//   });
// });

// app.post('/submit', (req, res) => {
//   const { name, email, message } = req.body;
//   res.render('firstpug', {
//     links: [
//       { href: '#home', text: 'Home' },
//       { href: '#about', text: 'About' },
//       { href: '#contact', text: 'Contact' }
//     ],
//     userData: { name, email, message }
//   });
// });

// // Handle student form submission and display data
// app.get('/student', (req, res) => {
//   res.render('studentForm');
// });

// app.post('/submitStudent', (req, res) => {
//   const { name, email, course } = req.body;
//   res.redirect(`/data?name=${name}&email=${email}&course=${course}`);
// });

// app.get('/data', (req, res) => {
//   const { name, email, course } = req.query;
//   res.render('dataPage', { name, email, course });
// });

// const PORT = 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running at http://localhost:${PORT}`);
// });