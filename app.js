// Imports
const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
require('dotenv').config();

const app = express();

const port = process.env.PORT;
const databaseSRV = process.env.DATABASE_SRV

const client = new MongoClient(databaseSRV, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict:true,
        deprecationErrors: true
    }
});

async function connect() {
    try {
        await client.connect();
        await client.db("admin").command({ ping: 1});
        console.log("Pinged deployment\nYou are connected to MongoDB");
    } finally {
        await client.close();
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

app.get('', (req, res) => {
    res.render('index');
});

app.get('/contact', (req, res) => {
    res.render('contact')
})

// Connecting to MongoDB
connect().catch(console.dir);

// Listen on port
app.listen(port, () => console.info(`Listening on port ${port}`));
