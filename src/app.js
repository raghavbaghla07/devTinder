console.log("RUNNING APP.JS FILE");
const express = require("express");
const app = express();

app.get("/user", (req, res) => {
    res.send({ username: "Raghav Baghla" })
})
app.post("/user", (req, res) => {
    res.send("Data successfully saved to database")
})
app.delete("/user", (req, res) => {
    res.send("Deleted successfully")
})
app.use("/test", (req, res) => {
    res.send("hello from server")
})

app.listen(3000, () => {
    console.log("server is successfully listening on port no. 3000")
});