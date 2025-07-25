import { Router } from "express";
import userActionControllers from '../controllers/userActionControllers.cjs'

const router = Router()

router.post("/feedback",userActionControllers.createFeedback)

export default router