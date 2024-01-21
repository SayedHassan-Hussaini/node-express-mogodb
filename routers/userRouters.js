import express from "express";
import {checkId} from "../controllers/commonControllers.js"

const router = express.Router();
import  {
  getUsers,
  createUser,
  deleteUser,
  getSingleUser,
} from "../controllers/userControllers.js";

router.param('id',checkId)

router.route(`/`).get(getUsers).post(createUser);
router.route(`/:id`).delete(deleteUser).get(getSingleUser);

export default router;
