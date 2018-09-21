const express = require('express');
const app = express();

// route handler for HTTP GET
app.get('/', (req, res) => {
  res.send({ hi: 'there again' });
});

//tell node to listen on port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
