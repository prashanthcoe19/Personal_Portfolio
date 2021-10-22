import express from "express";
const router = express.Router();
import auth from "../middleware/auth.js";
import authController from "../controller/authController.js";

router
  .route("/")
  .post(authController.login)
  .get(auth, authController.getloggedInUser);

export default router;
