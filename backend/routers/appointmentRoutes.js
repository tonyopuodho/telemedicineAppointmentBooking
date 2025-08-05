import { Router } from "express";
import appointmentControllers from '../controllers/appointmentControllers.cjs'

const router = Router()
router.post("/bookAppointment",appointmentControllers.bookAppointment)
export default router