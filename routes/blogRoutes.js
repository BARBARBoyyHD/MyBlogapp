const express = require("express");
const blogController = require("../controllers/blogController");
const router = express.Router();

// Route to get all blogs
router.get("/", blogController.blog_index);

// Route to create a new blog
router.post("/", blogController.blog_create_post);
// Route to render the "create" view for creating a new blog
router.get("/create", blogController.blog_create_get);
// Route to get details of a specific blog
router.get("/:id", blogController.blog_details);

// Route to delete a specific blog
router.delete("/:id", blogController.blog_delete);

module.exports = router;
