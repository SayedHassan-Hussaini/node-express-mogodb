import express from "express";
import { checkId } from "../controllers/commonControllers.js";

const router = express.Router();
import {
  getPosts,
  createPost,
  deletePost,
  getSinglePost,
} from "../controllers/postControllers.js";

router.param("id", checkId);

router.route(`/`).get(getPosts).post(createPost);
router.route(`/:id`).delete(deletePost).get(getSinglePost);

export default router;
