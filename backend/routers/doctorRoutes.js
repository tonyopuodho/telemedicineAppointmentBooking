import { Router } from "express";
import doctorActionControllers from '../controllers/doctorActionControllers.cjs'
import { upload } from "../configs/uploads.js";

const router = Router()
router.post("/addDoctor", upload.single('image'),doctorActionControllers.registerDoctor)
router.get("/doctors",doctorActionControllers.getDoctors)
router.get("/countDoctor",doctorActionControllers.countDoctor)
router.get("/doctor/:id",doctorActionControllers.getDoctor)
router.put("/doctor/:id",doctorActionControllers.editDoctor)
router.delete("/doctor/:id",doctorActionControllers.deleteDoctor)
router.post("/loginDoctor",doctorActionControllers.loginDoctor)
router.get("/username", doctorActionControllers.username)
router.get("/logoutDoctor",doctorActionControllers.logoutDoctor)
router.put("/doctor",doctorActionControllers.updateDoctor)
export default router