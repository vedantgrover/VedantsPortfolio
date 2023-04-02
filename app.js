// Imports
const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
const adminModel = require("./models/admin_info")

require('dotenv').config();

const app = express();

const port = 8080;
const mongoDBURI = process.env.DATABASE_SRV;

async function connect() {
    try {
        await mongoose.connect(mongoDBURI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

// Static Files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + "public/css"));

app.use(express.static('public'));
app.use('/images', express.static(__dirname + "public/images"));

app.use(express.static('public'));
app.use('/js', express.static(__dirname + "public/js"));

// Set Views
app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyParser.json());

app.get('', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/login', (req, res) => {
    res.render('login');
})

// app.post('/login-user', async (req, res) => {
//     const { username, password } = req.body;

//     try {
//         let user = await adminModel.find({
//             username: username,
//             password: password
//         }).then(data => {
//             if (data.length) {
//                 res.json(data[0]);
//             } else {
//                 res.json('Email or Password is incorrect');
//             }
//         });

//         console.log(user);
//     } catch(err) {
//         console.log(err);
//     };
// });

// Connecting to MongoDB
connect();

// Listen on port
app.listen(port, () => console.info(`Listening on port ${port}`));
