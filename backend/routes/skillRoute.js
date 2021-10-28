import express from "express";
import skillController from "../controller/skillController.js";
const router = express.Router();
import auth from "../middleware/auth.js";

router.route("/create").post(auth, skillController.createSkilldetails);

router.route("/get").get(auth, skillController.getSkillDetails);

router.route("/update/:id").put(auth, skillController.updateSkills);

router.route("/delete/:id").delete(auth, skillController.deleteSkill);

export default router;
