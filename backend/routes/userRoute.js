import express from "express";
const router = express.Router();
// import auth from "../middleware/auth.js";
import userController from "../controller/userController.js";

router.route("/signUp").post(userController.create);

export default router;
