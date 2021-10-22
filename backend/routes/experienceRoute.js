import express from "express";
import { createExperienceDetails } from "../controller/experienceController.js";
const router = express.Router();
import auth from "../middleware/auth.js";
router.route("/create").post(auth, createExperienceDetails);

export default router;
