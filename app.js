const express = require('express');
const app = express();
const cors = require('cors');

const tourRoute = require('./routes/tour.route.js');

app.use(express.json());
app.use(cors());

app.use('/api/v1/tours', tourRoute);

app.get('/', (req, res) => {
  res.send('Welcome to Tour And Travel services LTD');
});

module.exports = app;
