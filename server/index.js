/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../database');

const app = express();
const port = 3004;

// Body Parser & URL encoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Connect to client FRONT END
// app.use(express.static(path.resolve(__dirname, '/../client/dist')));
app.use('/', express.static(path.join(__dirname, '/../client/dist')));

// Get Request Basic Test
app.get('/', (req, res) => {
  res.send('Hello World from baselevel Server!');
});

// Get Request data generator
app.get('/api/more-places', (req, res) => {
  db.retrieveData((err, response) => {
    if (err) {
      console.log(err);
      res.status(400).send();
    } else {
      res.status(200).send(response);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
