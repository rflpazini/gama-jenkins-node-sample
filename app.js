const express = require('express')
const app = express();

const { uniqueNamesGenerator, adjectives, animals } = require('unique-names-generator');

app.use(express.json());

const appName = uniqueNamesGenerator({
  dictionaries: [adjectives, animals], 
  length: 2
}).toUpperCase(); 

app.get('/', (req, res) => {
    res.send({ message:`Hello World from ${appName}!` })
})

const port = process.env.PORT || 3000,
  server = app.listen(port, () => {
    console.log('🐋 %s is running at http://localhost:%d', appName, port);
  });

module.exports = server;
