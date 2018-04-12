const mongoose = require("mongoose");

mongoose.connect(process.env.DB_ONLINE, {
  useMongoClient: true
});

const Blog = require("../models");

module.exports = Blog;
