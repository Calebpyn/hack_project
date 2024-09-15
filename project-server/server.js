const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

const port = 4000;

app.use(morgan("dev"));
app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.json("Hello, World!");
});

app.listen(port, console.info(`Listening to port: ${port}`));
