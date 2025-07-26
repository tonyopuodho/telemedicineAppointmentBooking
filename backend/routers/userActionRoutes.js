import { Router } from "express";
import userActionControllers from '../controllers/userActionControllers.cjs'

const router = Router()

router.post("/feedback",userActionControllers.createFeedback)
router.get("/feedback",userActionControllers.getAllfeedback)

export default router