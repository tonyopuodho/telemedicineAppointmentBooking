import { Router } from "express";
import userauthControllers from '../controllers/userauthControllers.cjs'

const router = Router()
router.post('/register',userauthControllers.registerUser)
router.post("/loginpatient",userauthControllers.loginpatient)
router.get("/patient",userauthControllers.getAllusers)
router.get("/patientName",userauthControllers.patientName)
router.get("/logoutpatient",userauthControllers.logout)
router.get("/patientDetail/:id",userauthControllers.patientDetail)
router.put("/patientDetail",userauthControllers.update)
router.get("/countPatient",userauthControllers.countPatient)

export default router