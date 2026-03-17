const { Client, Databases, ID, Query } = require('node-appwrite');

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Ganti jika pakai self-hosted
    .setProject('PROJECT_ID_ANDA') // GANTI INI
    .setKey('API_KEY_ANDA'); // GANTI INI

const databases = new Databases(client);

const DB_ID = 'DATABASE_ID_ANDA'; // GANTI INI
const COLL_ID = 'COLLECTION_ID_ANDA'; // GANTI INI

module.exports = { databases, ID, Query, DB_ID, COLL_ID };
