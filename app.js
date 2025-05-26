var express = require('express');
app = express();

app.get('/', function (req, res) {
<<<<<<< HEAD
  res.send('Hello Caracola World!\n');
=======
  res.send('HelloCaracolillo World!\n');
>>>>>>> b396441 (editado)
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

