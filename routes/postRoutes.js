const express = require("express");

const router = express.Router();

// Routers
router.route("/").get(getPost).post(createPost);
router.route("/:id").get(findPost).patch(updatePost).delete(deletePost);
