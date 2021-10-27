import express from "express";
import educationController from "../controller/educationController.js";
const router = express.Router();
import auth from "../middleware/auth.js";
router.route("/create").post(auth, educationController.createEducationDetails);

router.route("/update/:id").put(auth, educationController.updateEducation);

router
  .route("/delete/:id")
  .delete(auth, educationController.deleteEducationDetails);
export default router;
