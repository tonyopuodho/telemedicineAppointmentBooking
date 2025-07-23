import { Router } from "express";
import authControllers from '../controllers/authControllers.cjs'
const router = Router()
router.post("/login",authControllers.loginuser)
router.get("/username", authControllers.username)
router.get("/logout",authControllers.logout)
export default router