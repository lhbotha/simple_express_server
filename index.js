const express = require('express');
require('dotenv').config();

const cities = require('./routes/cities');

const app = express();

app.use(express.json());

app.use('/api/cities/', cities);

const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello Backend Developer!');
});

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`);
});
