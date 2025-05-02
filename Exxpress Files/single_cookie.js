

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/submit-feedback', (req, res) => {
    const feedbackData = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message,
        rating: req.body.rating
    };
    res.cookie('userFeedback', JSON.stringify(feedbackData));
    res.redirect('/feedback-result');
});

app.get('/feedback-result', (req, res) => {
    res.send('Stored Feedback: ' + JSON.stringify(req.cookies.userFeedback));
});


app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
  });

app.get('/', (req, res) => {
    res.send(`
        <form action="/submit-feedback" method="POST">
            <input name="name" placeholder="Name" required /><br/>
            <input name="email" type="email" placeholder="Email" required /><br/>
            <textarea name="message" placeholder="Your feedback" required></textarea><br/>
            <select name="rating" required>
                <option value="">Rate Us</option>
                <option value="excellent">Excellent</option>
                <option value="good">Good</option>
                <option value="average">Average</option>
                <option value="poor">Poor</option>
            </select><br/>
            <button type="submit">Submit</button>
        </form>
    `);
});