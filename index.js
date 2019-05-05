const express = require('express')
const app = express()
const port = 4000

app.use(function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      next();
});
app.get('/kps', (req, res) => res.json(Math.floor(Math.random() * (2 - 0 + 1) + 0)))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
