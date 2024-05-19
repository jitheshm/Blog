import { Router } from "express";
import signupController from "../controllers/signupController";
import signinController from "../controllers/signinController";
const router = Router();

router.post('/signup',signupController)
router.post('/signin',signinController)


export default router