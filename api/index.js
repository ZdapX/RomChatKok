const express = require('express');
const path = require('path');
const { databases, ID, Query, DB_ID, COLL_ID } = require('../db');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route Halaman Utama
app.get('/', (req, res) => {
    res.render('room');
});

// Ambil pesan dari Appwrite
app.get('/api/messages', async (req, res) => {
    try {
        const response = await databases.listDocuments(
            DB_ID,
            COLL_ID,
            [Query.orderAsc('timestamp'), Query.limit(100)]
        );
        res.json(response.documents);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Kirim pesan ke Appwrite
app.post('/api/messages', async (req, res) => {
    const { name, text } = req.body;
    try {
        const result = await databases.createDocument(
            DB_ID, 
            COLL_ID, 
            ID.unique(), 
            {
                name,
                text,
                timestamp: Date.now()
            }
        );
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = app;
