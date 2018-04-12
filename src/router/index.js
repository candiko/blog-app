const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("/blogs");
});

const blogs = require("./blogs");

router.use("/", blogs);

module.exports = router;
