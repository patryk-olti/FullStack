const express = require("express");


/* database section - START */
const mongoose = require('mongoose');
const dbKeys = require('../db/dbKeys');
const { login, password } = dbKeys;
mongoose.connect(`mongodb+srv://${login}:${password}@cluster0.stmjhgd.mongodb.net/?retryWrites=true&w=majority`);

const db = mongoose.connection;
db.on('err', console.error.bind(console, 'connection error:'));
/* database section - STOP */

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});