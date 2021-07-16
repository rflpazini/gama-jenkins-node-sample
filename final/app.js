const express = require('express')
const app = express();

app.use(express.json())

app.get('/', (req, res) => {
    res.send({ message:"Hello World from DOCKER!" })
})

const port = process.env.PORT || 3000,
  server = app.listen(port, () => {
    console.log('🐋 ... is running at http://localhost:%d', port);
  });

module.exports = server;
