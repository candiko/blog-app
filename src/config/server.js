const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const expressSanitizer = require("express-sanitizer");
const routes = require("../router");
const express = require("express");

const app = express();

app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(express.static("public"));
app.set("views", "src/views");
app.set("view engine", "ejs");
app.use("/", routes);

module.exports = app;
