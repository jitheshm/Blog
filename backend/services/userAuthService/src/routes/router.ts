import { Router } from "express";
import signupController from "../controllers/signupController";
const router = Router();

router.post('/signup',signupController)

export default router