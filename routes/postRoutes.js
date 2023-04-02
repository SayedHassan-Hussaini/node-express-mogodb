const express = require("express");
const {
  getPost,
  createPost,
  updatePost,
  deletePost,
  findPost,
} = require("../controller/postController");
const router = express.Router();

// Routers
router.route("/").get(getPost).post(createPost);
router.route("/:id").get(findPost).patch(updatePost).delete(deletePost);

module.exports = router;
