const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true
  }
);

const Blog = mongoose.model('Blog',blogSchema);
module.exports = Blog


// This is a Mongoose schema that defines the structure of a blog post.
// It has three fields:
// - title: a string that is required and represents the title of the blog post.
// - snippet: a string that is required and represents a brief summary or snippet of the blog post.
// - body: a string that is required and represents the body or content of the blog post.
// The schema also includes a timestamps option, which automatically adds createdAt and updatedAt fields to the schema.
// These fields record the date and time when the document was created and last updated, respectively.

// The schema is then compiled into a Mongoose model using the mongoose.model() method.
// The model is exported so that it can be used in other files.
// The model is named "Blog" and uses the blogSchema as its schema.
