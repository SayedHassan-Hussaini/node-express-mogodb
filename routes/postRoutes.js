const express = require("express");

const router = express.Router();

// Routers
router.route("/post").get(getPost).post(createPost);
router.route("/:id").patch(updatePost).delete(deletePost);
