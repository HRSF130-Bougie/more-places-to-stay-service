const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3004;

// Body Parser & URL encoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Connect to client FRONT END
app.use(express.static(path.resolve(__dirname, '/../client/dist')));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
