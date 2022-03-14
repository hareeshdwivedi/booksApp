const app = require("./app.js");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const port = process.env.PORT || 3003;
dotenv.config({ path: "./env/config.env" });
const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);
mongoose
  .connect(DB)
  .then(() => {
    console.log("Database Connected Successfully....");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});
