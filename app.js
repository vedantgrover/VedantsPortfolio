// Imports
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT;

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + "public/css"));

app.use(express.static('public'));
app.use('/images', express.static(__dirname + "public/images"));

app.use(express.static('public'));
app.use('/js', express.static(__dirname + "public/js"));

// Nodemailer configuration
const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., Gmail, Outlook
    auth: {
        user: 'bladedurman@gmail.com',
        pass: process.env.EMAIL_PASSWORD
    }
});

// Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact')
});

app.post('/contact', (req, res) => {
    const { firstname, lastname, email, message } = req.body;

    // Process the form data
    // Create the email content
    const mailOptions = {
        from: 'bladedurman@gmail.com',
        to: 'vedantvgrover@gmail.com',
        subject: 'New Contact Form Submission',
        text: `Name: ${firstname} ${lastname}\n
                Email: ${email}\n
                Message: ${message}`
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent:', info.response);
            res.redirect('/thank-you');
        }
    });

    // Redirect the user to a thank-you page
    res.redirect('/thank-you');
});

app.get("/thank-you", (req, res) => {
    res.render("thank-you")
})


// Listen on port
app.listen(port, () => console.info(`Listening on port ${port}`));
