const mongoose = require('mongoose');

// Ganti <MONGODB_URI> dengan koneksi string dari MongoDB Atlas Anda
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://user:pass@cluster.mongodb.net/chat-db";

const connectDB = async () => {
    if (mongoose.connection.readyState >= 1) return;
    try {
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB Terkoneksi");
    } catch (err) {
        console.error("Gagal koneksi MongoDB:", err);
    }
};

// Schema Pesan
const MessageSchema = new mongoose.Schema({
    sender: String,
    text: String,
    timestamp: { type: Date, default: Date.now }
});

const Message = mongoose.models.Message || mongoose.model('Message', MessageSchema);

module.exports = { connectDB, Message };
