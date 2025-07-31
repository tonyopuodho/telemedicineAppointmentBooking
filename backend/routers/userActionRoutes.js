import { Router } from "express";
import userActionControllers from '../controllers/userActionControllers.cjs'

const router = Router()

router.post("/feedback",userActionControllers.createFeedback)
router.get("/feedback",userActionControllers.getAllfeedback)
router.get("/countFeedback",userActionControllers.countFeedback)

export default router