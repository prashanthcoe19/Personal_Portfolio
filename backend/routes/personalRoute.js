import express from "express";
import { createPersonalDetails } from "../controller/personal.js";
const router = express.Router();

router.route("/personal").post(createPersonalDetails);
