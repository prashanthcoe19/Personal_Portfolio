import express from "express";
import experienceController from "../controller/experienceController.js";
const router = express.Router();
import auth from "../middleware/auth.js";
router
  .route("/create")
  .post(auth, experienceController.createExperienceDetails);

router.route("/update/:id").put(auth, experienceController.updateExperience);

router
  .route("/delete/:id")
  .delete(auth, experienceController.deleteExperienceDetails);

export default router;
