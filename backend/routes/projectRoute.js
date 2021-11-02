import express from "express";
import projectController from "../controller/projectController.js";
const router = express.Router();
import auth from "../middleware/auth.js";
router.route("/create").post(auth, projectController.createProjectDetails);

router.route("/get").get(auth, projectController.getProjectDetails);

router.route("/update/:id").put(auth, projectController.updateProject);

router.route("/delete/:id").put(auth, projectController.deleteProject);

// router.route("/list").get(getAllInfo);
export default router;
