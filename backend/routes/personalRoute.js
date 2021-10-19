import express from "express";
import { createPersonalDetails, getAllInfo } from "../controller/personal.js";
import upload from "../middleware/upload.js";
const router = express.Router();

router.route("/create").post(upload, createPersonalDetails);

router.route("/list").get(getAllInfo);
export default router;
