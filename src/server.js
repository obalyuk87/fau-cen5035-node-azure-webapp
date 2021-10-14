// https://expressjs.com/en/starter/hello-world.html

const express = require("express");
const PORT = 8080;
const VERSION = 4.0;

// init app
const app = express();

// init route
app.get("/", (req, res) => {
    res.send({
        name: "My Awesome App",
        ts: new Date().toISOString(),
        version: VERSION
    });
});

// start listening on the port
app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});

module.exports = app;
