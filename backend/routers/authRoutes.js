import { Router } from "express";
import authControllers from '../controllers/authControllers.cjs'
const router = Router()
router.post("/login",authControllers.loginuser)
export default router