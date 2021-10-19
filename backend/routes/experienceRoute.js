import express from "express";
import { createExperienceDetails } from "../controller/experience.js";
const router = express.Router();

router.route("/create").post(createExperienceDetails);

export default router;
