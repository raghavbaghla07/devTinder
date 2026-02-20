const express = require("express");
const app = express();
app.use("/test", (req, res) => {
    res.send("hello from server")
})
app.use("/RU", (req, res) => {
    res.send("SU")
})
app.use("/SU", (req, res) => {
    res.send("RU")
})

app.listen(3000, () => {
    console.log("server is successfully listening on port no. 3000")
});