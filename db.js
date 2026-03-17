const { Client, Databases, ID, Query } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Ganti jika pakai self-hosted
    .setProject('PROJECT_ID_ANDA') // GANTI INI
    .setKey('standard_52804f783f1e75b9c4646d5c0e8d014ef27fa70c68c22c1419996912d5c29846c86d0b81a9c95048241c5b9d050bb9c7b87a9c412fd6656175d6f1b9d4c4c86281882c905e8a013bf7ceb8169ed4caa3018b4bc953ad085d8905c8b1b61ed3534dee6d2f15971caaa0c47e0b7c36af8dda89f963a666f689989791f1eeeb28f4'); // GANTI INI

const databases = new Databases(client);

const DB_ID = 'DATABASE_ID_ANDA'; // GANTI INI
const COLL_ID = 'COLLECTION_ID_ANDA'; // GANTI INI

module.exports = { databases, ID, Query, DB_ID, COLL_ID };
