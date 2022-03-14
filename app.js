const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoutes");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(bodyParser.json());
app.use(bodyParser.json());

app.use("/api/user", userRoute);

app.get("*", (req, res, next) => {
  res.status(404).json({
    status: "failed",
    message: `${req.originalUrl} not found...`,
  });
});

module.exports = app;
