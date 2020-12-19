const express = require("express");
const app = express();
const http = require("http");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//*****DB Setup */
mongoose.connect(
  "mongodb://localhost:27017/whatsapp_private_db",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("Mongodb db set");
  }
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connectionasdf error:"));

db.once("open", function () {
  console.log("Successfully connected to MongoDB!");
});

app.use(bodyParser.json({ type: "*/*" }));

app.get("/", (req, res) => {
  res.send("Hello bro");
});

const port = process.env.PORT || 3009;
const server = http.createServer(app);
server.listen(port);
console.log("Server listening on port:", port);
