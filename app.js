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

const host = process.env.HOSTNAME || "localhost";

const port = process.env.PORT || 3000,
  server = app.listen(port, () => {
    console.log('🐋 %s is running at http://localhost:%d - pod: %s', appName, port, host);
  });

module.exports = server;
