require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000; // Use the PORT from .env, or default to 4000

app.get("/", (req, res) => {
    res.send("Hello World");
});
app.get("/login", (req, res) => {
    res.send("login successfully");
});
app.listen(port, () => {
    console.log(`Server is working on port ${port}`);
});
