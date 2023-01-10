const express = require('express');
const path = require('path');
const app = express();

console.log("vdsvdsvds=== I Love you nancy")
console.log("vdsvdsvds=== I Love you nancy")
app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(4800);