// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');

// app.set('view engine', 'pug');
// app.set('views', './Exxpress Files');

// app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.redirect('/student');
// });

// app.get('/student', (req, res) => {
//   res.render('student');
// });

// app.post('/submitStudent', (req, res) => {
//   const { name, email, course } = req.body;
//   res.redirect(`/data?name=${name}&email=${email}&course=${course}`);
// });

// app.get('/data', (req, res) => {
//   const { name, email, course } = req.query;
//   res.render('dataPage', { name, email, course });
// });

// app.listen(3000, () => {
//   console.log('Server is running at http://localhost:3000');
// });