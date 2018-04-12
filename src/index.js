require("dotenv").load();

const { app } = require("./config");

app.listen(process.env.PORT || 3000, () => {
  console.log("Daris is listening for RESTful Blog App...");
});
