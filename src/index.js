const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "production") {
  dotenv.load();
}

const { app } = require("./config");

app.listen(3000, () => {
  console.log("Daris is listening for RESTful Blog App...");
});
