import express from "express";
import { createEducationDetails } from "../controller/education.js";
const router = express.Router();

router.route("/create").post(createEducationDetails);

export default router;
