console.log("RUNNING APP.JS FILE");
const express = require("express");
const app = express();

app.use("/user",
    (req, res, next) => {
        console.log("Entered handler 1");
        next();
        res.send("Response 1")
    },
    (req, res) => {
        console.log("Entered handler 2");
        res.send("Response 2")
    }
)

app.use("/test", (req, res) => {
    res.send("hello from server")
})

app.listen(3000, () => {
    console.log("server is successfully listening on port no. 3000")
});