import { Router } from "express";
import appointmentControllers from '../controllers/appointmentControllers.cjs'

const router = Router()
router.post("/bookAppointment",appointmentControllers.bookAppointment)
router.get("/appointment",appointmentControllers.getAppointment)
router.get("/doctorAppointment/:id",appointmentControllers.doctorAppointment)
router.get("/doctorsAppointment/:id",appointmentControllers.doctorsAppointment)
router.put("/completeAppointment/:id",appointmentControllers.completeAppointment)
router.put("/cancelAppointment/:id",appointmentControllers.cancelAppointment)
router.get("/countCancel",appointmentControllers.countCancel)
router.get("/countComplete",appointmentControllers.countComplete)
router.get("/countPending",appointmentControllers.countPending)
router.get("/patientAppointment/:id",appointmentControllers.patientAppointment)
router.get("/countDoctorAppoinment",appointmentControllers.countDoctor)
export default router