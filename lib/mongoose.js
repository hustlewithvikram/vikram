// lib/mongoose.js
import { log } from 'console';
import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

log(MONGODB_URI);

if (!MONGODB_URI) {
  throw new Error('Missing environment variable: MONGODB_URI');
}

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedDb && cachedClient) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = await mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "vikramisdev",
  });

  cachedClient = client;
  cachedDb = client.connection.db;

  return { client, db: cachedDb };
}
