import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const app = express();

app.get('/', (req, res) => {
    res.send(`<div style="text-align: center;"><h1>Hello, World!</h1></div>`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});