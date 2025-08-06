import { Router } from "express";
import appointmentControllers from '../controllers/appointmentControllers.cjs'

const router = Router()
router.post("/bookAppointment",appointmentControllers.bookAppointment)
router.get("/appointment",appointmentControllers.getAppointment)
router.get("/doctorAppointment/:id",appointmentControllers.doctorAppointment)
export default router