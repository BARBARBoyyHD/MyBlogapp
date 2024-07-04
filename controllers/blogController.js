// blog_index, blog_details, blog_create_get, blog_create_post, blog_delete
const Blog = require("../model/blog");
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      if (result) {
        res.render("details", { blog: result, title: "Blog Details" });
      } else {
        res.status(404).render("404");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).render("500");
    });
};

const blog_create_get = (req, res) => {
  res.render("create", { title: "Create a new Blog" });
};
const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);

  blog
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

const blog_delete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
      .then((result) => {
        if (result) {
          res.json({ redirect: "/" });
        } else {
          res.status(404).json({ error: "Blog post not found" });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Internal Server Error" });
      });
  };

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete
};
