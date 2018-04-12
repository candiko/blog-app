const mongoose = require("mongoose");

mongoose.connect(process.env.DB_LOCAL, {
  useMongoClient: true
});

const Blog = require("../models");

module.exports = Blog;
