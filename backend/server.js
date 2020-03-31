const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const PORT = 4000;
const cors = require("cors");
const fetch = require("node-fetch");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use all controller APIs here
// app.use('/', )

app.listen(PORT, function() {
  console.log("server is running on port : ", PORT);
});
