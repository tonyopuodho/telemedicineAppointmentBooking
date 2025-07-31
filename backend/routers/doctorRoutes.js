import { Router } from "express";
import doctorActionControllers from '../controllers/doctorActionControllers.cjs'
import { upload } from "../configs/uploads.js";

const router = Router()
router.post("/addDoctor", upload.single('image'),doctorActionControllers.registerDoctor)
router.get("/doctors",doctorActionControllers.getDoctors)
router.get("/countDoctor",doctorActionControllers.countDoctor)
export default router