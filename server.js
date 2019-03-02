const express = require("express");
const router = express.Router();
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(morgan("common"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
