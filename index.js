const express = require("express");

const server = express();

server.use = express.json();

server.get("/", (request, response) => {
    const songs = [ { id: 1, name: "Final Countdown" } ];

    response.status(200).json(songs)
})

// Make the port dynamic so it can run on Heroku AND my local machine
const port = process.env.PORT || 5000;

server.listen(port, () => {
    console.log(`\n*** Running on port ${port} ***\n`)
})