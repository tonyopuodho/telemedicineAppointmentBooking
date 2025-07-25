import { Router } from "express";
import userauthControllers from '../controllers/userauthControllers.cjs'

const router = Router()
router.post('/register',userauthControllers.registerUser)
router.post("/loginpatient",userauthControllers.loginpatient)

export default router