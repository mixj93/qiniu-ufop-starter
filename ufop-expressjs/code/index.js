const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.post('/uop', function (req, res) {
  res.send(req.body);
});

app.listen('9100', function () {
  console.log('App is listening at port 9100')
});
