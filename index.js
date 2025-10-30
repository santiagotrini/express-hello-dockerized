import express from 'express';
import mysql from 'mysql';
import 'dotenv/config';

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: { rejectUnauthorized: false }
  //flags: ['SSL','SSL_VERIFY_SERVER_CERT']
});

conn.connect(err => {
  if (err) throw err;
  console.log(`DB connected @ ${process.env.DB_HOST}`);
});


const app = express();

app.get('/', (req, res) => { res.send('Hello world'); });

app.listen(3000, () => { console.log(`Server listening`); });
