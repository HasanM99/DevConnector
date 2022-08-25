const express = require('express');
const connectDB = require('./config/db');
const res = require('express/lib/response');

const app = express();

connectDB();

app.get('/', (req,res)=> res.send('API Running'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));