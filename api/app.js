const express = require('express');
const app = express();

const port = '8000';

app.use((req, res, next) => {
  console.log(`http ${req.method} ${req.originalUrl}`);
  next();
});

app.get('/api/info', (req, res) => {
  res.send({status: 'ok'});
});

app.listen(port, () => {
  const hostname = process.env.HOSTNAME;
  console.log(`${hostname} Listening on port :${port}`);
});
