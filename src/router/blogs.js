const { Blog } = require("../config");
const express = require("express");

const router = express.Router();

router
  .route("/blogs")
  // READ - Lists all blog posts in DB
  .get((req, res) => {
    Blog.find({}, (err, blogs) => {
      if (err) {
        console.log("ERROR!");
        console.log(err);
      } else {
        res.render("index", { blogs });
      }
    });
  })
  // CREATE - Adds new blog post to DB
  .post((req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.create(req.body.blog, (err, newPost) => {
      if (err) {
        console.log("ERROR!");
        console.log(err);
        res.redirect("/blogs/new");
      } else {
        console.log("Blog post has been successfully saved.");
        console.log(newPost);
        res.redirect("/blogs");
      }
    });
  });

// CREATE - Shows form to add a new blog post
router.get("/blogs/new", (req, res) => {
  res.render("new");
});

// UPDATE - Shows form to edit an existing blog post
router.get("/blogs/:id/edit", (req, res) => {
  Blog.findById(req.params.id, (err, foundPost) => {
    if (err) {
      res.redirect("/blogs");
    } else {
      res.render("edit", { blog: foundPost });
    }
  });
});

router
  .route("/blogs/:id")
  // READ - Shows particular blog post from DB
  .get((req, res) => {
    Blog.findById(req.params.id, (err, foundPost) => {
      if (err) {
        console.log("ERROR!");
        console.log(err);
        res.redirect("/blogs");
      } else {
        res.render("show", { blog: foundPost });
      }
    });
  })
  // UPDATE - Updates an existing blog post in DB
  .put((req, res) => {
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, (err, updatedPost) => {
      if (err) {
        console.log(err);
        res.redirect("/blogs");
      } else {
        console.log("Blog post has been successfully updated.");
        console.log(updatedPost);
        res.redirect(`/blogs/${req.params.id}`);
      }
    });
  })
  // DELETE - Removes an existing blog post from DB
  .delete((req, res) => {
    Blog.findByIdAndRemove(req.params.id, err => {
      if (err) {
        console.log(err);
        res.redirect(`/blogs/${req.params.id}`);
      } else {
        console.log("Blog post has been successfully deleted from DB.");
        res.redirect("/blogs");
      }
    });
  });

module.exports = router;
