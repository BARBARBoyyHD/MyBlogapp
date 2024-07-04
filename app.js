// Importing required modules
const express = require("express");
const morgan = require("morgan"); // For logging HTTP requests
const mongoose = require("mongoose"); // For interacting with MongoDB
const path = require("path"); // For file path operations
const blogRoutes = require("./routes/blogRoutes"); // Corrected the path to blogRoutes

// Creating an instance of the Express application
const app = express();

// Connecting to the MongoDB database
const dbURL = "mongodb+srv://uwiblog123:uwiblog1234@nodeuts.piqbqzx.mongodb.net/nodeuts?retryWrites=true&w=majority";

mongoose
  .connect(dbURL)
  .then((result) => {
    // Starting the server on port 5000
    app.listen(5000, () => {
      console.log(`Server is running on port 5000`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// Setting the view engine to EJS and the views directory
app.set("views", path.join(__dirname, "public"));
app.set("view engine", "ejs");

// Using the morgan middleware for logging HTTP requests
app.use(morgan("dev"));

// Serving static files from the public directory
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Redirecting requests to the root URL ("/") to the "/blogs" URL
app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// Rendering the "about" view
app.get("/about", (req, res) => {
  res.status(200).render("about");
});

// Blog routes
app.use('/blogs',blogRoutes);

// Handling requests that do not match any defined routes by rendering the "404" view
app.use((req, res) => {
  res.status(404).render("404");
});
