const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/restful_blog_app", {
  useMongoClient: true
});

const Blog = require("../models");

module.exports = Blog;
