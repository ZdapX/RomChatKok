const express = require('express');
const path = require('path');
const { connectDB, Message } = require('../db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route Utama
app.get('/', async (req, res) => {
    await connectDB();
    const messages = await Message.find().sort({ timestamp: 1 });
    res.render('room', { messages });
});

// Route Kirim Pesan
app.post('/send', async (req, res) => {
    const { name, message } = req.body;
    if (name && message) {
        await connectDB();
        await Message.create({ sender: name, text: message });
    }
    res.redirect('/');
});

module.exports = app;
