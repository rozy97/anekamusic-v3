require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const router = require("./src/routes/root");
const helmet = require("helmet");

const app = express();
const port = process.env.PORT;

app.use(logger("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(helmet({ xssFilter: true }));
app.use("/api", router);

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

module.exports = app;
