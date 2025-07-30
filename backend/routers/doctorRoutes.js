import { Router } from "express";
import doctorActionControllers from '../controllers/doctorActionControllers.cjs'
import { upload } from "../configs/uploads.js";

const router = Router()
router.post("/addDoctor", upload.single('image'),doctorActionControllers.registerDoctor)

export default router