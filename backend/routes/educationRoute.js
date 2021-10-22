import express from "express";
import { createEducationDetails } from "../controller/educationController.js";
const router = express.Router();
import auth from "../middleware/auth.js";
router.route("/create").post(auth, createEducationDetails);

export default router;
