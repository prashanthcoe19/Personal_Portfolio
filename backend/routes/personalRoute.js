import express from "express";
import {
  createPersonalDetails,
  updatePersonal,
  deletePesonalDetails,
  getPersonalDetails,
} from "../controller/personalController.js";
import upload from "../middleware/upload.js";
const router = express.Router();
import auth from "../middleware/auth.js";

router.route("/create").post(auth, upload, createPersonalDetails);

router.route("/get").get(auth, getPersonalDetails);

router.route("/update/:id").put(auth, upload, updatePersonal);

router.route("/delete/:id").delete(auth, deletePesonalDetails);

// router.route("/list").get(getAllInfo);
export default router;
